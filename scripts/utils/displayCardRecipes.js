import { CardRecipe } from "../class/cardRecipe.js";

export function displayCardRecipes(recipes) {
    document.querySelector('#main_allRecipes').innerHTML = '';
    recipes.forEach(el => {
        let recipe = new CardRecipe(el);
        recipe.buildCard();  
    });
}
