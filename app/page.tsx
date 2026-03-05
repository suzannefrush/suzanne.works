import Link from "next/link";
import Image from "next/image";
import { Briefcase, Compass, BookOpen, Mail } from "lucide-react";

const hotspots = [
  {
    icon: Briefcase,
    label: "Work",
    description: "Products I've shipped",
    path: "/work",
    position: "left-[30%] top-[72%]",
    animation: "animate-float",
  },
  {
    icon: Compass,
    label: "Play",
    description: "Travel recs & adventures",
    path: "/play",
    position: "left-[12%] top-[22%]",
    animation: "animate-float-delayed",
  },
  {
    icon: BookOpen,
    label: "Thoughts & Recs",
    description: "Writing, resources & vibes",
    path: "/thoughts-recs",
    position: "right-[15%] top-[20%]",
    animation: "animate-float-delayed-2",
  },
  {
    icon: Mail,
    label: "Contact",
    description: "Let's connect",
    path: "/(site)/contact",
    position: "right-[8%] top-[60%]",
    animation: "animate-float-delayed-3",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero with illustration */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background illustration */}
        <Image
          src="/homepage-scene.jpg"
          alt="Whimsical illustrated room with desk, suitcase, bookshelf, mailbox, and sleeping cat"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/20" />
        {/* Floating hotspots */}
        {hotspots.map((spot) => (
          <Link
            key={spot.path}
            href={spot.path}
            className={`absolute ${spot.position} ${spot.animation} hidden md:flex flex-col items-center group`}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-5 py-4 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 group-hover:bg-white text-center">
              <spot.icon className="w-6 h-6 mx-auto mb-2 text-[#8B1A1A]" />
              <span className="text-sm font-bold tracking-wide block">{spot.label}</span>
              <span className="text-xs text-gray-500">{spot.description}</span>
            </div>
          </Link>
        ))}
        {/* Center tagline — mobile only */}
        <div className="relative z-10 text-center px-6 md:hidden">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1 mb-4">HELLO!</p>
            <h1 className="text-2xl font-bold leading-snug">
              I believe in the transformative power of getting things done (well).
            </h1>
          </div>
        </div>
      </section>

      {/* Mobile navigation cards */}
      <section className="md:hidden px-6 py-8">
        <div className="grid grid-cols-2 gap-4">
          {hotspots.map((spot) => (
            <Link
              key={spot.path}
              href={spot.path}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition-all hover:border-[#8B1A1A]"
            >
              <spot.icon className="w-6 h-6 mx-auto mb-2 text-[#8B1A1A]" />
              <span className="text-sm font-bold block">{spot.label}</span>
              <span className="text-xs text-gray-500">{spot.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tagline section — desktop */}
      <section className="hidden md:block text-center py-20 px-6">
        <p className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1 mb-6">HELLO!</p>
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
          I believe in the transformative power of getting things done (well).
        </h1>
      </section>
    </main>
  );
}
