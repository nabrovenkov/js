import { Fragment } from 'react'
import { RecipesType, recipes } from './data'

function Recipe({ id, name, ingredients }: RecipesType) {
	return (
		<Fragment>
			<h2>{name}</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</Fragment>
	)
}

export default function RecipeList() {
	return (
		<div>
			<h1>Recipes</h1>
			{recipes.map(recipes => <Recipe{...recipes}/>)}
		</div>
	)
}
