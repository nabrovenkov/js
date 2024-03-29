export type RecipesType = {
  id: string
  name: string
  ingredients: Array<string>
}

export const recipes: Array<RecipesType> = [
	{
		id: 'greek-salad',
		name: 'Greek Salad',
		ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
	},
	{
		id: 'hawaiian-pizza',
		name: 'Hawaiian Pizza',
		ingredients: [
			'pizza crust',
			'pizza sauce',
			'mozzarella',
			'ham',
			'pineapple',
		],
	},
	{
		id: 'hummus',
		name: 'Hummus',
		ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
	},
]
