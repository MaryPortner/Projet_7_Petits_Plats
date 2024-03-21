// import { displayCardRecipes } from "../utils/displayCardRecipes.js";
import { dropdown } from "../utils/dropdown.js";
// import { displayCardRecipes } from "../utils/displayCardRecipes.js"
import { displayCounterRecipes } from "../utils/counterRecipes.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { recipes } from "./../../data/recipes.js";


// displayCardRecipes(recipes);
dropdown();
displayCounterRecipes();
filterAppliances(recipes);
filterIngredients(recipes);
filterUstensils(recipes);


