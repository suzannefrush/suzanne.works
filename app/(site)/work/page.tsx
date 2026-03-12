import { ExternalLink, Download, Award, Quote } from "lucide-react";

const products = [
  {
    title: "Braze: Native WhatsApp Channel",
    description: "Recently announced as of March 2023, WhatsApp has been added in Braze's suite of omnichannel customer engagement tools.",
    cta: "What's up with WhatsApp?!",
    link: "https://www.braze.com/resources/articles/braze-announces-native-support-for-whatsapp",
  },
  {
    title: "ALICE Housekeeping",
    description: "Launched in 2020, and led this product through the craziness of COVID (including all of our customers completely shutting down), ALICE Housekeeping was the last piece of the operations puzzle.",
    cta: "Tell Me More!",
    link: "https://www.aliceplatform.com/blog/tag/alice-housekeeping",
  },
  {
    title: "Non Profit Websites",
    description: "With the help of the amazing organization 48in48, I led a team that within 48 hours had completely redesigned 2 nonprofit websites, starting from practically nothing.",
    cta: "See the Original",
    link: "https://web.archive.org/web/20161005174734/http://nassauperformingarts.org/",
  },
  {
    title: "Interactive Classroom",
    description: "Lingo Live's first proprietary classroom was launched and iterated with my support and guidance. Within the first month of release, we had 31% of users voluntarily switch from other video platforms.",
    cta: "Read About It",
    link: "https://www.lingolive.com/lingo-live-unveils-interactive-classroom/",
  },
];

const awards = [
  {
    title: "IxDA",
    description: "ALICE Housekeeping won two International Design Awards — Optimizing and People's Choice.",
    link: "https://awards.ixda.org/entry/2020/image-problem-innovating-housekeeping-with-alice/",
  },
  {
    title: "HotelTechAwards",
    description: "ALICE Housekeeping won #1 Housekeeping software in 2022, and #2 in 2021, giving us a meteoric rise to the top!",
    link: "https://www.aliceplatform.com/releases/alice-wins-seven-hotel-tech-awards-2022",
  },
];

const mentions = [
  {
    title: "No Reddit November",
    description: "Helping others with guidance around quality consumption of social media.",
    link: "https://reneecss.com/no-reddit-november-or-what-i-learned-from-30-days-off-reddit/",
  },
  {
    title: "Post COVID-19 Hotel Housekeeping Protocols",
    description: "An article about how to adjust housekeeping operations to plan for the post-COVID world, co-written with Jeff Parker.",
    link: "https://www.aliceplatform.com/blog/post-covid-19-hotel-housekeeping-protocol-changes",
  },
  {
    title: "Clubhouse // Lingo Live",
    description: "A case study from when Anthony Ferrera and I re-vamped the agile process and tooling for Lingo Live.",
    link: "https://clubhouse.io/customers/lingolive/",
  },
  {
    title: "Refinery29",
    description: "Pandemic Window Shopping? A casual twitter thread gone reporting?",
    link: "https://www.refinery29.com/en-us/2021/03/10332067/post-pandemic-future-planning-window-shopping-hobby",
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="text-center">
        <span className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1">
          GET DOWN TO BUSINESSS
        </span>
      </div>

      {/* Resume */}
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-6 text-center">
        <p className="text-sm text-gray-500 mb-3">Suzanne Frush Resume (pdf)</p>
        
          href="https://img1.wsimg.com/blobby/go/f6527eb1-70fb-4759-8246-76f1eae78782/downloads/SuzanneFrushResume0222.pdf?ver=1740516433361"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white px-6 py-2 text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" /> DOWNLOAD
        </a>
      </div>

      {/* Products */}
      <div className="space-y-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1">
            PRODUCTS I'VE SHIPPED
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-6 space-y-3 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
              >
                {p.cta} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="space-y-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1">
            AWARDS
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((a) => (
            
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group block"
            >
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-[#8B1A1A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B1A1A] transition-colors">{a.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{a.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mentions */}
      <div className="space-y-8 pb-12">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] bg-black text-white inline-block px-3 py-1">
            MENTIONS
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {mentions.map((m) => (
            
              key={m.title}
              href={m.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group block"
            >
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#8B1A1A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#8B1A1A] transition-colors">{m.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{m.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
