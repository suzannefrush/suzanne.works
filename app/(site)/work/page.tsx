import { ArrowUpRight, Download } from "lucide-react";

import { ArrowUpRight, Download } from "lucide-react";

const products = [
  { title: "Braze: Native WhatsApp Channel", description: "Recently announced as of March 2023...", cta: "What's up with WhatsApp?!", link: "https://www.braze.com/resources/articles/braze-announces-native-support-for-whatsapp", image: "/brazewhatsapp.png" },
  { title: "ALICE Housekeeping", description: "Launched in 2020...", cta: "Tell Me More!", link: "https://www.aliceplatform.com/blog/tag/alice-housekeeping", image: "/ALICEhskp.png" },
  { title: "Non Profit Websites", description: "With the help of the amazing organization 48in48...", cta: "See the Original", link: "https://web.archive.org/web/20161005174734/http://nassauperformingarts.org/", image: "/NTMAHome.gif" },
  { title: "Interactive Classroom", description: "Lingo Live's first proprietary classroom...", cta: "Read About It", link: "https://www.lingolive.com/lingo-live-unveils-interactive-classroom/", image: "/Enteringtheclassroom.gif" },
];

const awards = [
  { title: "IxDA", description: "ALICE Housekeeping won two International Design Awards — Optimizing and People's Choice.", link: "https://awards.ixda.org/entry/2020/image-problem-innovating-housekeeping-with-alice/" },
  { title: "HotelTechAwards", description: "ALICE Housekeeping won #1 Housekeeping software in 2022, and #2 in 2021, giving us a meteoric rise to the top!", link: "https://www.aliceplatform.com/releases/alice-wins-seven-hotel-tech-awards-2022" },
];

const mentions = [
  { title: "No Reddit November", description: "Helping others with guidance around quality consumption of social media.", link: "https://reneecss.com/no-reddit-november-or-what-i-learned-from-30-days-off-reddit/" },
  { title: "Post COVID-19 Hotel Housekeeping Protocols", description: "An article about how to adjust housekeeping operations to plan for the post-COVID world, co-written with Jeff Parker.", link: "https://www.aliceplatform.com/blog/post-covid-19-hotel-housekeeping-protocol-changes" },
  { title: "Clubhouse // Lingo Live", description: "A case study from when Anthony Ferrera and I re-vamped the agile process and tooling for Lingo Live.", link: "https://clubhouse.io/customers/lingolive/" },
  { title: "Refinery29", description: "Pandemic Window Shopping? A casual twitter thread gone reporting?", link: "https://www.refinery29.com/en-us/2021/03/10332067/post-pandemic-future-planning-window-shopping-hobby" },
];

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

      <div className="flex items-end justify-between border-b border-gray-200 pb-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">Products<br />Shipped</h1>
        <a href="https://img1.wsimg.com/blobby/go/f6527eb1-70fb-4759-8246-76f1eae78782/downloads/SuzanneFrushResume0222.pdf?ver=1740516433361" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B1A1A] text-white text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md"><Download className="w-4 h-4" /><span>Resume</span></a>
      </div>

      <div className="divide-y divide-gray-200">
        {products.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
            <div className="sm:w-[280px] flex-shrink-0 overflow-hidden rounded-md">
              <img src={p.image} alt={p.title} className="w-full aspect-[16/10] object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center space-y-3 min-w-0">
              <h2 className="text-xl font-bold group-hover:text-[#8B1A1A] transition-colors">{p.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#8B1A1A] underline underline-offset-4">{p.cta}<ArrowUpRight className="w-3.5 h-3.5" /></span>
            </div>
          </a>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Awards</h2>
        <div className="divide-y divide-gray-200">
          {awards.map((a) => (
            <a key={a.title} href={a.link} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 py-5">
              <div className="space-y-1 min-w-0">
                <h3 className="font-bold group-hover:text-[#8B1A1A] transition-colors">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B1A1A] transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mentions</h2>
        <div className="divide-y divide-gray-200">
          {mentions.map((m) => (
            <a key={m.title} href={m.link} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 py-5">
              <div className="space-y-1 min-w-0">
                <h3 className="font-bold group-hover:text-[#8B1A1A] transition-colors">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B1A1A] transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}

const awards = [
  { title: "IxDA", description: "ALICE Housekeeping won two International Design Awards — Optimizing and People's Choice.", link: "https://awards.ixda.org/entry/2020/image-problem-innovating-housekeeping-with-alice/" },
  { title: "HotelTechAwards", description: "ALICE Housekeeping won #1 Housekeeping software in 2022, and #2 in 2021, giving us a meteoric rise to the top!", link: "https://www.aliceplatform.com/releases/alice-wins-seven-hotel-tech-awards-2022" },
];

const mentions = [
  { title: "No Reddit November", description: "Helping others with guidance around quality consumption of social media.", link: "https://reneecss.com/no-reddit-november-or-what-i-learned-from-30-days-off-reddit/" },
  { title: "Post COVID-19 Hotel Housekeeping Protocols", description: "An article about how to adjust housekeeping operations to plan for the post-COVID world, co-written with Jeff Parker.", link: "https://www.aliceplatform.com/blog/post-covid-19-hotel-housekeeping-protocol-changes" },
  { title: "Clubhouse // Lingo Live", description: "A case study from when Anthony Ferrera and I re-vamped the agile process and tooling for Lingo Live.", link: "https://clubhouse.io/customers/lingolive/" },
  { title: "Refinery29", description: "Pandemic Window Shopping? A casual twitter thread gone reporting?", link: "https://www.refinery29.com/en-us/2021/03/10332067/post-pandemic-future-planning-window-shopping-hobby" },
];

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

      <div className="flex items-end justify-between border-b border-gray-200 pb-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none">Products<br />Shipped</h1>
        <a href="https://img1.wsimg.com/blobby/go/f6527eb1-70fb-4759-8246-76f1eae78782/downloads/SuzanneFrushResume0222.pdf?ver=1740516433361" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B1A1A] text-white text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md"><Download className="w-4 h-4" /><span>Resume</span></a>
      </div>

      <div className="divide-y divide-gray-200">
        {products.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
            <div className="sm:w-[280px] flex-shrink-0 overflow-hidden rounded-md">
              <img src={p.image} alt={p.title} className="w-full aspect-[16/10] object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center space-y-3 min-w-0">
              <h2 className="text-xl font-bold group-hover:text-[#8B1A1A] transition-colors">{p.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#8B1A1A] underline underline-offset-4">{p.cta}<ArrowUpRight className="w-3.5 h-3.5" /></span>
            </div>
          </a>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Awards</h2>
        <div className="divide-y divide-gray-200">
          {awards.map((a) => (
            <a key={a.title} href={a.link} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 py-5">
              <div className="space-y-1 min-w-0">
                <h3 className="font-bold group-hover:text-[#8B1A1A] transition-colors">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B1A1A] transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mentions</h2>
        <div className="divide-y divide-gray-200">
          {mentions.map((m) => (
            <a key={m.title} href={m.link} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 py-5">
              <div className="space-y-1 min-w-0">
                <h3 className="font-bold group-hover:text-[#8B1A1A] transition-colors">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B1A1A] transition-colors flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
