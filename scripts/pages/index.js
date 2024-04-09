// import { displayCardRecipes } from "../utils/displayCardRecipes.js";
// import { createTagWrapper } from "../utils/createTagWrapper.js";
import { displayCounterRecipes } from "../utils/counterRecipes.js";
import { dropdown } from "../utils/dropdown.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { recipes } from "./../../data/recipes.js";



// displayCardRecipes(recipes);


displayCounterRecipes(recipes);
dropdown();
filterAppliances(recipes);
filterIngredients(recipes);
filterUstensils(recipes);

// createTagWrapper('appliances');
// createTagWrapper('ingredients');
// createTagWrapper('ustensils');




  

