import { CardRecipe } from "../class/cardRecipe.js";

export function displayCardRecipes(recipes) {
    recipes.forEach(el => {
        let recipe = new CardRecipe(el);
        recipe.buildCard();  
    });
}
