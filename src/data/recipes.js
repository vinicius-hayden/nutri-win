export const recipes = [
  {
    slug: 'nutri-breakfast-bowl',
    name: 'Nutri Breakfast Bowl',
    image: '/recipes/breakfast-bowl.jpeg',
    summary: 'A warm, balanced bowl for quick morning energy.',
    prepTime: '10 mins',
    cookTime: '8 mins',
    servings: '2 servings',
    difficulty: 'Easy',
    ingredients: [
      '1 cup Nutri-Win blend',
      '2 cups water or milk',
      '1 banana, sliced',
      '1 tbsp groundnuts or peanuts, crushed',
      '1 tsp honey (optional)'
    ],
    steps: [
      'Add Nutri-Win blend and water to a pot over medium heat.',
      'Whisk continuously for 6 to 8 minutes until smooth and thick.',
      'Divide into two bowls and top with banana slices.',
      'Finish with crushed groundnuts and a light honey drizzle if desired.'
    ]
  },
  {
    slug: 'banana-bread',
    name: 'Banana Bread',
    image: '/recipes/banana_bread.jpg',
    summary: 'Moist banana loaf with Nutri-Win for extra nutrition.',
    prepTime: '15 mins',
    cookTime: '45 mins',
    servings: '8 slices',
    difficulty: 'Easy',
    ingredients: [
      '2 ripe bananas, mashed',
      '1 cup Nutri-Win blend',
      '1/2 cup flour',
      '1/3 cup vegetable oil',
      '2 eggs',
      '1/3 cup sugar',
      '1 tsp baking powder'
    ],
    steps: [
      'Heat oven to 175C and line a loaf pan.',
      'Mix mashed banana, eggs, oil, and sugar in a bowl.',
      'Add Nutri-Win blend, flour, and baking powder; mix until combined.',
      'Pour into the loaf pan and bake 40 to 45 minutes.',
      'Cool before slicing and serving.'
    ]
  },
  {
    slug: 'nutri-blueberry-muffin',
    name: 'Nutri Blueberry Muffin',
    image: '/recipes/blueberry_muffin.jpg',
    summary: 'Soft muffins with a simple blueberry burst.',
    prepTime: '12 mins',
    cookTime: '22 mins',
    servings: '10 muffins',
    difficulty: 'Easy',
    ingredients: [
      '1 cup Nutri-Win blend',
      '3/4 cup flour',
      '1/2 cup sugar',
      '1 cup blueberries',
      '2 eggs',
      '1/3 cup milk',
      '1 tsp baking powder'
    ],
    steps: [
      'Heat oven to 180C and line a muffin tray.',
      'Whisk eggs, milk, and sugar in a large bowl.',
      'Add Nutri-Win blend, flour, and baking powder.',
      'Fold in blueberries gently and divide into muffin cups.',
      'Bake for 20 to 22 minutes until golden on top.'
    ]
  },
  {
    slug: 'overnight-nutriwin-oats',
    name: 'Overnight Nutri-Win Oats',
    image: '/recipes/overnight-oats.jpg',
    summary: 'No-cook breakfast that is ready when you wake up.',
    prepTime: '8 mins',
    cookTime: 'No cook',
    servings: '1 jar',
    difficulty: 'Easy',
    ingredients: [
      '1/2 cup rolled oats',
      '1/3 cup Nutri-Win blend',
      '3/4 cup milk',
      '1 tbsp chia seeds',
      '1 tbsp yogurt',
      'Fresh fruit for topping'
    ],
    steps: [
      'Combine oats, Nutri-Win blend, milk, chia seeds, and yogurt in a jar.',
      'Stir well and seal.',
      'Refrigerate overnight for at least 6 hours.',
      'Top with fresh fruit before eating.'
    ]
  },
  {
    slug: 'strawberry-shortcake',
    name: 'Strawberry Shortcake',
    image: '/recipes/strawberry-shortcake.jpg',
    summary: 'Light cake layers with fresh strawberries and cream.',
    prepTime: '20 mins',
    cookTime: '28 mins',
    servings: '8 servings',
    difficulty: 'Medium',
    ingredients: [
      '1 cup Nutri-Win blend',
      '1 cup flour',
      '1/2 cup sugar',
      '2 eggs',
      '1/2 cup milk',
      '1 tsp baking powder',
      '1 cup sliced strawberries',
      'Whipped cream for layering'
    ],
    steps: [
      'Heat oven to 175C and prepare a round cake pan.',
      'Mix eggs, sugar, and milk until smooth.',
      'Add Nutri-Win blend, flour, and baking powder and mix lightly.',
      'Bake for 25 to 28 minutes, then cool completely.',
      'Layer cake with strawberries and whipped cream before serving.'
    ]
  },
  {
    slug: 'protein-cacao-cake',
    name: 'Protein Cacao Cake',
    image: '/recipes/cacao_cake.jpg',
    summary: 'A rich cacao cake with extra protein support.',
    prepTime: '18 mins',
    cookTime: '35 mins',
    servings: '8 slices',
    difficulty: 'Medium',
    ingredients: [
      '1 cup Nutri-Win blend',
      '3/4 cup flour',
      '1/4 cup cacao powder',
      '1/2 cup sugar',
      '2 eggs',
      '1/3 cup oil',
      '3/4 cup milk',
      '1 tsp baking powder'
    ],
    steps: [
      'Heat oven to 175C and grease a cake tin.',
      'Whisk eggs, oil, milk, and sugar together.',
      'Add Nutri-Win blend, flour, cacao powder, and baking powder.',
      'Mix until smooth, pour into tin, and bake for 32 to 35 minutes.',
      'Let cool, then slice and serve.'
    ]
  }
]

export function getRecipeBySlug(slug) {
  return recipes.find((recipe) => recipe.slug === slug)
}
