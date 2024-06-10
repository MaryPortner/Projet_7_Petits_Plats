
import { deleteDataInput } from "./deleteDataInput.js";
import { displayListElFiltered } from "./displayListElFiltered.js";
import { Filters } from "../class/Filters.js";
import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";
import { ListElements } from "../class/ListElements.js";
import { recipes } from "../../data/recipes.js";
import { Recipe } from "../class/Recipe.js";
import { RecipesFiltered } from "../class/RecipesFiltered.js";






export function displayRecipes(){
    getRecipes(recipes);
}


function getRecipes(recipes){
    let elSelected = [];
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

    const createFilters = new Filters(recipes);

    const filterApp = new FilterAppliances();
    filterApp.createFilterAppliances();

    const filterIng = new FilterIngredients();
    filterIng.createFilterIngredients();

    const filterUst = new FilterUstensils();
    filterUst.createFilterUstensils();



    deleteDataInput('appliances');
    deleteDataInput('ingredients');
    deleteDataInput('ustensils');

    /** displays the list of elements matching the entry in the input */
    displayListElFiltered('appliances');
    displayListElFiltered('ingredients');
    displayListElFiltered('ustensils');


    let ingSelected = getElSelected('ingredients', elSelected);
    console.log('a', ingSelected);

}



function getElSelected(name, elSelected){
  
    const listElements = document.querySelectorAll(`.${name}`);
    listElements.forEach(el => { 
        el.addEventListener('click', () => {
        /** save elements selected */
            elSelected.push(el.innerText.toLowerCase());
            console.log(elSelected);
       
        });
    })
}
        
   