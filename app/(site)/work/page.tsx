import { ArrowUpRight, Download } from "lucide-react";

const products = [
  { title: "Braze: Native WhatsApp Channel", description: "Recently announced as of March 2023, WhatsApp has been added in Braze's suite of omnichannel customer engagement tools.", cta: "What's up with WhatsApp?!", link: "https://www.braze.com/resources/articles/braze-announces-native-support-for-whatsapp", image: "/brazewhatsapp.png" },
  { title: "ALICE Housekeeping", description: "Launched in 2020, and led this product through the craziness of COVID (including all of our customers completely shutting down), ALICE Housekeeping was the last piece of the operations puzzle.", cta: "Tell Me More!", link: "https://www.aliceplatform.com/blog/tag/alice-housekeeping", image: "/ALICEhskp.png" },
  { title: "Non Profit Websites", description: "With the help of the amazing organization 48in48, I led a team that within 48 hours had completely redesigned 2 nonprofit websites, starting from practically nothing.", cta: "See the Original", link: "https://web.archive.org/web/20161005174734/http://nassauperformingarts.org/", image: "/NTMAHome.gif" },
  { title: "Interactive Classroom", description: "Lingo Live's first proprietary classroom was launched and iterated with my support and guidance. Within the first month of release, we had 31% of users voluntarily switch from other video platforms.", cta: "Read About It", link: "https://www.lingolive.com/lingo-live-unveils-interactive-classroom/", image: "/Enteringtheclassroom.gif" },
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
    <div c
