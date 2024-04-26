import { getAppliancesByRecipe } from "../getByRecipes/getAppliances.js";

export function byAppliance(recipe, selectApp, list){
    let count = 0;
    let applianceByRecipes = getAppliancesByRecipe(recipe);
    selectApp.forEach(app => {
        /** count recipes that contain selected tags */
        if(applianceByRecipes.indexOf(app) > -1){
            count ++;
        }
    });

    if( count == selectApp.length){
        /** Create a new recipe list when filtering by appliance selected */
        list.push(recipe);
    }
}