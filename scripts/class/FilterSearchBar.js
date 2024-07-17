import { Filters } from "./Filters.js";
import { recipes } from "./../../data/recipes.js";

export class FilterSearchBar extends Filters {

    constructor(list){

        super(list, 'searchBar');
        this.recipes = recipes;
        this.filteredBySearchBar = [];
    }

    deleteData(){
        super.deleteDataInput();
    }


    getRecipes(){
        const regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{3,30}$/;
        const input = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');
        let recipesFiltered = [];

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            filterRecipes();
            // console.log(recipesFiltered);
            if(recipesFiltered.length === 0){
                console.log('Aucune recette ne correspond à votre recherche')
            }

            input.value = '';
        });


        const filterRecipes = () => {
            let research = input.value.toLowerCase().trim();
            recipesFiltered = [];  // delete previous results
            if (regex.test(research)) {
                this.recipes.forEach(recipe => {
                    let app = recipe.appliance.toLowerCase();
                    let arrayIng = recipe.ingredients;
                    let arrayUst = recipe.ustensils;
                    let ing = [];
                    let ust = [];

                    // Create an array of ingredients per recipe
                    arrayIng.forEach(ingredient => {
                        ing.push(ingredient.ingredient.toLowerCase());
                    });

                    // Create an array of ustensils per recipe
                    arrayUst.forEach(ustensil => {
                        ust.push(ustensil.toLowerCase());
                    });

                    if (app.includes(research) || ing.includes(research) || ust.includes(research)) {
                        recipesFiltered.push(recipe);
                    } 
                });
                this.filteredBySearchBar = recipesFiltered;
                console.log(recipesFiltered);
                // return recipesFiltered;
                
            } else {
                console.log('Votre recherche doit contenir au moins 3 caractères');
            }        
        };


       
    }
}
