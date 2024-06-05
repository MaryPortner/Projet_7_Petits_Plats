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


export function filterUstensils(){
    let elements = [];
    const name = 'ustensils';
    elements = collectUstensils(recipes, name);
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(name, listAllUst);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    displayUpdatedRecipes(name);

}




export function filterAppliances(recipes){
    let elements = collectAppliances(recipes);
    const name = 'appliances';
    // elements = collectAppliances(recipes);
    
    /** Inserting list of appliances into the filter div */
    const element =  createListOfElements(name, elements);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);
    // console.log(element.children);

    deleteDataInput(name);
    displayListElFiltered(name);
    displayUpdatedRecipes(name);
}


export function filterIngredients(recipes){
    let elements = [];
    const name = 'ingredients';
    elements = collectIngredients(recipes, name);
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(name, elements);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);
    
    deleteDataInput(name);
    /** displays the list of elements matching the entry in the input */
    displayListElFiltered(name);
    displayUpdatedRecipes(name);  
}