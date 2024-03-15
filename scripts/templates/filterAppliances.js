import { collect } from "../utils/collect.js";
import { createListOfElements } from "../utils/createListOfElements.js";
import { displayListElFiltered } from "../utils/displayListElFiltered.js";
import { displayTag } from "../utils/displayTag.js";
import { deleteDataInput } from "../utils/deleteDataInput.js";

let elements = [];
const name = 'appliances';


export function filterAppliances(recipes){
    elements = collect(recipes, name);
    
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements, name);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    deleteDataInput(name);
    displayListElFiltered(name);
    displayTag(name);
  

    // displayRecipesByFilters();

}




// for(let elToDisplay of elementsToFilter){
//     elToDisplay.classList.remove('hidden');
// //     input.value = '';
// }

// crossToDeleteTag.addEventListener('click', () => {
//     elSelectedInList.style.display = 'block';
//     mainTag.style.display = 'none';
// })

 

// elSelectedInList.classList.remove('hidden');
// input.value = '';
// elSelectedInList.style.display = 'none';
// dropdown.style.display = 'none';
