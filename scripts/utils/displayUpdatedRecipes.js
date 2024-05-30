import { displayCardRecipes } from "./displayCardRecipes.js";
import { getAppliancesByRecipe } from "./getByRecipes/getAppliances.js";
import { getIngredientsByRecipes } from "./getByRecipes/getIngredients.js";
import { getUstensilsByRecipe } from "./getByRecipes/getUstensils.js";
// import { recipes } from "../../data/recipes.js";

import { GetElementsByRecipe } from "../class/getElementsByRecipes.js";

// export function createTag(name, elSelected){
//     const tag = document.createElement('div');
//     tag.classList.add(`tag-${name}`);

//     const textEl = document.createElement('p');
//     textEl.classList.add(`tag-${name}-p`);
//     textEl.innerText =  `${elSelected.innerText}`; 

//     const crossToDeleteTag = document.createElement('span');
//     crossToDeleteTag.classList.add('tag-delete');

//     tag.appendChild(textEl);
//     tag.appendChild(crossToDeleteTag);

//     return tag;
// }


// export function deleteListElement(){
//     document.querySelector("#main_filter-bar-appliances .filter-appliances-list").remove();
//     document.querySelector("#main_filter-bar-ingredients .filter-ingredients-list").remove();
//     document.querySelector("#main_filter-bar-ustensils .filter-ustensils-list").remove();
// }


// function deleteTagAndUpdateList(tag, name){
//     let crossToDeleteTag = tag.querySelector('.tag-delete');

//     /** listener for delete the tag and put the element back in the list */
//     crossToDeleteTag.addEventListener('click', () => {
//         const item = crossToDeleteTag.parentElement.querySelector('p').innerText.toLowerCase().trim();
//         let  filteredRecipes = [];
  
//         /*****  update selection to the tag *****/
//         if(name === 'appliances'){
//             /** find index corresponding of item (innerText to the tag) */
//             const index = selectApp.findIndex(i => i === item);
//             /** delete of the array selectApp the item corresponding  */
//             selectApp.splice(index, 1);
//         }

//         if(name === 'ingredients'){
//             const index = selectIng.findIndex(i => i === item);
//             selectIng.splice(index, 1);
//         }

//         if(name === 'ustensils'){
//             const index = selectUst.findIndex(i => i === item);
//             selectUst.splice(index, 1);
//         }

//         /** To delete tag */
//         tag.style.display = 'none';

//         /** To filter recipes */
//         filteredRecipes = getFilteredRecipes(recipes, 'ingredients');
//         filteredRecipes = getFilteredRecipes(filteredRecipes, 'appliances');
//         filteredRecipes = getFilteredRecipes(filteredRecipes, 'ustensils');
        
//         /** put back selected element from list after delete tag corresponding */
       
//         putBackSelectedElFromList(filteredRecipes, selectApp, 'appliances');
//         putBackSelectedElFromList(filteredRecipes, selectIng, 'ingredients');
//         putBackSelectedElFromList(filteredRecipes, selectUst, 'ustensils');
        
        
//         updateCounterRecipes();

//     });  

// }

export function displayUpdatedRecipes(recipes){
    // displayCardRecipes(recipes);
    getRecipesByFilterBar(recipes);
    console.log('testA', recipes);

}

function getRecipesByFilterBar(recipes){
    const input = document.querySelector(`#search-q`);
    
    input.addEventListener('input', (e) => {
        let research = e.target.value.toLowerCase().trim();
        if(research.trim().length < 3 ){
            console.log('Votre recherche doit contenir au moins 3 caractères');
            return;

        } else {

            let recipesFiltered = searchB(recipes, research);
            console.log(recipesFiltered);
        }
    });

    updateCounterRecipes();
}

function searchB(recipes, research){

    console.log('testB', recipes);
    let recipesSelected = [];

    let appliances = new GetElementsByRecipe(recipes);
    appliances.getAppliances();
    console.log('search', appliances.getAppliances());

    let ingredients = new GetElementsByRecipe(recipes);
    ingredients.getIngredients();
    console.log( ingredients.getIngredients());

    let ustensils = new GetElementsByRecipe(recipes);
    ustensils.getUstensils();
    console.log(ustensils.getUstensils());


    for(let i = 0 ;  i < recipes.length ; i ++ ){
        
        // let appliances = getAppliancesByRecipe(recipes[i]);
        // let ingredients = getIngredientsByRecipes(recipes[i]);
        // let ustensils = getUstensilsByRecipe(recipes[i]);



        if(appliances.getAppliances().includes(research)){
            recipesSelected.push(recipes[i]); 
        } 

        if( ingredients.getIngredients().includes(research)){
            recipesSelected.push(recipes[i]); 
            }

        if(ustensils.getUstensils().includes(research)){
            recipesSelected.push(recipes[i]); 
        }

        if(recipes[i].name.toLowerCase().includes(research)){
            recipesSelected.push(recipes[i]); 
        }

        if(recipes[i].description.toLowerCase().includes(research)){
            recipesSelected.push(recipes[i]); 
        }

        if(recipes.length === 0){
            console.log("Votre recherche ne correspond à aucun résultat");
        }
    }
    
    /** delete duplicates */
    let recipesFiltered = recipesSelected.filter((x, i) => recipesSelected.indexOf(x) === i);

    return recipesFiltered;
}


/** update number recipes */
function updateCounterRecipes(){
    const recipesContainer = document.querySelector('#main_allRecipes');
    /** get number of recipes displayed */
    let numberRecipes = recipesContainer.childElementCount; 
    /** update display number of recipes */
    document.querySelector('.numberRecipes').innerText = numberRecipes;
}




 