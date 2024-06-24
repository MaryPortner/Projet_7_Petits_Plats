import { displayCounterRecipes } from "../utils/counterRecipes.js";
import { expandDropdown } from "../utils/dropdown.js";
import { recipes } from "./../../data/recipes.js";
// import { recipesSelectedBysearchBar } from "../utils/displayUpdatedRecipes.js";
import { displayRecipes } from "../utils/displayRecipes.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";
import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";
// import { ListElements } from "../class/ListElements.js";

const list = new RecipesFiltered(recipes);



expandDropdown();



displayCounterRecipes(recipes);

// filterAppliances(recipes);
// filterIngredients(recipes);
// filterUstensils(recipes);
displayRecipes(recipes);
// const list = new ListElements(recipes);

// const listAllIng = list.listAllIngredients();
// const listAllApp = list.listAllAppliances();
// const listAllUst = list.listAllUstensils();




// console.log(listAllApp);
// console.log(listAllIng);
// console.log(listAllUst);
  

