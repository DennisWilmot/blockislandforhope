"use client";

import Link from "next/link";
import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";

import { eventTypeStyles, outreachEvents } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";

const markerColors = {
  "Community Outreach": "bg-brand-forest",
  "Medical Mission": "bg-brand-navy",
  "Feeding Programme": "bg-brand-amber",
} as const;

const defaultEvent = outreachEvents.find((event) => event.location.includes("St. Elizabeth")) ?? outreachEvents[0];

type Props = {
  mapboxToken?: string;
};

export function WhereWeWorkMap({ mapboxToken = "" }: Props) {
  const [activeEventId, setActiveEventId] = useState(defaultEvent.id);
  const activeEvent = outreachEvents.find((event) => event.id === activeEventId) ?? outreachEvents[0];

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
              initialViewState={{ latitude: 18.14, longitude: -77.4, zoom: 7.3 }}
              mapStyle="mapbox://styles/mapbox/streets-v12"
              mapboxAccessToken={mapboxToken}
              attributionControl={false}
              cooperativeGestures
              style={{ width: "100%", height: "100%" }}
            >
              {outreachEvents.map((event) => (
                <Marker key={event.id} latitude={event.coordinates.lat} longitude={event.coordinates.lng} anchor="bottom">
                  <button
                    type="button"
                    onClick={() => setActiveEventId(event.id)}
                    className={`h-4 w-4 -translate-y-1 rounded-full ring-4 ring-white/75 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink ${markerColors[event.type]} ${
                      activeEventId === event.id ? "scale-125 ring-8 ring-white/90" : "hover:scale-110"
                    }`}
                    aria-label={`${event.title} marker`}
                  />
                </Marker>
              ))}
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
          <span className={`inline-flex px-3 py-1 text-xs font-medium ${eventTypeStyles[activeEvent.type]}`}>
            {activeEvent.dateLabel}
          </span>
          <h3 className="mt-4 font-display text-2xl text-brand-ink">{activeEvent.title}</h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink/55">Address</p>
          <p className="mt-1 text-sm text-brand-ink/75">{activeEvent.location}</p>
          <p className="mt-4 text-sm text-brand-ink/85">{activeEvent.summary}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-brand-ink/85">
            {activeEvent.impactPoints.slice(0, 2).map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/60">Locations</p>
            <div className="mt-3 border-y border-brand-forest/15">
              {outreachEvents.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveEventId(event.id)}
                  className={`flex w-full items-start justify-between gap-2 border-b border-brand-forest/10 px-0 py-2.5 text-left text-sm transition-colors last:border-b-0 ${
                    activeEventId === event.id ? "text-brand-forest" : "text-brand-ink/80 hover:text-brand-forest"
                  }`}
                >
                  <span>
                    <span className="block font-semibold leading-tight">{event.title}</span>
                    <span className="mt-1 block text-xs text-current/75">{event.location}</span>
                  </span>
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${markerColors[event.type]}`} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
          <Link
            href={`/updates/${activeEvent.slug}`}
            className="mt-6 inline-flex items-center border-b border-brand-forest/35 pb-1 text-sm font-semibold text-brand-forest transition-colors hover:text-brand-ink"
          >
            Read full event recap
          </Link>
        </aside>
      </div>
    </section>
  );
}
