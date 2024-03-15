// import { deleteDataInput } from "../utils/deleteDataInput.js";
import { displayCardRecipes } from "../utils/displayCardRecipes.js";
import { dropdown } from "../utils/dropdown.js";
import { displayNumberRecipes } from "../utils/counterRecipes.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterUstensils } from "../templates/filterUstensils.js";

import { recipes } from "./../../data/recipes.js";



displayCardRecipes(recipes);
dropdown();
displayNumberRecipes(recipes);
// deleteDataInput();
filterAppliances(recipes)
filterUstensils(recipes);
filterIngredients(recipes);

