import Image from 'next/image'
import Link from 'next/link'
import SiteNav from '../../src/components/SiteNav'
import { recipes } from '../../src/data/recipes'

export const metadata = {
  title: 'Recipes | Nutri-Win',
  description: 'Simple Nutri-Win recipes you can cook at home.',
}

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-neutral-950">
      <div className="relative h-28 bg-[#f5f0e8]">
        <SiteNav theme="light" />
      </div>

      <main className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <section className="rounded-md border-2 border-[#d5e8d7] bg-[#f5f0e8] px-5 py-8 sm:px-8 sm:py-10">
          <p className="display-face text-xs tracking-[0.2em] text-[#4c8c51]">Nutri-Win Kitchen</p>
          <h1 className="display-face mt-3 text-4xl leading-[0.92] text-neutral-950 sm:text-6xl">
            Recipes
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
            Straightforward recipes built around Nutri-Win staples.
          </p>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article key={recipe.slug} className="rounded-md border-2 border-[#d5e8d7] bg-[#f5f0e8] p-5">
              <div className="relative mb-4 h-44 w-full overflow-hidden rounded-sm border border-neutral-300 bg-[#f5f0e8]">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="display-face text-xs tracking-[0.16em] text-[#4c8c51]">{recipe.difficulty}</p>
              <h2 className="display-face mt-2 text-2xl leading-[0.95] text-neutral-950">{recipe.name}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{recipe.summary}</p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-xs uppercase tracking-widest text-neutral-700">
                <div className="rounded-sm border border-neutral-300 bg-[#f5f0e8] px-2 py-2">
                  <p className="display-face text-[10px] text-[#4c8c51]">Prep</p>
                  <p className="mt-1">{recipe.prepTime}</p>
                </div>
                <div className="rounded-sm border border-neutral-300 bg-[#f5f0e8] px-2 py-2">
                  <p className="display-face text-[10px] text-[#4c8c51]">Cook</p>
                  <p className="mt-1">{recipe.cookTime}</p>
                </div>
                <div className="rounded-sm border border-neutral-300 bg-[#f5f0e8] px-2 py-2">
                  <p className="display-face text-[10px] text-[#4c8c51]">Serve</p>
                  <p className="mt-1">{recipe.servings}</p>
                </div>
              </div>

              <Link
                href={`/recipes/${recipe.slug}`}
                className="mt-5 inline-flex items-center rounded-sm border-2 border-[#4c8c51] bg-[#4c8c51] px-4 py-2 text-xs uppercase tracking-[0.14em] text-white transition hover:bg-[#f5f0e8] hover:text-[#4c8c51]"
              >
                View Recipe
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
