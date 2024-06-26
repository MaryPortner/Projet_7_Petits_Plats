import { displayCounterRecipes } from "../utils/counterRecipes.js";
import { expandDropdown } from "../utils/dropdown.js";
import { recipes } from "./../../data/recipes.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";



const list = new RecipesFiltered(recipes);
// displayCounterRecipes(recipes);
expandDropdown();



  

