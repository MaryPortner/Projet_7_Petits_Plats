import { collectAppliances } from "../utils/collect/appliances.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayUpdatedRecipes } from "../utils/displayUpdatedRecipes.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";


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

