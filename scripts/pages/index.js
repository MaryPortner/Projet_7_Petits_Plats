import { displayCounterRecipes } from "../utils/counterRecipes.js";
import { dropdown } from "../utils/dropdown.js";
import { recipes } from "./../../data/recipes.js";
// import { recipesSelectedBysearchBar } from "../utils/displayUpdatedRecipes.js";
import { displayRecipes } from "../utils/displayRecipes.js";
import { ListElements } from "../class/ListElements.js";

displayCounterRecipes(recipes);
dropdown();
// filterAppliances(recipes);
// filterIngredients(recipes);
// filterUstensils(recipes);
displayRecipes(recipes);
const list = new ListElements(recipes);

const listAllIng = list.listAllIngredients();
const listAllApp = list.listAllAppliances();
const listAllUst = list.listAllUstensils();




// console.log(listAllApp);
// console.log(listAllIng);
// console.log(listAllUst);
  

