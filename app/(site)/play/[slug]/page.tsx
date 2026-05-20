import { notFound } from "next/navigation";
import Link from "next/link";
import { getTripBySlug, type Item, type Resource } from "@/lib/travel-data";
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  Map as MapIcon,
  FileText,
  Music,
  Link as LinkIcon,
} from "lucide-react";
import ShareButton from "./ShareButton";

// Inline Badge — no shadcn dependency needed
const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center border rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase ${className ?? ""}`}
  >
    {children}
  </span>
);

type TaggedItem = Item & { category: "Can't Miss" | "Recommendation" | "Tip" };

const categoryColors: Record<TaggedItem["category"], string> = {
  "Can't Miss": "bg-primary/15 text-primary border-primary/20",
  Recommendation: "bg-accent text-accent-foreground border-border",
  Tip: "bg-secondary text-secondary-foreground border-secondary",
};

const resourceMeta: Record<
  Resource["kind"],
  { icon: React.ElementType; label: string }
> = {
  map: { icon: MapIcon, label: "Map" },
  doc: { icon: FileText, label: "Doc" },
  playlist: { icon: Music, label: "Playlist" },
  link: { icon: LinkIcon, label: "Link" },
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const meta = resourceMeta[resource.kind];
  const Icon = meta.icon;
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      {resource.photoUrl && (
        <img
          src={resource.photoUrl}
          alt={resource.name}
          className="w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
              <Icon className="w-4 h-4" />
            </span>
            <h3 className="font-serif text-xl font-medium">{resource.name}</h3>
          </div>
          <Badge className="shrink-0 bg-primary/15 text-primary border-primary/20">
            {meta.label}
          </Badge>
        </div>
        {resource.note && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {resource.note}
          </p>
        )}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-primary group-hover:underline">
          Open
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </a>
  );
};

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

  const allItems: TaggedItem[] = [
    ...trip.highlights.map((r) => ({ ...r, category: "Can't Miss" as const })),
    ...trip.recommendations.map((r) => ({
      ...r,
      category: "Recommendation" as const,
    })),
    ...trip.tips.map((r) => ({ ...r, category: "Tip" as const })),
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <img
          src={trip.coverPhoto}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <div className="flex flex-wrap gap-2 mb-3">
            {trip.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-[0.2em] uppercase bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-80 self-center">
              · {trip.yearVisited}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-medium">
            {trip.title}
          </h1>
          {trip.subtitle && (
            <p className="mt-3 text-base md:text-lg opacity-90">
              {trip.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Controls */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/play"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to atlas
          </Link>
          <ShareButton />
        </div>

        {/* Intro */}
        <div className="mb-16 max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground italic">
            "{trip.intro}"
          </p>
        </div>

        {/* Resources */}
        {trip.resources.length > 0 && (
          <section className="mb-16">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-serif text-2xl md:text-3xl font-medium">
                Start here
              </h2>
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                Trip resources
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trip.resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        )}

        {/* Masonry Collage */}
        {allItems.length > 0 && (
          <section>
            {trip.resources.length > 0 && (
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
                Spots & notes
              </h2>
            )}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
              {allItems.map((rec) => (
                <div
                  key={rec.id}
                  className="break-inside-avoid bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {rec.photoUrl && (
                    <img
                      src={rec.photoUrl}
                      alt={rec.name}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl font-medium">
                        {rec.name}
                      </h3>
                      <Badge className={categoryColors[rec.category]}>
                        {rec.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {rec.note}
                    </p>
                    {rec.mapsUrl && (
                      <a
                        href={rec.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-primary hover:underline"
                      >
                        <MapPin className="w-3 h-3" />
                        Open in Maps
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
