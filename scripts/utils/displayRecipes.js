import { CreateFilters } from "../class/CreateFilters.js";
import { deleteDataInput } from "./deleteDataInput.js";
import { displayCardRecipes }  from "../utils/displayCardRecipes.js"; 
import { displayListElFiltered } from "./displayListElFiltered.js";
import { ListElements } from "../class/ListElements.js";
import { recipes } from "../../data/recipes.js";
import { Recipe } from "../class/Recipe.js";
import { RecipesByElements } from "../class/RecipesByElement.js";




export function displayRecipes(recipes){

    displayCardRecipes(recipes);
    getRecipes(recipes);
}

function getRecipes(){
    let elSelected = [];
    let list;

    recipes.forEach(rec => {
       
        const recipe = new Recipe(rec);
        
        const ingByRecipe = recipe.getIngredients();
        const appByRecipe = recipe.getAppliances();
        const ustByRecipe = recipe.getUstensils();
        const namesByRecipes = recipe.getName();
        const descrByRecipe = recipe.getDescription();

        // console.log(ingByRecipe);
        // console.log(appByRecipe);
        // console.log(ustByRecipe);
        // console.log(namesByRecipes);
        // console.log(descrByRecipe);

        const byEl = new RecipesByElements(recipe, elSelected, list);
        // console.log(byEl.byAppliances());
    
        
    });


    const createFilters = new CreateFilters(recipes);

    createFilters.filterAppliances();
    createFilters.filterIngredients();
    createFilters.filterUstensils();


    deleteDataInput('appliances');
    deleteDataInput('ingredients');
    deleteDataInput('ustensils');

    displayListElFiltered('appliances');
    displayListElFiltered('ingredients');
    displayListElFiltered('ustensils');

}

// liste des entités, 
// Liste des recettes 
// Recette
// Tag
// Filtre ingrédients,
// Filtre appareils,
// Filtre ustensils,
// Recherche principale
// principe => 1 fichier, une classe