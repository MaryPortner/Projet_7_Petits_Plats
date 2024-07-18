import { expandDropdown } from "../utils/dropdown.js";
import { recipes } from "./../../data/recipes.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";



export const recipesFiltered = new RecipesFiltered(recipes);

expandDropdown();



  

