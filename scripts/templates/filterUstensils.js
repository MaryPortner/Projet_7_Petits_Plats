import { collectUstensils } from "../utils/collect/ustensils.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { createTagAndUpdateRecipes } from "../utils/createTagAndUpdateRecipes.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";

let elements = [];
const name = 'ustensils';


export function filterUstensils(recipes){
    elements = collectUstensils(recipes, name);
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    createTagAndUpdateRecipes(name);

}


