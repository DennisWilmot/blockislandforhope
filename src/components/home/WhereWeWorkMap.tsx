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

const initialMapView = {
  latitude: 18.14,
  longitude: -77.78,
  zoom: 9.8,
};

const mobileMapView = {
  latitude: 18.14,
  longitude: -77.78,
  zoom: 9.8,
};

const defaultEvent = outreachEvents.find((event) => event.location.includes("St. Elizabeth")) ?? outreachEvents[0];

type Props = {
  mapboxToken?: string;
};

function isDayPopup(label: string) {
  return /Day [1-4]/.test(label);
}

export function WhereWeWorkMap({ mapboxToken = "" }: Props) {
  const mapRef = useRef<MapRef | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const [viewState, setViewState] = useState(initialMapView);
  const [activeEventId, setActiveEventId] = useState(defaultEvent.id);
  const [popupEventId, setPopupEventId] = useState<string | null>(null);
  const popupEvent = outreachEvents.find((event) => event.id === popupEventId) ?? null;

  function handleMove(event: ViewStateChangeEvent) {
    setViewState(event.viewState);
  }

  function clearHoverTimeout() {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }

  function openPopup(eventId: string) {
    clearHoverTimeout();
    setActiveEventId(eventId);
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
      const nextView = matches ? mobileMapView : initialMapView;
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
    <section id="where-we-work" className="min-h-[100svh] bg-brand-cream">
      <div className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Work"
          title="Outreach locations across Jamaica"
          description="Use the map to select an outreach location in Jamaica and drill down into each event recap."
        />
      </div>

      <div className="grid grid-cols-1 lg:h-[calc(100svh-13rem)] lg:grid-cols-[72fr_28fr]">
        <div className="relative h-[62svh] overflow-hidden lg:h-full">
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
                const nextView = window.matchMedia("(max-width: 767px)").matches ? mobileMapView : initialMapView;
                setViewState(nextView);
                mapRef.current?.flyTo({ ...nextView, duration: 0, essential: true });
              }}
              style={{ width: "100%", height: "100%" }}
            >
              {outreachEvents.map((event) => (
                <Marker key={event.id} latitude={event.coordinates.lat} longitude={event.coordinates.lng} anchor="bottom">
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
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest/70">Location</p>
                    <p className="mt-1 text-sm leading-snug text-brand-ink/80">{popupEvent.location}</p>
                    <p className="mt-3 text-sm leading-snug text-brand-ink/85">{popupEvent.summary}</p>
                    <Link
                      href={`/updates/${popupEvent.slug}`}
                      className="mt-4 inline-flex border-b border-brand-forest/35 pb-1 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-ink"
                    >
                      Read full event recap
                    </Link>
                  </div>
                </Popup>
              ) : null}
              <NavigationControl position="bottom-right" showCompass={false} />
            </Map>
          ) : (
            <div className="flex h-full items-center justify-center bg-brand-cream/70 p-6 text-center">
              <p className="max-w-sm text-sm text-brand-ink/80">
                Add a Mapbox token in <code className="rounded bg-white px-1 py-0.5">NEXT_PUBLIC_MAPBOX_TOKEN</code> (or{" "}
                <code className="rounded bg-white px-1 py-0.5">MAPBOX_TOKEN</code>) to render the live outreach map.
              </p>
            </div>
          )}
        </div>

        <aside className="border-t border-brand-forest/15 bg-white/70 p-6 backdrop-blur-sm lg:h-full lg:overflow-y-auto lg:border-l lg:border-t-0 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/60">Locations</p>
            <div className="mt-3 border-y border-brand-forest/15">
              {outreachEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/updates/${event.slug}`}
                  className={`group flex w-full items-start justify-between gap-3 border-b border-brand-forest/10 px-0 py-3 text-left text-sm transition-colors last:border-b-0 focus-visible:outline-none ${
                    "text-brand-ink/80 hover:text-brand-forest focus-visible:text-brand-forest"
                  }`}
                >
                  <span>
                    <span className="block font-semibold leading-tight">{event.title}</span>
                    <span className="mt-1 block text-xs text-current/75">{event.location}</span>
                  </span>
                  <span className="relative mt-0.5 h-5 w-[7.5rem] shrink-0 self-center">
                    <span
                      className={`absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-all duration-200 ${markerColors[event.type]} ${
                        "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-brand-forest transition-all duration-200 ${
                        "translate-x-[-0.25rem] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                      }`}
                    >
                      Read more {"->"}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
