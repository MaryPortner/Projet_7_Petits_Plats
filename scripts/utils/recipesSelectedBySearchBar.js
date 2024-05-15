import { displayCardRecipes } from "./displayCardRecipes.js";
import { filterListElements } from "./displayUpdatedRecipes.js";
import { deleteListElement } from "./displayUpdatedRecipes.js";
import { getAppliancesByRecipe } from "./getByRecipes/getAppliances.js";
import { getIngredientsByRecipes } from "./getByRecipes/getIngredients.js";
import { getUstensilsByRecipe } from "./getByRecipes/getUstensils.js";
import { updateCounterRecipes } from "./displayUpdatedRecipes.js";


export function recipesSelectedBysearchBar(recipes){
    const regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{3,30}$/;
    const input = document.querySelector(`#search-q`);
    let recipesFiltered = [... new Set()];
    let research;
    const submit = document.querySelector('button.search-submit');
    recipes.forEach(recipe => {

        const appliances = getAppliancesByRecipe(recipe);
        const ingredients = getIngredientsByRecipes(recipe);
        const ustensils = getUstensilsByRecipe(recipe);

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            research = input.value.toLowerCase();
            if(regex.test(research)){

                appliances.forEach(appliance => {
                    if(appliance.includes(research)){
                        recipesFiltered.push(recipe); 
                    }
                });

                ingredients.forEach(ingredient => {         
                    if(ingredient.toLowerCase().includes(research)){
                        recipesFiltered.push(recipe);    
                    }
                });

                ustensils.forEach(ustensil => {
                    if(ustensil.includes(research)){
                        recipesFiltered.push(recipe);
            
                    }
                });
         
                filterListElements(recipesFiltered);
                displayCardRecipes(recipesFiltered);
                updateCounterRecipes(recipesFiltered); 

            } else {
                alert('Votre recherche doit contenir au moins 3 caractères');
            }

            console.log(recipesFiltered);
        });
    });  


    submit.addEventListener('click', () => {
        input.value = '';
    });

}



