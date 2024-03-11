import { deleteDataInput } from "../utils/deleteDataInput.js";
import { displayCardRecipes } from "../utils/displayCardRecipes.js";
import { dropdown } from "../utils/dropdown.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";
import { filterByAppliances } from "../utils/filterAppliances.js";
import { filterByElements } from "../utils/filterUtensils.js";
import { filterByIngredients } from "../utils/filterIngredients.js";
import { recipes } from "./../../data/recipes.js";



displayCardRecipes(recipes);
dropdown();
displayNumberRecipes(recipes);
deleteDataInput();
filterByAppliances(recipes)
filterByElements(recipes);
filterByIngredients(recipes);


// const input = document.querySelector('#filter-sort-utensils');
// const utensils = document.querySelectorAll('.utensil');
// input.addEventListener('input', () => {
//     const needle =  input.value.toLowerCase().trim();
//     utensils.forEach(utensilEl => {
//         const utensil = utensilEl.textContent.toLowerCase().trim();
//         if(utensil.includes(needle)){
//             utensilEl.classList.remove('hidden');
//         }else {
//             utensilEl.classList.add('hidden');
//         }
//     });
// });