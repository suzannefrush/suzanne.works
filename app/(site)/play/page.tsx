"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, LayoutGrid, Layers } from "lucide-react";
import { trips, getAllTags, type Trip } from "@/lib/travel-data";

type ViewMode = "grid" | "region";

const TripCard = ({ trip }: { trip: Trip }) => {
  const itemCount =
    trip.highlights.length + trip.recommendations.length + trip.tips.length;

  return (
    <Link href={`/play/${trip.slug}`} className="group block">
      <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
        <img
          src={trip.coverPhoto}
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {trip.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-serif text-3xl font-medium leading-tight">{trip.title}</h2>
          {trip.subtitle && (
            <p className="text-sm opacity-90 mt-1">{trip.subtitle}</p>
          )}
          <div className="flex items-center gap-4 mt-3 text-xs opacity-75">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {itemCount} {itemCount === 1 ? "spot" : "spots"}
            </span>
            {trip.resources.length > 0 && (
              <span>{trip.resources.length} resources</span>
            )}
            <span>{trip.yearVisited}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function PlayPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>("grid");

  const tags = useMemo(() => getAllTags(), []);

  const filtered = activeFilter
    ? trips.filter((t) => t.tags.includes(activeFilter))
    : trips;

  const grouped = useMemo(() => {
    const map = new Map<string, Trip[]>();
    filtered.forEach((trip) => {
      trip.tags.forEach((tag) => {
        if (!map.has(tag)) map.set(tag, []);
        map.get(tag)!.push(trip);
      });
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Masthead */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">
          A Personal Travel Journal
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight">
          Go Here, Eat This
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Trips I've taken, things I've loved, and recommendations for friends headed the same way.
        </p>
      </div>

      {/* Filters + view toggle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors ${
              activeFilter === null
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors ${
                activeFilter === tag
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="inline-flex items-center gap-1 border border-border rounded-full p-1 self-start md:self-auto">
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
              view === "grid"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={view === "grid"}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Grid
          </button>
          <button
            onClick={() => setView("region")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${
              view === "region"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={view === "region"}
          >
            <Layers className="w-3.5 h-3.5" />
            By Region
          </button>
        </div>
      </div>

      {/* Content */}
      {view === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        <div className="space-y-16">
          {grouped.map(([tag, tripsInTag]) => (
            <section key={tag}>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-border">
                <h2 className="font-serif text-3xl font-medium">{tag}</h2>
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  {tripsInTag.length} {tripsInTag.length === 1 ? "trip" : "trips"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tripsInTag.map((trip) => (
                  <TripCard key={`${tag}-${trip.id}`} trip={trip} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">
          No trips found for this filter.
        </p>
      )}
    </div>
  );
}
