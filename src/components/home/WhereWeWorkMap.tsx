"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Map, { MapRef, Marker, NavigationControl, Popup, ViewStateChangeEvent } from "react-map-gl/mapbox";

import { eventTypeStyles, outreachEvents } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";

const markerColors = {
  "Community Outreach": "bg-brand-forest",
  "Medical Mission": "bg-brand-navy",
  "Feeding Programme": "bg-brand-amber",
} as const;

const overviewMapView = {
  latitude: 18.14,
  longitude: -77.35,
  zoom: 7.2,
};

const mobileOverviewMapView = {
  latitude: 18.14,
  longitude: -77.35,
  zoom: 6.9,
};

const defaultEvent = outreachEvents.find((event) => event.location.includes("St. Elizabeth")) ?? outreachEvents[0];

type Props = {
  mapboxToken?: string;
  sectionId?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  detailHrefBase?: string;
  detailLinkLabel?: string;
};

function isDayPopup(label: string) {
  return /Day [1-4]/.test(label);
}

export function WhereWeWorkMap({
  mapboxToken = "",
  sectionId = "where-we-work",
  eyebrow = "Where We Work",
  title = "Outreach locations across Jamaica",
  description = "Use the map to select an outreach location in Jamaica and drill down into each event recap.",
  detailHrefBase = "/updates",
  detailLinkLabel = "Read full event recap",
}: Props) {
  const mapRef = useRef<MapRef | null>(null);
  const focusedMapRef = useRef<MapRef | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const [viewState, setViewState] = useState(overviewMapView);
  const [focusedViewState, setFocusedViewState] = useState({
    latitude: defaultEvent.coordinates.lat,
    longitude: defaultEvent.coordinates.lng,
    zoom: 12,
  });
  const [activeEventId, setActiveEventId] = useState(defaultEvent.id);
  const [popupEventId, setPopupEventId] = useState<string | null>(null);
  const activeEvent = outreachEvents.find((event) => event.id === activeEventId) ?? defaultEvent;
  const activeEventIndex = Math.max(
    outreachEvents.findIndex((event) => event.id === activeEvent.id),
    0,
  );
  const popupEvent = outreachEvents.find((event) => event.id === popupEventId) ?? null;

  function handleMove(event: ViewStateChangeEvent) {
    setViewState(event.viewState);
  }

  function handleFocusedMove(event: ViewStateChangeEvent) {
    setFocusedViewState(event.viewState);
  }

  function clearHoverTimeout() {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }

  function selectEvent(eventId: string) {
    const nextEvent = outreachEvents.find((event) => event.id === eventId) ?? defaultEvent;
    const nextView = {
      latitude: nextEvent.coordinates.lat,
      longitude: nextEvent.coordinates.lng,
      zoom: 12,
    };

    setActiveEventId(eventId);
    setFocusedViewState(nextView);
    focusedMapRef.current?.flyTo({ ...nextView, duration: 650, essential: true });
  }

  function showPreviousEvent() {
    const nextIndex = (activeEventIndex - 1 + outreachEvents.length) % outreachEvents.length;
    selectEvent(outreachEvents[nextIndex].id);
  }

  function showNextEvent() {
    const nextIndex = (activeEventIndex + 1) % outreachEvents.length;
    selectEvent(outreachEvents[nextIndex].id);
  }

  function openPopup(eventId: string) {
    clearHoverTimeout();
    selectEvent(eventId);
    setPopupEventId(eventId);
  }

  function closePopupSoon() {
    clearHoverTimeout();
    hoverTimeoutRef.current = window.setTimeout(() => {
      setPopupEventId(null);
      hoverTimeoutRef.current = null;
    }, 120);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function syncInitialView(matches: boolean) {
      const nextView = matches ? mobileOverviewMapView : overviewMapView;
      setViewState(nextView);
      mapRef.current?.flyTo({ ...nextView, duration: 0, essential: true });
    }

    function handleMediaQueryChange(event: MediaQueryListEvent) {
      syncInitialView(event.matches);
    }

    syncInitialView(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearHoverTimeout();
    };
  }, []);

  return (
    <section id={sectionId} className="min-h-[100svh] bg-brand-cream">
      <div className="px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>

      <div className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)] lg:items-start">
          <div>
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-forest">Jamaica Overview</p>
              <h3 className="mt-1 font-display text-2xl leading-tight text-brand-ink">National mission footprint</h3>
            </div>
            <div className="relative h-[56svh] min-h-[380px] overflow-hidden rounded-2xl lg:h-[650px]">
              {mapboxToken ? (
                <Map
                  {...viewState}
                  mapStyle="mapbox://styles/mapbox/streets-v12"
                  mapboxAccessToken={mapboxToken}
                  attributionControl={false}
                  cooperativeGestures
                  ref={mapRef}
                  onMove={handleMove}
                  onLoad={() => {
                    const nextView = window.matchMedia("(max-width: 767px)").matches
                      ? mobileOverviewMapView
                      : overviewMapView;
                    setViewState(nextView);
                    mapRef.current?.flyTo({ ...nextView, duration: 0, essential: true });
                  }}
                  style={{ width: "100%", height: "100%" }}
                >
                  {outreachEvents.map((event) => (
                    <Marker
                      key={event.id}
                      latitude={event.coordinates.lat}
                      longitude={event.coordinates.lng}
                      anchor="bottom"
                    >
                      <button
                        type="button"
                        onMouseEnter={() => openPopup(event.id)}
                        onFocus={() => openPopup(event.id)}
                        onClick={() => openPopup(event.id)}
                        onMouseLeave={closePopupSoon}
                        onBlur={closePopupSoon}
                        className={`h-4 w-4 -translate-y-1 rounded-full ring-4 ring-white/75 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink ${markerColors[event.type]} ${
                          activeEventId === event.id ? "scale-125 ring-8 ring-white/90" : "hover:scale-110"
                        }`}
                        aria-label={`${event.title} marker`}
                      />
                    </Marker>
                  ))}
                  {popupEvent ? (
                    <Popup
                      latitude={popupEvent.coordinates.lat}
                      longitude={popupEvent.coordinates.lng}
                      anchor="top"
                      offset={16}
                      closeButton
                      closeOnClick={false}
                      className="map-event-popup"
                      onClose={() => setPopupEventId(null)}
                    >
                      <div
                        className="min-w-[250px] max-w-[300px] bg-brand-cream/95 px-4 py-4 text-brand-ink sm:px-5"
                        onMouseEnter={clearHoverTimeout}
                        onMouseLeave={closePopupSoon}
                      >
                        <span
                          className={`inline-flex max-w-[calc(100%-2.5rem)] whitespace-normal break-words font-medium leading-tight ${isDayPopup(popupEvent.dateLabel) ? "px-2.5 py-1 text-[11px]" : "px-2 py-0.5 text-[9px] sm:text-[10px]"} ${eventTypeStyles[popupEvent.type]}`}
                          title={popupEvent.dateLabel}
                        >
                          {popupEvent.dateLabel}
                        </span>
                        <h4 className="mt-3 font-display text-lg leading-tight text-brand-ink">{popupEvent.title}</h4>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest/70">
                          Location
                        </p>
                        <p className="mt-1 text-sm leading-snug text-brand-ink/80">{popupEvent.location}</p>
                        <p className="mt-3 text-sm leading-snug text-brand-ink/85">{popupEvent.summary}</p>
                        <Link
                          href={`${detailHrefBase}/${popupEvent.slug}`}
                          className="mt-4 inline-flex border-b border-brand-forest/35 pb-1 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-ink"
                        >
                          {detailLinkLabel}
                        </Link>
                      </div>
                    </Popup>
                  ) : null}
                  <NavigationControl position="bottom-right" showCompass={false} />
                </Map>
              ) : (
                <div className="flex h-full items-center justify-center bg-brand-cream/70 p-6 text-center">
                  <p className="max-w-sm text-sm text-brand-ink/80">
                    Add a Mapbox token in{" "}
                    <code className="rounded bg-white px-1 py-0.5">NEXT_PUBLIC_MAPBOX_TOKEN</code> (or{" "}
                    <code className="rounded bg-white px-1 py-0.5">MAPBOX_TOKEN</code>) to render the live outreach map.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-forest">Community Spotlight</p>
              <h3 className="mt-1 font-display text-2xl leading-tight text-brand-ink">{activeEvent.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
                Move through each outreach story to see national reach and community-level context together.
              </p>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[360px] lg:h-[330px]">
              {mapboxToken ? (
                <Map
                  {...focusedViewState}
                  mapStyle="mapbox://styles/mapbox/streets-v12"
                  mapboxAccessToken={mapboxToken}
                  attributionControl={false}
                  cooperativeGestures
                  ref={focusedMapRef}
                  onMove={handleFocusedMove}
                  onLoad={() => {
                    focusedMapRef.current?.flyTo({ ...focusedViewState, duration: 0, essential: true });
                  }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Marker latitude={activeEvent.coordinates.lat} longitude={activeEvent.coordinates.lng} anchor="bottom">
                    <span
                      className={`block h-5 w-5 -translate-y-1 rounded-full ring-8 ring-white/80 ${markerColors[activeEvent.type]}`}
                      aria-label={`${activeEvent.title} focused marker`}
                    />
                  </Marker>
                  <NavigationControl position="bottom-right" showCompass={false} />
                </Map>
              ) : (
                <div className="flex h-full items-center justify-center bg-white/60 p-6 text-center">
                  <p className="max-w-sm text-sm text-brand-ink/80">
                    Select a mission location to preview community-level map context once the live map is connected.
                  </p>
                </div>
              )}
            </div>

            <article className="border-l border-brand-forest/25 pl-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest/70">
                  Featured Location
                </p>
                <p className="text-xs font-semibold text-brand-ink/55">
                  {activeEventIndex + 1} / {outreachEvents.length}
                </p>
              </div>
              <p className="mt-2 text-sm leading-snug text-brand-ink/80">{activeEvent.location}</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/85">{activeEvent.summary}</p>
              <Link
                href={`${detailHrefBase}/${activeEvent.slug}`}
                className="mt-3 inline-flex border-b border-brand-forest/35 pb-1 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-ink"
              >
                {detailLinkLabel}
              </Link>
            </article>

            <div className="border-t border-brand-forest/15 pt-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={showPreviousEvent}
                  className="inline-flex rounded-full border border-brand-forest/30 px-4 py-2 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-forest hover:text-white"
                >
                  Previous
                </button>
                <div className="flex items-center gap-1.5" aria-label="Community spotlight progress">
                  {outreachEvents.map((event, index) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => selectEvent(event.id)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeEventIndex ? "w-7 bg-brand-forest" : "w-2.5 bg-brand-forest/25 hover:bg-brand-forest/45"
                      }`}
                      aria-label={`Show ${event.title}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={showNextEvent}
                  className="inline-flex rounded-full bg-brand-forest px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#165a3f]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
