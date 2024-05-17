import { displayCounterRecipes } from "../utils/counterRecipes.js";
import { dropdown } from "../utils/dropdown.js";
import { filterAppliances } from "../filters/filterAppliances.js";
import { filterIngredients } from "../filters/filterIngredients.js";
import { filterUstensils } from "../filters/filterUstensils.js";
import { recipes } from "./../../data/recipes.js";
import { recipesSelectedBysearchBar } from "../utils/displayUpdatedRecipes.js";

displayCounterRecipes(recipes);
dropdown();
filterAppliances(recipes);
filterIngredients(recipes);
filterUstensils(recipes);


recipesSelectedBysearchBar(recipes);



  

