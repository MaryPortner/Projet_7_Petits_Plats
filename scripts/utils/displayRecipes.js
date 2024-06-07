import { CreateFilters } from "../class/CreateFilters.js";
import { deleteDataInput } from "./deleteDataInput.js";
import { displayCardRecipes }  from "../utils/displayCardRecipes.js"; 
import { displayListElFiltered } from "./displayListElFiltered.js";
import { ListElements } from "../class/ListElements.js";
import { recipes } from "../../data/recipes.js";
import { Recipe } from "../class/Recipe.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";




export function displayRecipes(recipes){
    displayCardRecipes(recipes);
    getRecipes(recipes);
}


function getRecipes(recipes){
    let list = [];

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

        // const byEl = new RecipesFiltered(recipe, elSelected, list);
        // console.log(byEl.byAppliances());
    });

    const createFilters = new CreateFilters(recipes, ListElements);

    createFilters.filterAppliances();
    createFilters.filterIngredients();
    createFilters.filterUstensils();

    deleteDataInput('appliances');
    deleteDataInput('ingredients');
    deleteDataInput('ustensils');

    /** displays the list of elements matching the entry in the input */
    displayListElFiltered('appliances');
    displayListElFiltered('ingredients');
    displayListElFiltered('ustensils');

    console.log(getElSelected('ingredients'));

    // //  declaration
    // const promise = new Promise((resolve, reject) => {

    //     const isRunning = true;

    //     if(isRunning === true){
    //         resolve();
    //     } else {
    //         reject();
    //     }
    // })
    
    // // Utilisation

    // promise.then(() => {
    //     let ingSelected = getElSelected('ingredients');
    //     console.log(ingSelected);
    // }).catch(() => {
    //     console.log('Error ! ');
    // });
 

}



function getElSelected(name){
    let elSelected = [];
    const listElements = document.querySelectorAll(`.${name}`);
    listElements.forEach(el => { 
        el.addEventListener('click', () => {
        /** save elements selected */
            elSelected.push(el.innerText.toLowerCase());
            console.log(elSelected);
            return elSelected;
        });
    })
}
        
   