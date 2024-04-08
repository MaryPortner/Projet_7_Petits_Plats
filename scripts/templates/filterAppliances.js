import { collectAppliances } from "../utils/collect/appliances.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { createTagAndUpdateRecipes } from "../utils/createTagAndUpdateRecipes.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";




export function filterAppliances(recipes){
    let elements = [];
    const name = 'appliances';
    elements = collectAppliances(recipes);
    
    /** Inserting list of appliances into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    createTagAndUpdateRecipes(name);
  
}



