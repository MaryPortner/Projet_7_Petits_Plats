import { deleteDataInput } from "../utils/deleteDataInput.js";

import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { Recipe } from "./Recipe.js";


export class RecipesFiltered{

    constructor(recipes){
        this.recipes = [];
        this.wrapper = document.querySelector('#main_allRecipes');
        this.filters = [];
        this.filtered = this.recipes;
        this.init(recipes);
        this.elClicked = [];

    }


    addFilter(filter){
        this.filters.push(filter);
    }

   
    display(){
        this.wrapper.innerHTML = '';
        this.filtered.forEach(recipe => {
            const card = recipe.buildCard();
            this.wrapper.appendChild(card);
        });
    }


    hydrateFilters(){
        this.filters.forEach(filter => {
            filter.hydrate();
            filter.display();
        });
    }


    init(recipes){
        const filterApp = new FilterAppliances(this); // "this" here refers to the class itself 
        const filterIng = new FilterIngredients(this);
        const filterUst = new FilterUstensils(this);

        recipes.forEach(recipe => {
            this.recipes.push(new Recipe(recipe))
        });

        this.display();

        this.addFilter(filterApp);
        this.addFilter(filterIng);
        this.addFilter(filterUst);
        this.hydrateFilters();
    }


    getRecipes(){
    
        const filterApp = new FilterAppliances(this.recipes);
        filterApp.createFilterAppliances();
        filterApp.displayListElFiltered();
        filterApp.displayTag();

        const filterIng = new FilterIngredients(this.recipes);
        filterIng.createFilterIngredients();
        filterIng.displayListElFiltered();
        filterIng.displayTag();
    
        const filterUst = new FilterUstensils(this.recipes);
        filterUst.createFilterUstensils();
        filterUst.displayListElFiltered();
        filterUst.displayTag();
    
        deleteDataInput('appliances');
        deleteDataInput('ingredients');
        deleteDataInput('ustensils');

    }



    // getFilteredRecipes() {
    //     let appByRecipe;
    //     let ingByRecipe;
    //     let ustByRecipe;

    //     this.recipes.forEach(rec => {
    //         const recipe = new Recipe(rec);
    //         recipe.buildCard();

    //         ingByRecipe = recipe.getIngredients();
    //         appByRecipe = recipe.getAppliances();
    //         ustByRecipe = recipe.getUstensils();
    //         // const namesByRecipes = recipe.getName();
    //         // const descrByRecipe = recipe.getDescription();

    //         this.elClicked.forEach(el => {
    //             if(ingByRecipe.includes(el)){
    //                 this.filtered.push(rec);
    //             }
    //         });
    //     });
    // }




    getFilteredRecipes() {
        this.filtered = this.recipes.filter(recipe => {
            const ingredients = recipe.getIngredients();
            const appliances = recipe.getAppliances();
            const ustensils = recipe.getUstensils();

            return this.elClicked.every(el =>
                ingredients.includes(el) || appliances.includes(el) || ustensils.includes(el)
            );
        });

        this.display();
    }


    getElSelected(name) {
        const listElements = document.querySelectorAll(`.${name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                this.elClicked.push(el.innerText);
                console.log(this.elClicked); // Vérification des éléments cliqués
                // this.getFiltered(); // Afficher les recettes filtrées après chaque clic
            });
        });
    }




}