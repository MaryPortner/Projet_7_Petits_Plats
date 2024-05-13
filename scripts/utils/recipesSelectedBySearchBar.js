import { displayCardRecipes } from "./displayCardRecipes.js";
import { filterListElements } from "./displayUpdatedRecipes.js";
import { deleteListElement } from "./displayUpdatedRecipes.js";


// import { recipes } from "../../data/recipes.js";

export function recipesSelectedBysearchBar(recipes){
    const regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{3,30}$/;
    const input = document.querySelector(`#search-q`);
    const submit = document.querySelector('button.search-submit');

    // let appliances = [];
    // let ingredients = [];
    // let ustensils = [];
    let recipesFiltered = [... new Set()];

  
    // displayCardRecipes(recipes);
    recipes.forEach(recipe => {
        // console.log(submit);
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            let research = input.value.toLowerCase();
        
            if(regex.test(research)){
        
                if(recipe.appliance.toLowerCase().includes(research)){
                    recipesFiltered.push(recipe);
                    deleteListElement();
                    filterListElements(recipesFiltered);
                    displayCardRecipes(recipesFiltered);
                    updateCounterRecipes(recipesFiltered);       
                }
        
            } else {
                alert('Votre recherche doit contenir au moins 3 caractères');
            }

       
        });
    });
   

 

  
  


}



/** update number recipes */
function updateCounterRecipes(){
    const recipesContainer = document.querySelector('#main_allRecipes');
    /** get number of recipes displayed */
    let numberRecipes = recipesContainer.childElementCount; 
    /** update display number of recipes */
    document.querySelector('.numberRecipes').innerText = numberRecipes;
}