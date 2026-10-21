import Link from "next/link";
import { ArrowLeft, BedDouble, HeartPulse, NotebookPen, RotateCcw, BookOpen, ExternalLink, Activity, Wind, Laugh, Users, Droplets, HeartHandshake, Palette } from "lucide-react";

const stressCycle = [
  { name: "Move your body", icon: Activity, desc: "Any movement counts — a walk, a stretch, a dance in the kitchen. It tells your body the threat is over." },
  { name: "Breathe", icon: Wind, desc: "Slow, deep breaths, especially long exhales. Free, fast, and weirdly powerful." },
  { name: "Find the funny", icon: Laugh, desc: "A real belly laugh, not a polite one. Reminiscing about something hilarious works too." },
  { name: "Connect", icon: Users, desc: "Even a tiny friendly exchange with a barista or neighbor helps your body feel safe." },
  { name: "Cry it out", icon: Droplets, desc: "Sometimes the stress just needs a way out. Let it happen and feel lighter after." },
  { name: "Hug it out", icon: HeartHandshake, desc: "A long hug (think 20 seconds) with someone you trust, or a cuddle with a pet." },
  { name: "Get creative", icon: Palette, desc: "Drawing, writing, crafting, music — making something gives the feelings somewhere to go." },
];

const stages = [
  { name: "Resting", icon: BedDouble },
  { name: "Recovering", icon: HeartPulse },
  { name: "Resisting (future burnout)", icon: NotebookPen },
  { name: "Relapsing (whoops, spoilers!)", icon: RotateCcw },
];

const mainResources = [
  { name: "Burnout, by Emily and Amelia Nagoski", link: "https://www.burnoutbook.net/", desc: "Quite literally a life changing book. Emily (a sex educator and public health policy nerd) and Amelia (her twin sister and a choral director that suffered from burnout and was hospitalized) tackle what causes burnout, but more importantly, how to actually get rid of it. This book is and was fundamental to understanding how to get myself out of the pit of exhaustion." },
  { name: "Designing Your Life, by Bill Burnett and Dave Evans", link: "https://designingyour.life/", desc: "This book is effectively what I did, but in an organized fashion and directed approach." },
  { name: "120 Questions to Ask Yourself", link: "https://buddingoptimist.com/questions-to-ask-yourself/", desc: "The DIY approach. I went through all 120 questions quietly over the course of 2 weeks. Some were throwaways but some UNLOCKED some feelings and thoughts and I learned a lot." },
];

const reflectiveBooks = [
  { name: "How to Do Nothing", link: "https://www.penguinrandomhouse.com/books/600671/how-to-do-nothing-by-jenny-odell/" },
  { name: "Work Won't Love You Back: How Devotion to Our Jobs Keeps Us Exploited, Exhausted, and Alone", link: "https://workwontloveyouback.org/" },
  { name: "How to Break Up with Your Phone", link: "https://www.penguinrandomhouse.com/books/564450/how-to-break-up-with-your-phone-by-catherine-price/" },
  { name: "Year of Yes", link: "https://www.simonandschuster.com/books/Year-of-Yes/Shonda-Rhimes/9781476777122" },
  { name: "Buy Yourself the F*cking Lilies", link: "https://www.randomhousebooks.com/books/565945/" },
];

export default function BurnoutSuxPage() {
  return (
    <div>
      <section style={{backgroundColor: "#88a9d820"}} className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <Link href="/thoughts-recs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B1A1A] hover:underline"><ArrowLeft className="w-4 h-4" /> Thoughts & Recs</Link>
          <span className="mt-6 inline-block w-fit px-3 py-1 text-[11px] font-bold tracking-widest uppercase rounded-full bg-[#8B1A1A] text-white">Essay</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Burnout Sux</h1>
          <p className="mt-3 text-sm text-gray-500">February 25, 2025 · burnout, mental health</p>
          <div className="mt-6 text-gray-600 space-y-3 leading-relaxed">
            <p>Ya girl was not doing good. I had figured out work stuff, but effectively by brute forcing myself into making it all work. Cue one pandemic and things started falling apart. And by things, I mean me and my body.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Solutions</h2>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>I ended up taking an incredibly not sustainable approach and quit my job with nothing planned for afterwards. I was privileged to be getting paid enough to save a cushion so that it was a financial possibility (though still a major risk).</p>
            <p>In retrospect, I feel like there were stages to recovery:</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {stages.map((s, i) => (
              <div key={s.name} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] flex items-center justify-center"><s.icon className="w-4 h-4" /></span><span className="text-sm"><span className="font-bold text-gray-900">Stage {i + 1}:</span> <span className="text-gray-600">{s.name}</span></span></div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">This really was a layered approach — first I rested, and by rested I mean the moment I stopped working I got sick and kinda just slept for 2 weeks, then I incorporated steps to recovery (while still resting), and during that period did a bunch of introspection so that I could set myself up to be able to resist burnout again.</p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3"><BedDouble className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Stage 1: Rest</h2></div>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>The moment I stopped working, I got pretty sick (kinda like right after you turn in your last paper in finals), and it turns out that when you're in a maintained high stress situation, the moment your cortisol drops, it's really normal to get sick.</p>
            <p>During and after this stage I slept a LOT. Like 11 hours a day for multiple weeks. There was night sleeping and morning naps and afternoon naps. All of it was necessary and I just let my body dictate how much rest it needed. After the first month or so, I balanced this with the recovery activities, and whatever time was leftover was a-okay to be sleepy times.</p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3"><HeartPulse className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Stage 2: Recovery</h2></div>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>So I went deep into the book <span className="italic">Burnout</span>, and I still think it's the best resource out there about getting through burnout, not just identifying it. They explain the science of burnout, and how to get your body to process out the stress that's just simmering and causing downstream problems.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-sm">7 Ways to Complete the Stress Cycle</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {stressCycle.map((s) => (
                <div key={s.name} className="bg-gray-50 rounded-lg p-3 flex gap-3"><span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] flex items-center justify-center"><s.icon className="w-4 h-4" /></span><div className="space-y-0.5"><p className="text-xs font-bold text-gray-900">{s.name}</p><p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p></div></div>
              ))}
            </div>
            <p className="text-xs text-gray-500">Adapted from <span className="italic">Burnout</span> by Emily and Amelia Nagoski.</p>
          </div>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>It turns out I'm a really physical processor, so this meant prioritizing daily exercise (annoyingly effective), from the gentle to the more strenuous, depending on my energy levels. But everything on their list was used at some point during that period, and it all helped.</p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3"><NotebookPen className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Stage 3: Resisting</h2></div>
          <p className="text-gray-600 leading-relaxed">This step was way more mental health adjacent to me. I journaled like my life depended on it (and in a way it really did), and tried to figure out what I really wanted, who I really was, and what a combination of all that, and the need to enjoy my life in a capitalist dystopian hellspace, might explicitly look like. I went through the 120 questions list, and did the 3 morning journaled pages, and between those two felt like I uncovered what I needed.</p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3"><RotateCcw className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Stage 4: Relapsing</h2></div>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>In a surprising turn of events that surprised absolutely no one, this wasn't a permanent solve. Cue a second Trump admin that loves dissolving our literal rights, some minor geopolitical tensions, and just *waves hand at society*, burnout creeps back in.</p>
            <p>When this happens, my first thing is noticing I'm experiencing the symptoms — I'm extra crabby and irritable, I cry a <span className="font-bold text-gray-900">lot</span> and in pretty public spaces, I'm exhausted, and I have as little patience for other people as I think is humanely possible. Oh and I have a tendency to get sick at the drop of a pin. Maybe this is automatic for some folks, but I wasn't born with that amount of emotional know-how, so we gotta first look it in the eye and notice it's even happening.</p>
            <p>Next comes trying to make space on a plate that feels incredibly full so that I <span className="font-bold text-gray-900">won't</span> have my hair start falling apart and then need to quit my job effective immediately. Saying no to optional stuff at work, optional stuff with life. Giving myself more easy nights and slow mornings. Turning off scrolling apps on my phone. Limiting myself to absolutely no multi-tasking and making space for my brain to just breathe.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed"><span className="font-bold text-gray-900">The biggest one:</span> This last one has been the biggest and most constant but also good. Eating without reading/scrolling/watching and just with the food. Cooking without the TV on, maybe just some music. Commuting and just being. It all feels weird and artificially slow, but actually it's authentically slow and I'm realizing is the pace I actually can process the world.</p>
          </div>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>Once we have the barest sliver of energy, the stress completion steps are re-introduced — daily physical exercise, deep breathing, and journaling are the heaviest hitters for me.</p>
            <p>And then I guess we just do that until we feel better, so forever, I guess?</p>
          </div>
        </section>

        <section className="space-y-6 pb-16">
          <div className="flex items-center gap-3"><BookOpen className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Recommended Resources</h2></div>
          <div className="space-y-4">
            {mainResources.map((r) => (
              <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-5 space-y-1">
                <h3 className="font-bold text-sm"><a href={r.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#8B1A1A] transition-colors flex items-center gap-2">{r.name} <ExternalLink className="w-3 h-3" /></a></h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
            <h3 className="font-bold text-sm">Books that were good and reflective but not like &quot;here&apos;s what to do&quot;</h3>
            <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
              {reflectiveBooks.map((b) => (
                <li key={b.name} className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> <a href={b.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#8B1A1A] hover:underline transition-colors">{b.name}</a></li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
