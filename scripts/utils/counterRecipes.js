import { recipes } from "./../pages/index.js";

const numberTotalRecipes = document.querySelector('.numberTotalRecipes');

/** Display number of recipes  */
export function displayNumberRecipes(){
        
    const numberRecipes = document.createElement('p');
    numberRecipes.classList.add("numberRecipes");
    numberRecipes.innerText = `${recipes.length}`;

    const recipesTxt = document.createElement("p");
    recipesTxt.classList.add("recipes");
    recipesTxt.innerText = `recettes`;

    numberTotalRecipes.appendChild(numberRecipes);
    numberTotalRecipes.appendChild(recipesTxt);
}