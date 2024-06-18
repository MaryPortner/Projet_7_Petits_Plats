
// import { deleteDataInput } from "./deleteDataInput.js";

// import { FilterAppliances } from "../class/FilterAppliances.js";
// import { FilterIngredients } from "../class/FilterIngredients.js";
// import { FilterUstensils } from "../class/FilterUstensils.js";

// import { recipes } from "../../data/recipes.js";
// import { Recipe } from "../class/Recipe.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";






export function displayRecipes(){
    const recipesFiltered = new RecipesFiltered();
    recipesFiltered.getRecipes();
    recipesFiltered.getElSelected('ingredients');
}



        
   