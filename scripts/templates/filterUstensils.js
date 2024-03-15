import { collect } from "../utils/collect.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayTag } from "../utils/displayTag.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";

let elements = [];
const name = 'ustensils';



export function filterUstensils(recipes){
    elements = collect(recipes, name);
    console.log(elements);
    
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    displayTag(name);
    // displayRecipesByFilters();

}


