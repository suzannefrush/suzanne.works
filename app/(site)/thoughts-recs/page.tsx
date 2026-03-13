import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SubpageItem = {
  type: "essay" | "rec";
  title: string;
  description: string;
  cta: string;
  path: string;
};

const items: SubpageItem[] = [
  {
    type: "essay",
    title: "Burnout Sux",
    description: "Real talk about burnout — what it looks like, what helps, and why we need to stop pretending it's normal.",
    cta: "Read More",
    path: "/thoughts-recs/burnout-sux",
  },
  {
    type: "rec",
    title: "PM Resources",
    description: "Books, podcasts, people, and websites that have shaped the way I think about product.",
    cta: "See the List",
    path: "/thoughts-recs/pm-resources",
  },
  {
    type: "rec",
    title: "Sourdough Skills",
    description: "A love letter to bread — recipes, tips, and lessons from my ongoing sourdough journey.",
    cta: "See the List",
    path: "/thoughts-recs/sourdough-skills",
  },
];

export default function ThoughtsAndRecsPage() {
  return (
    <div>
      <section style={{backgroundColor: "#88a9d820"}} className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Thoughts & Recs</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">A mix of things I've written and things I think you should know about.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        {items.map((item, i) => (
          <Link key={item.path} href={item.path} className={`group flex flex-col gap-3 py-8 ${i !== items.length - 1 ? "border-b border-gray-200" : ""}`}>
            <span className={`inline-block w-fit px-3 py-1 text-[11px] font-bold tracking-widest uppercase rounded-full ${item.type === "essay" ? "bg-[#8B1A1A] text-white" : "bg-[#88a9d8] text-gray-900"}`}>{item.type === "essay" ? "Essay" : "Recs"}</span>
            <h2 className="text-xl md:text-2xl font-bold leading-snug">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B1A1A] group-hover:underline mt-1 transition-all">{item.cta} <ArrowRight className="w-4 h-4" /></span>
          </Link>
        ))}
      </section>
    </div>
  );
}
