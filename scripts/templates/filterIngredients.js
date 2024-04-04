import { collectIngredients } from "../utils/collect/ingredients.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { createTagAndUpdateRecipes } from "../utils/createTagAndUpdateRecipes.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";




export function filterIngredients(recipes, ingSelected){
    let elements = [];
    const name = 'ingredients';
    elements = collectIngredients(recipes, name);
    elements = elements.filter(el => el !== ingSelected);
    
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    createTagAndUpdateRecipes(name);

}


