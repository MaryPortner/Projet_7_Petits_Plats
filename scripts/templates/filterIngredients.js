import { collectIngredients } from "../utils/collect/ingredients.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayUpdatedRecipes } from "../utils/displayUpdatedRecipes.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";


export function filterIngredients(recipes){
    let elements = [];
    const name = 'ingredients';
    elements = collectIngredients(recipes, name);
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);
    
    deleteDataInput(name);
    /** displays the list of elements matching the entry in the input */
    displayListElFiltered(name);
    displayUpdatedRecipes(name);  
}