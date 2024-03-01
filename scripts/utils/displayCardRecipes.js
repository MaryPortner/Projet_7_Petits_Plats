import { CardRecipe } from "../class/cardRecipe.js";

export function displayCardRecipes(recipes) {

    let datas = [];
    let recipe;
    let dataIngredients = [];

    let ingredient;

    for (let i = 0 ; i < recipes.length ; i++){
        datas = recipes[i];
        dataIngredients = datas.ingredients;
    
        recipe = new CardRecipe(datas.image, datas.name, datas.time, datas.description);
        recipe.buildCard(datas.image, datas.name, datas.time, datas.description);
  
        for (let i = 0 ; i < dataIngredients.length ; i++){
            ingredient = dataIngredients[i];
            console.log(ingredient);
            ingredient = new CardRecipe( datas.image, datas.name, datas.time, datas.description, ingredient.ingredient, ingredient.quantity, ingredient.unit);
            ingredient.displayIngredients();
        }

    }

}
