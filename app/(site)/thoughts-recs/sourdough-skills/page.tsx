import Link from "next/link";
import { BookOpen, Wheat, CheckCircle, XCircle, ChefHat, ExternalLink, ShoppingBag } from "lucide-react";

export default function SourdoughSkillsPage() {
  return (
    <div>
      <section style={{backgroundColor: "#88a9d820"}} className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Suzanne's Sourdough Guide</h1>
          <div className="mt-6 text-gray-600 space-y-3 leading-relaxed">
            <p>Welcome my friend. I love bread. Like "my 5th grade science project was about different yeasts so I made over 20 different loaves" love bread. I had tried to make a sourdough multiple times over the years, and through artful neglect they all died.</p>
            <p>Enter the 2020 COVID Pandemic. I, like most of the internet, had plenty of time on my hands and could act as a caretaker for a "living" thing and so Cora (named for Corona) was… bred.</p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

        <section className="space-y-4">
          <div className="flex items-center gap-3"><Wheat className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Using Starter</h2></div>
          <p className="text-gray-600 leading-relaxed">Long story short, Cora is a mature starter, so she's pretty resilient. If you're baking regularly, keep her at room temperature and feed her once a day. If you aren't, put her in the fridge and take her out when you're ready to pick it back up. If you just seriously need a break, put her in the freezer, let her dethaw, and then start back up again. Just keep doing the feeding schedule until a small dollop of starter floats in a cup of water.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Normal vs. Not Normal</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#8B1A1A]" /><h3 className="font-bold text-sm">Totally Okay & Normal</h3></div>
              <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
                <li>• Weird smells</li>
                <li>• Odd water layer on the top that is not pleasant and possibly is grey/brown</li>
                <li>• Bubbles (these are actually good!)</li>
                <li>• Discoloration (grey and sadness)</li>
                <li>• Fluctuating between a solid and a liquid</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /><h3 className="font-bold text-sm">Not Normal</h3></div>
              <ul className="text-sm text-gray-600 space-y-2 leading-relaxed"><li>• Mold</li></ul>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-600 leading-relaxed"><span className="font-bold text-gray-900">A note on containers:</span> I see everyone online with their cute mason jars. I seriously don't understand how they mix the starter this way, so I either keep her in a large rectangular tupperware that's easy to mix in and seriously ugly and not for instagram, or a super tall wide mouth mason jar and mix with a cooking chopstick.</p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3"><Wheat className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Feeding Cora</h2></div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Ingredients</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> Starter</li>
                <li className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> Flour</li>
                <li className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> Water</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Directions</h4>
              <ol className="space-y-3 text-sm text-gray-600">
                {["Get rid of an uncomfortable amount of sourdough. Like really, just leave barely any. Feel weird about it.", "Give her 1 cup of flour, and a half cup of water, or if you like to be exact, 100 grams of water and 100 grams of flour.", "Mix it up. You should be good for like 1 day (but sometimes I wait 2 days)."].map((step, i) => (
                  <li key={i} className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs font-bold flex items-center justify-center">{i + 1}</span><span className="pt-0.5">{step}</span></li>
                ))}
              </ol>
              <p className="mt-3 text-xs text-gray-500 bg-gray-50 rounded-lg p-3"><span className="font-semibold">Note:</span> If you're making a regular batch of bread, double these measurements. I normally halve the bread recipes b/c two loaves is a lot for 2 people.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3"><ChefHat className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Ways to Use Up the Discard</h2></div>
          <p className="text-gray-600 leading-relaxed">Aka "things to make that are not bread but significantly easier". If you're baking on the weekends, you have two choices — keep her at room temp and throw away a bunch of starter every day (i.e. "discard"), or put her in the fridge and remember to take her out 2 days before you want to bake to "wake her up". I do not have the ability to think ahead that many days, so I just feed her every day, and then capture the discard and bake easy things.</p>

          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Sourdough Savory Pancakes 🥞</h3>
              <p className="text-sm text-gray-600">These aren't American pancakes, they're more on the "Chinese pancakes" side of the pancake spectrum.</p>
              <div>
                <h4 className="text-sm font-semibold mb-2">Base Ingredients</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> Neutral Oil</li>
                  <li className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> Sourdough Discard</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Topping Variations</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[{name: "Mediterranean", toppings: "Chopped Chives + Za'atar on the discard", plating: "Drizzled Olive Oil + Hummus"}, {name: "Chinese", toppings: "Chopped Scallions, Sesame Seeds, + Salt", plating: "Dipping sauce (Sesame Oil, Soy Sauce, Rice Vinegar)"}, {name: "Sweet & Savory", toppings: "Sugar + Cinnamon on the Discard", plating: "Ice cream or Whipped cream"}].map((v) => (
                    <div key={v.name} className="bg-gray-50 rounded-lg p-3 space-y-1">
                      <p className="text-xs font-bold text-gray-900">{v.name}</p>
                      <p className="text-xs text-gray-600">{v.toppings}</p>
                      <p className="text-xs text-gray-500 italic">Plating: {v.plating}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Directions</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  {["Warm your cast iron over medium hot heat.", "Add oil to cover.", "Gloop in sourdough discard.", "Sprinkle top with toppings of your choice.", "Once bottom is noice and crispy, flip.", "Let top caramelize.", "Serve with plating of your choice."].map((step, i) => (
                    <li key={i} className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs font-bold flex items-center justify-center">{i + 1}</span><span className="pt-0.5">{step}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </article>

          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Sourdough Crackers 🧀</h3>
              <p className="text-sm text-gray-600">I got really annoyed at all the recipes online that were like "1 tablespoon of discard and a cup of flour", because it required me to make PILES of crackers. So this was my answer. It assumes you're feeding the starter 1 cup of flour per day, so if you're doing double, double the recipe.</p>
              <div>
                <h4 className="text-sm font-semibold mb-2">Ingredients</h4>
                <ul className="grid sm:grid-cols-2 gap-1 text-sm text-gray-600">
                  {["Sourdough Discard", "⅔ cup flour", "⅛ tsp salt", "Coarse fancy ass salt", "Olive oil or butter", "A pasta maker"].map((ing) => (
                    <li key={ing} className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> {ing}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-gray-500 italic">Optional: Herbs of your choice</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Directions</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  {["Take all your sourdough discard and put in a mixer.", "Add flour and salt (and also herbs if you want it in the crackers).", "Mix on medium high until the dough looks consistent and dough-like. Obviously this kinda depends on how prolific your sourdough is, so if you need to add more water or flour, go for it.", "Put in the fridge for at least 30 minutes.", "Preheat the oven to 350 (I think, but my oven is really bad with temperature so your mileage might vary).", "Take out the pasta maker.", "Roll the cracker dough through the pasta maker until you get to level 4 (I guess this is up to your preference, but I like level 4). You can also do this by hand but I did that once and it was not fun.", "Put rolled dough onto parchment paper on a cookie sheet.", "Brush with olive oil or butter.", "Sprinkle with coarse salt. Also herb topping if you're having that kind of day.", "Cut into shapes. I like diamonds with a ravioli edge, but that's because parallelograms are super fun and pretty good at getting into cheese crevices so I don't need to use a knife, but really this depends on what your cheese board needs.", "Prick with the tines of a fork. Depending on the size of the crackers you may need lots of pokes, but if you've got cute lil' crackers then one fork poke is enough.", "Put into the oven for 21 minutes. Again, my oven sucks, so after 15 minutes, watch your crackers like a mother hen and decide how cooked/crispy/brown you like them.", "Let cool and then use to forget how lonely you are."].map((step, i) => (
                    <li key={i} className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs font-bold flex items-center justify-center">{i + 1}</span><span className="pt-0.5">{step}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </article>

          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Biscuits that are Kinda like Buttermilk but WOW SO GOOD</h3>
              <p className="text-sm text-gray-600">Okay these are actually not my recipe, it's from "Good Food" magazine, but they changed ownership and stopped posting their recipes online so I repurposed this one for the greater good of mankind.</p>
              <div>
                <h4 className="text-sm font-semibold mb-2">Ingredients</h4>
                <ul className="grid sm:grid-cols-2 gap-1 text-sm text-gray-600">
                  {["1.5 cups all purpose flour", "1 tbs baking powder", "Kosher Salt", "1 tbs sugar", "1/2 cup (4 oz) butter – chilled and cut into chunks", "1 cup sourdough discard, room temp", "1/2 cup heavy cream", "1 egg, beaten", "1 tbs whole milk"].map((ing) => (
                    <li key={ing} className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> {ing}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Directions</h4>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <p>In a large bowl, mix flour, baking powder, ¾ teaspoon salt, sugar, and butter. Use a pastry blender until pea-size (the mixture should look crumbly).</p>
                  <p>Add the starter and the cream, and gently fold just until the dough holds together.</p>
                  <p>Turn the dough onto a lightly floured surface, and reshape into a rectangle. Gently roll until about ½ inch thick. Fold the dough in half, bringing the short ends together and rotate 90 degrees. Repeat rolling, folding, and rotating until you've done 6 full turns, dusting with flour as needed, if the dough becomes sticky.</p>
                  <p>Roll the dough into a 1 inch thick rectangle, and cut into 8 biscuits. Transfer the biscuits to a parchment lined baking sheet. Freeze for 30 minutes or overnight.</p>
                  <p>Preheat the oven to 375°F. Remove the biscuits from the freezer. In a small bowl, whisk together the egg and milk. Generously brush the top of the biscuits with the egg wash. For the plain or savory biscuits, top each with a little flaky salt and pepper, if desired.</p>
                  <p>Bake until golden, about 30 minutes. If biscuits were frozen overnight, bake for 35 minutes.</p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3"><BookOpen className="w-5 h-5 text-[#8B1A1A]" /><h2 className="text-2xl font-bold">Can We Actually Bake Bread with this Thing?</h2></div>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>Finnnnnne. I mean it's delicious and I love it so I GUESS.</p>
            <p>A couple of things to note: the timing of the recipe changes depending on the temperature in your house/apartment/van/lifestyle choice. So in the summer, rising will happen a lot quicker and in winter, it needs a lot longer. This also means if you get really good at baking in Texas in July and then stop until October in New York, your old timing won't work.</p>
            <p>There's also two types of skills with sourdough (in my opinion): baking bread, and dealing with sourdough. As I've been learning, I find it's easier to deal with one skill at a time, so I recommend starting with hybrid loaves (i.e. part sourdough starter, part yeast from the supermarket), then regular loaves, then crazy loaves (high hydration, unusual ingredients, different shapes).</p>
            <p>Also, the first couple of loaves kinda come out as duds, or at least they did for me. When that happens, make it easier, get that working, and then come back to the harder stuff. To this day, I still don't really understand how to tell if something is over/underproofed, or when I went wrong in a recipe.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-bold flex items-center gap-2">King Arthur Hybrid Sourdough Recipe <a href="https://www.kingarthurbaking.com/recipes/rustic-sourdough-bread-recipe" target="_blank" rel="noopener noreferrer" className="text-[#8B1A1A]"><ExternalLink className="w-4 h-4" /></a></h3>
            <p className="text-sm text-gray-600 leading-relaxed">This is a good one to work on, especially at the beginning, as having the instant yeast will help with learning to work with the starter and bread in general.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-bold flex items-center gap-2">Claire Saffitz's 3-Day Bread Recipe <a href="https://cooking.nytimes.com/guides/59-how-to-make-sourdough-bread" target="_blank" rel="noopener noreferrer" className="text-[#8B1A1A]"><ExternalLink className="w-4 h-4" /></a></h3>
            <p className="text-sm text-gray-600 leading-relaxed">I never really got this one to work, also three days is FOREVER. But a lot of people swear by it, so it's a nice reference to have.</p>
          </div>

          <article className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Tartine's Base Sourdough Recipe</h3>
              <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
                <p>Okay this one has legit been magic for me. I don't know what it is, and I HATE how they have paragraphs upon paragraphs in their cookbook, but the directions work. I also really like that this is a one day cook process, since that's about the length of my focus on bread.</p>
                <p>B/c the length of this recipe grinds my gears, I've highlighted the "important bits" so that I can skip through it to the actual next step. If this bugs you, buy your own copy. Also the book has tons of variations, so there's other benefits to owning it for yourself.</p>
                <p>I normally halve the recipe b/c Daniel and I do not need two loaves of bread in the house at a given time.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">The Short Version</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  {["Weigh out 350 grams of 80 degree water and add 100 grams of starter. Mix them together until the starter is dissolved.", "Add a total of 500 grams of flour. Maybe like 450 grams of white bread flour and 50 grams of whole wheat flour. I've played with these and added spelt and barley flour, and changed the balance to have more whole grains and it's good.", "Let it sit for 30 minutes (autolyse phase).", "Add 10 grams of salt and 25 grams of warm water. Mix it with the hand pinchy method.", "Let it sit for 3–4 hours, and every half hour do the folding method, or whenever you remember.", "Pour it out onto an unfloured surface, and move it around to build tension to start making the \"crust\".", "Let it sit for 20–30 minutes.", "Fold the bread like a lil envelope and then make it circular.", "Prep a banneton with 50/50 mixture of rice flour and white flour. Put your loaf in the banneton.", "Let it sit for 3–4 hours.", "Set it on a piece of parchment paper and do some cuts to the top. The parchment paper makes it SO much easier to drop in the very hot heated cast iron.", "Bake it. Honestly I have this fancy oven so I stop following the directions here."].map((step, i) => (
                    <li key={i} className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] text-xs font-bold flex items-center justify-center">{i + 1}</span><span className="pt-0.5">{step}</span></li>
                  ))}
                </ol>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Baker's Percentage (Full Recipe)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 pr-4 font-semibold text-gray-900">Ingredient</th>
                        <th className="text-left py-2 pr-4 font-semibold text-gray-900">Quantity</th>
                        <th className="text-left py-2 font-semibold text-gray-900">Baker's %</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {[["Water (80°F)", "700g + 50g", "75%"], ["Leaven", "200g", "20%"], ["Total Flour", "1,000g (1 kg)", "100%"], ["White Flour", "900g", "90%"], ["Whole Wheat Flour", "100g", "10%"], ["Salt", "20g", "2%"]].map(([ingredient, quantity, percentage]) => (
                        <tr key={ingredient} className="border-b border-gray-100">
                          <td className="py-2 pr-4">{ingredient}</td>
                          <td className="py-2 pr-4">{quantity}</td>
                          <td className="py-2">{percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-gray-500">The amount of water relative to the flour is called the hydration percentage. This basic country dough is 75% hydration — making it easy to work with from the start. As you get comfortable with softer doughs, you can increase hydration gradually to suit your taste.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-6 pb-16">
          <h2 className="text-2xl font-bold">Other Resources</h2>
          <div className="space-y-4">
            {[{name: "Richard Bertinet", link: "https://www.instagram.com/richardbertinet/", desc: "I just love watching this guy handle his super high hydration sourdoughs. I think it's also really helpful to see what he does."}, {name: "This One Guy on YouTube", link: "https://www.youtube.com/watch?v=BJEHsvW2J6M", desc: "I got stuck and watching some stuff on YouTube was really helpful. I'm sure there's a lot more out there, but this one was good."}, {name: "Sourdough on the Rise (Book)", link: "https://www.amazon.com/dp/B07MYMFCBS/", desc: "I found this book through the library. It was helpful about general low key energy, though it did feel weird to be reading about making bread, cuz if I really wanted I could just go to the grocery store, ya feel?"}].map((r) => (
              <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-5 space-y-1">
                <h3 className="font-bold text-sm"><a href={r.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#8B1A1A] transition-colors flex items-center gap-2">{r.name} <ExternalLink className="w-3 h-3" /></a></h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-[#8B1A1A]" /><h3 className="font-bold text-sm">Purchases that were helpful (but not necessary)</h3></div>
            <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
              {["\"Bowls\" for making 2 loaf recipes", "Bread spatulas", "Banneton (plus extras)", "Lame (I think you can just use a razor blade but I don't have one of these. Honestly I don't love this one, but I don't know if I'm just bad at this generally and it's less an issue of tool and more a personal problem)", "Bread knife cuz you can't sharpen them and I don't want to just bite into a chunk of bread"].map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="text-[#8B1A1A]">•</span> {item}</li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
