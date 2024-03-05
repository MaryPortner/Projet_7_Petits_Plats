import { deleteDataInput } from "../utils/deleteDataInput.js";
import { displayCardRecipes } from "../utils/displayCardRecipes.js";
import { displayDropdown } from "../utils/dropdown.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";
import { filterByUtensils } from "../utils/filterUtensils.js";
import { recipes } from "./../../data/recipes.js";



displayCardRecipes(recipes);
displayDropdown();
displayNumberRecipes(recipes);
deleteDataInput();
filterByUtensils(recipes);


// const input = document.querySelector('#filter-sort-utensils');
// const utensils = document.querySelectorAll('.utensil');
// input.addEventListener('input', () => {
//     const needle =  input.value.toLowerCase().trim();
//     utensils.forEach(utensilEl => {
//         const utensil = utensilEl.textContent.toLowerCase().trim();
//     })
// });