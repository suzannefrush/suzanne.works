import { BookOpen, Headphones, Users, Globe } from "lucide-react";

const books = [
  { title: "Inspired", link: "https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507" },
  { title: "Escaping the Build Trap", link: "https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X" },
  { title: "Algorithms of Oppression", link: "https://www.amazon.com/Algorithms-Oppression-Search-Engines-Reinforce/dp/1479837245" },
  { title: "Cracking the PM Interview", link: "https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818" },
];

const podcasts = ["Product Thinking with Melissa Perri", "100 PM", "Inside Intercom", "How I Built This with Guy Raz", "Master of Scale with Reid Hoffman"];

const people = [
  { name: "Gibson Biddle", link: "https://twitter.com/gibsonbiddle" },
  { name: "SVPG", link: "https://www.svpg.com/" },
  { name: "Melissa Perri", link: "https://twitter.com/lissijean" },
  { name: "Women in Product", link: "https://www.womeninproduct.com/" },
  { name: "Ken Norton", link: "https://twitter.com/kennethn" },
  { name: "Shreyas Doshi", link: "https://twitter.com/shreyas" },
];

const websites = [{ name: "User Onboard", link: "https://www.useronboard.com/" }];

function ResourceSection({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
      <div className="flex items-center gap-3"><Icon className="w-5 h-5 text-[#8B1A1A]" /><h3 className="font-bold text-lg">{title}</h3></div>
      {children}
    </div>
  );
}

export default function PmResourcesPage() {
  return (
    <div className="py-12 space-y-10">
      <div className="text-center space-y-4">
        <span className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1">WELCOME TO YE OLDE PRODUCT WORLD</span>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">I've been producting for about 6 years, and so here's some resources that have helped me along the way on this self-paced learning journey!</p>
      </div>

      <div className="text-center">
        <span className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1">MY RECOMMENDATIONS</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pb-16">
        <ResourceSection icon={BookOpen} title="Books">
          <ul className="space-y-2">
            {books.map((b) => (
              <li key={b.title}><a href={b.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B1A1A] hover:underline">{b.title}</a></li>
            ))}
          </ul>
        </ResourceSection>

        <ResourceSection icon={Headphones} title="Podcasts">
          <ul className="space-y-2">
            {podcasts.map((p) => (<li key={p} className="text-sm text-gray-600">{p}</li>))}
          </ul>
        </ResourceSection>

        <ResourceSection icon={Users} title="People / Organizations">
          <ul className="space-y-2">
            {people.map((p) => (
              <li key={p.name}><a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B1A1A] hover:underline">{p.name}</a></li>
            ))}
          </ul>
        </ResourceSection>

        <ResourceSection icon={Globe} title="Websites">
          <ul className="space-y-2">
            {websites.map((w) => (
              <li key={w.name}><a href={w.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B1A1A] hover:underline">{w.name}</a></li>
            ))}
          </ul>
        </ResourceSection>
      </div>
    </div>
  );
}
