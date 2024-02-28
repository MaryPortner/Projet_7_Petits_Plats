import { deleteDataInput } from "../utils/deleteDataInput.js";
import { displayDropdown } from "../utils/dropdown.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";
import { filterByUtensils } from "../utils/filterUtensils.js";
import { recipes } from "./../../data/recipes.js";



import { displayCardRecipes } from "../utils/displayCardRecipes.js";
displayCardRecipes(recipes);




filterByUtensils(recipes);
displayDropdown();
displayNumberRecipes(recipes);
deleteDataInput();