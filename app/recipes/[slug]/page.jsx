import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookOpenCheck, ChefHat, Clock3, Flame, ListChecks, Soup, Users } from 'lucide-react'
import SiteNav from '../../../src/components/SiteNav'
import { getRecipeBySlug, recipes } from '../../../src/data/recipes'

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

export function generateMetadata({ params }) {
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    return {
      title: 'Recipe Not Found | Nutri-Win',
    }
  }

  return {
    title: `${recipe.name} | Nutri-Win Recipes`,
    description: recipe.summary,
  }
}

export default function RecipeDetailPage({ params }) {
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <div className="relative h-28 bg-white">
        <SiteNav theme="light" />
      </div>

      <main className="mx-auto w-full max-w-5xl px-4 pb-20 md:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-md border-2 border-[#d5e8d7] bg-white px-5 py-8 sm:px-8 sm:py-10">
            <p className="display-face text-xs tracking-[0.2em] text-[#4c8c51]">Nutri-Win Recipe</p>
            <h1 className="display-face mt-3 text-4xl leading-[0.92] text-neutral-950 sm:text-6xl">
              {recipe.name}
            </h1>
            <p className="mt-4 text-base leading-8 text-neutral-700 sm:text-lg">{recipe.summary}</p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <div className="rounded-sm border border-neutral-300 bg-[#f8fbf8] px-3 py-3">
                <p className="inline-flex items-center gap-1.5 display-face text-[10px] tracking-[0.14em] text-[#4c8c51]"><Clock3 className="h-3.5 w-3.5" /> Prep Time</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-neutral-800">{recipe.prepTime}</p>
              </div>
              <div className="rounded-sm border border-neutral-300 bg-[#f8fbf8] px-3 py-3">
                <p className="inline-flex items-center gap-1.5 display-face text-[10px] tracking-[0.14em] text-[#4c8c51]"><Flame className="h-3.5 w-3.5" /> Cook Time</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-neutral-800">{recipe.cookTime}</p>
              </div>
              <div className="rounded-sm border border-neutral-300 bg-[#f8fbf8] px-3 py-3">
                <p className="inline-flex items-center gap-1.5 display-face text-[10px] tracking-[0.14em] text-[#4c8c51]"><Users className="h-3.5 w-3.5" /> Servings</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-neutral-800">{recipe.servings}</p>
              </div>
              <div className="rounded-sm border border-neutral-300 bg-[#f8fbf8] px-3 py-3">
                <p className="inline-flex items-center gap-1.5 display-face text-[10px] tracking-[0.14em] text-[#4c8c51]"><ChefHat className="h-3.5 w-3.5" /> Difficulty</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-neutral-800">{recipe.difficulty}</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden sm:min-h-96">
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-md border-2 border-[#d5e8d7] bg-[#f8fbf8] p-5 sm:p-6">
            <h2 className="inline-flex items-center gap-2 display-face text-2xl leading-[0.95] text-neutral-950"><Soup className="h-6 w-6 text-[#2e6a3d]" /> Ingredients</h2>
            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map((item) => (
                <li key={item} className="rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm leading-6 text-neutral-800">
                  <span className="inline-flex items-start gap-2">
                    <BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2e6a3d]" />
                    <span>{item}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-md border-2 border-[#d5e8d7] bg-white p-5 sm:p-6">
            <h2 className="inline-flex items-center gap-2 display-face text-2xl leading-[0.95] text-neutral-950"><ListChecks className="h-6 w-6 text-[#2e6a3d]" /> Steps</h2>
            <ol className="mt-4 space-y-3">
              {recipe.steps.map((step, index) => (
                <li key={step} className="rounded-sm grid grid-cols-[2.4rem_1fr] gap-3 border border-neutral-300 bg-[#f8fbf8] px-3 py-3">
                  <span className="display-face flex h-8 w-8 items-center justify-center rounded-sm border border-[#4c8c51] bg-white text-sm text-[#2e6a3d]">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-neutral-800">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/recipes"
            className="inline-flex items-center rounded-sm border-2 border-[#4c8c51] bg-[#4c8c51] px-4 py-2 text-xs uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#4c8c51]"
          >
            Back To Recipes
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-sm border-2 border-neutral-900 bg-white px-4 py-2 text-xs uppercase tracking-[0.14em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Home
          </Link>
        </div>
      </main>
    </div>
  )
}
