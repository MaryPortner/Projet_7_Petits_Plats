
import { deleteDataInput } from "../utils/deleteDataInput.js";

import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { Recipe } from "./Recipe.js";
import { recipes } from "../../data/recipes.js";

export class RecipesFiltered{

    constructor(){
        this.recipes = recipes;
        this.recipe = new Recipe(this.recipes);
        this.elcliked = [];
    }

    // Déclarer une variable qui récupérerait tous les éléments cliqués
    // Déclarer une variable pour sauvergarder les recettes sélectionnées dans un tableau.
    // Boucler sur chaque élément cliqué
    // S'il apparait dans une recette, on sauvegarde la recette.
    // on retourne toutes les recettes.


   async getRecipes(){
        this.recipes.forEach(rec => {
            const recipe = new Recipe(rec);
            // const ingByRecipe = recipe.getIngredients();
            // const appByRecipe = recipe.getAppliances();
            // const ustByRecipe = recipe.getUstensils();
            // const namesByRecipes = recipe.getName();
            // const descrByRecipe = recipe.getDescription();
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

    getElSelected(name){
        // let elcliked = [];
        const listElements = document.querySelectorAll(`.${name}`);
      
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                this.elcliked.push(el.innerText);
                return console.log(this.elcliked);
            });
        });
    }

    




}