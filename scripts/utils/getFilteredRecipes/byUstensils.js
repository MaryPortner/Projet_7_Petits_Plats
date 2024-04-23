import { getUstensilsByRecipe } from "../getByRecipes/getUstensils.js";

export function byUstensils(recipe, selectUst, list){
    let count = 0;
    let ustensilsByRecipes = getUstensilsByRecipe(recipe);
    console.log(selectUst);
    selectUst.forEach(ust => {
        /** count recipes that contain selected tags */
        if(ustensilsByRecipes.indexOf(ust) > -1){
            count ++;
        }
    });
    
    if(count == selectUst.length){
            /** Create a new recipe list when filtering by ustensils selected */
        list.push(recipe);
    }
}



