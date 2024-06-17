
import { deleteDataInput } from "./deleteDataInput.js";

import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { recipes } from "../../data/recipes.js";
import { Recipe } from "../class/Recipe.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";






export function displayRecipes(){
    getRecipes(recipes);
    const recFiltered = new RecipesFiltered();
    let allRecipesFiltered = recFiltered.allElSelected();
    console.log(allRecipesFiltered);
}


function getRecipes(recipes){
    recipes.forEach(rec => {
        const recipe = new Recipe(rec);
        const ingByRecipe = recipe.getIngredients();
        const appByRecipe = recipe.getAppliances();
        const ustByRecipe = recipe.getUstensils();
        const namesByRecipes = recipe.getName();
        const descrByRecipe = recipe.getDescription();
       recipe.buildCard();
    });


    const filterApp = new FilterAppliances(recipes);
    filterApp.createFilterAppliances();
    filterApp.displayListElFiltered();
    filterApp.displayTag();


    const filterIng = new FilterIngredients(recipes);
    filterIng.createFilterIngredients();
    filterIng.displayListElFiltered();
    filterIng.displayTag();
 


    const filterUst = new FilterUstensils(recipes);
    filterUst.createFilterUstensils();
    filterUst.displayListElFiltered();
    filterUst.displayTag();


    deleteDataInput('appliances');
    deleteDataInput('ingredients');
    deleteDataInput('ustensils');






}



// function getElSelected(name, elSelected){
//     let elSelected = [];
//     const listElements = document.querySelectorAll(`.${name}`);
//     listElements.forEach(el => { 
//         el.addEventListener('click', () => {
//         /** save elements selected */
//             elSelected.push(el.innerText.toLowerCase());
//             console.log(elSelected);
//             return elSelected;
       
//         });
//     })
// }
        
   