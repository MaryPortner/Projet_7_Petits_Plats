
import { deleteDataInput } from "./deleteDataInput.js";

import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { recipes } from "../../data/recipes.js";
import { Recipe } from "../class/Recipe.js";
import { recipesFiltered } from "../class/RecipesFiltered.js";






export function displayRecipes(){
    getRecipes(recipes);
}


function getRecipes(recipes){
    // let elSelected = [];
    let list = [];

    recipes.forEach(rec => {
        const recipe = new Recipe(rec);
        const ingByRecipe = recipe.getIngredients();
        const appByRecipe = recipe.getAppliances();
        const ustByRecipe = recipe.getUstensils();
        const namesByRecipes = recipe.getName();
        const descrByRecipe = recipe.getDescription();
       recipe.buildCard();

    
        // console.log(appByRecipe);
        // console.log(ustByRecipe);
        // console.log(namesByRecipes);
        // console.log(descrByRecipe);

        // const byEl = new RecipesFiltered(recipe, elSelected, list);
        // console.log(byEl.byAppliances());
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


    const recipesfiltered = new recipesFiltered(recipes);
    recipesfiltered.byAppliances();

    deleteDataInput('appliances');
    deleteDataInput('ingredients');
    deleteDataInput('ustensils');

    /** displays the list of elements matching the entry in the input */
    // displayListElFiltered('appliances');
    // // displayListElFiltered('ingredients');
    // displayListElFiltered('ustensils');


    // let ingSelected = filterIng.getElSelected('ingredients');
    // console.log('a', ingSelected);

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
        
   