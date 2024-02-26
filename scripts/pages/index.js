import { deleteDataInput } from "../utils/deleteDataInput.js";
import { displayDropdown } from "../utils/dropdown.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";
import { FilterByUtensils } from "../class/filterUtensils.js";
import { recipes } from "./../../data/recipes.js";


new FilterByUtensils(recipes);
// console.log(filterBarUstensiles);
displayDropdown();
displayNumberRecipes(recipes);
deleteDataInput();