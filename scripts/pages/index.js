import { displayDropdown } from "../utils/dropdown.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";
import { FilterByUtensils } from "../class/filterUtensils.js";
import { recipes } from "./../../data/recipes.js";

// for (let i = 0 ; i < recipes.length ; i++){
//     let recipe = recipes[i];
//         // for (let j = 0 ; j < recipe.length ; j++){
//         //     let ustensiles = recipe[j];
//         //     console.log(ustensiles[9]);
//         // }
//         console.log(recipe.ustensils);

// }
let filterBarUstensiles = new FilterByUtensils(recipes);
// console.log(filterBarUstensiles);
displayDropdown();
displayNumberRecipes(recipes);
