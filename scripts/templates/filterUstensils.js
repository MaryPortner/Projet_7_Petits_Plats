import { collectUstensils } from "../utils/collectUstensils.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayTag } from "../utils/displayTag.js";
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
    displayTag(name);
    // displayRecipesByFilters();

}


