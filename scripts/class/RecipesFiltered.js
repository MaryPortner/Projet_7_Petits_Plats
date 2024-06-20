
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
        this.filteredRecipes = [];
    }

   async getRecipes(){
    
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

   

    getFilteredRecipes() {
        let appByRecipe;
        let ingByRecipe;
        let ustByRecipe;

        this.recipes.forEach(rec => {
            const recipe = new Recipe(rec);
            recipe.buildCard();

            ingByRecipe = recipe.getIngredients();
            appByRecipe = recipe.getAppliances();
            ustByRecipe = recipe.getUstensils();
            // const namesByRecipes = recipe.getName();
            // const descrByRecipe = recipe.getDescription();

            this.elcliked.forEach(el => {
                if(ingByRecipe.includes(el)){
                    this.filteredRecipes.push(rec);
                }
            });
        })
    }


    getElSelected(name) {
        const listElements = document.querySelectorAll(`.${name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                this.elcliked.push(el.innerText);
                console.log(this.elcliked); // Vérification des éléments cliqués
                // this.getFilteredRecipes(); // Afficher les recettes filtrées après chaque clic
            });
        });
    }

    displayFilteredRecipes(){
        // this.getRecipes();
        // this.getElSelected('ingredients'); 
        // this.getFilteredRecipes();
  
        this.filteredRecipes.forEach(rec => {
            const recipe = new Recipe(rec);
            recipe.buildCard();
        })
    }



}