import { collectIngredients } from "../utils/collect/ingredients.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayTag } from "../utils/displayTag.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";

let elements = [];
const name = 'ingredients';


export function filterIngredients(recipes){
    elements = collectIngredients(recipes, name);
    
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    displayTag(name);
    // displayRecipesByFilters();

}


