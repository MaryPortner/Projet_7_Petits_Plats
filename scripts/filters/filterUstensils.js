import { collectUstensils } from "../utils/collect/ustensils.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayUpdatedRecipes } from "../utils/displayUpdatedRecipes.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";




export function filterUstensils(recipes){
    let elements = [];
    const name = 'ustensils';
    elements = collectUstensils(recipes, name);
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(name, elements);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    displayUpdatedRecipes(name);

}