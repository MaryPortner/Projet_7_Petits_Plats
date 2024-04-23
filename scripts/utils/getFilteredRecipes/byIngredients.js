import { getIngredientsByRecipes } from "../getByRecipes/getIngredients.js";

export function byIngredients(recipe, selectIng, list){
    let count = 0;
    let ingredientsByRecipes = getIngredientsByRecipes(recipe);
    console.log(ingredientsByRecipes);
    // console.log(selectIng);
    selectIng.forEach(ing => {
        console.log(ing);
        /** count recipes that contain selected tags */
        if(ingredientsByRecipes.indexOf(ing) > -1){
            count ++;
        }
    });

    if(count == selectIng.length){
        /** Create a new recipe list when filtering by ingredients selected */
        list.push(recipe);
    }
}