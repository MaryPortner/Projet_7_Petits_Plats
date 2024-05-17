import { byAppliance } from "./getFilteredRecipes/byAppliance.js";
import { byIngredients } from "./getFilteredRecipes/byIngredients.js";
import { byUstensils } from "./getFilteredRecipes/byUstensils.js";
import { displayCardRecipes } from "./displayCardRecipes.js";
import { filterAppliances } from "../filters/filterAppliances.js";
import { filterIngredients } from "../filters/filterIngredients.js";
import { filterUstensils } from "../filters/filterUstensils.js";
import { getAppliancesByRecipe } from "./getByRecipes/getAppliances.js";
import { getIngredientsByRecipes } from "./getByRecipes/getIngredients.js";
import { getUstensilsByRecipe } from "./getByRecipes/getUstensils.js";
import { recipes } from "../../data/recipes.js";


/** Selection de plusieurs ingredients - selectSeveralIng */
let  filteredRecipes = [];
const selectApp = [];
const selectIng = [];
const selectUst = [];




export function createTag(name, elSelected){
    const tag = document.createElement('div');
    tag.classList.add(`tag-${name}`);

    const textEl = document.createElement('p');
    textEl.classList.add(`tag-${name}-p`);
    textEl.innerText =  `${elSelected.innerText}`; 

    const crossToDeleteTag = document.createElement('span');
    crossToDeleteTag.classList.add('tag-delete');

    tag.appendChild(textEl);
    tag.appendChild(crossToDeleteTag);

    return tag;
}


export function deleteListElement(){
    document.querySelector("#main_filter-bar-appliances .filter-appliances-list").remove();
    document.querySelector("#main_filter-bar-ingredients .filter-ingredients-list").remove();
    document.querySelector("#main_filter-bar-ustensils .filter-ustensils-list").remove();
}

function deleteTagAndUpdateList(tag, name){

    let crossToDeleteTag = tag.querySelector('.tag-delete');

    /** listener for delete the tag and put the element back in the list */
    crossToDeleteTag.addEventListener('click', () => {
        const item = crossToDeleteTag.parentElement.querySelector('p').innerText.toLowerCase().trim();
        let  filteredRecipes = [];
  
        /*****  update selection to the tag *****/
        if(name === 'appliances'){
            /** find index corresponding of item (innerText to the tag) */
            const index = selectApp.findIndex(i => i === item);
            /** delete of the array selectApp the item corresponding  */
            selectApp.splice(index, 1);
        }

        if(name === 'ingredients'){
            const index = selectIng.findIndex(i => i === item);
            selectIng.splice(index, 1);
        }

        if(name === 'ustensils'){
            const index = selectUst.findIndex(i => i === item);
            selectUst.splice(index, 1);
        }

        /** To delete tag */
        tag.style.display = 'none';

        /** To filter recipes */
        filteredRecipes = getFilteredRecipes(recipes, 'ingredients');
        filteredRecipes = getFilteredRecipes(filteredRecipes, 'appliances');
        filteredRecipes = getFilteredRecipes(filteredRecipes, 'ustensils');
        
        /** put back selected element from list after delete tag corresponding */
        if(name === 'appliances'){
            putBackSelectedElFromList(filteredRecipes, selectApp, name);
        }

        if(name === 'ingredients'){
            putBackSelectedElFromList(filteredRecipes, selectIng, name);
        }

        if(name === 'ustensils'){
            putBackSelectedElFromList(filteredRecipes, selectUst, name);
        }
        
        updateCounterRecipes();

    });  

}

export function displayUpdatedRecipes(name){
    displayCardRecipes(recipes);
    updateRecipesbyFilter(name, recipes);
}


export function filterListElements(sortBy){
    filterAppliances(sortBy);
    filterIngredients(sortBy);
    filterUstensils(sortBy);
}


export function getFilteredRecipes(recipes, name){
    /** list to return */
    const list = [];
    recipes.forEach(recipe => {
  
        // To filter by Appliances
        if(name === 'appliances'){
            byAppliance(recipe, selectApp, list);
        }

        if(name === 'ingredients'){
            byIngredients(recipe, selectIng, list);
        }

        if(name === 'ustensils'){
            byUstensils(recipe, selectUst, list);
        }
    });

    return list;    
}


function putBackSelectedElFromList(filteredRecipes, select, name){

    deleteListElement();

    filterListElements(filteredRecipes);
    /** redisplay recipes  */
    displayCardRecipes(filteredRecipes);

    const listElementsToFilter = document.querySelectorAll('.' + name);    
    /** removes the displayed tag from the list of elements */
    listElementsToFilter.forEach(el => {
        select.forEach(selection => {
            /** if the tag is in the updated list, we remove it */
            if(el.innerText.toLowerCase().trim() === selection){
                el.style.display = 'none';
            }
        });
    });
}

export function recipesSelectedBysearchBar(recipes){
    const input = document.querySelector(`#search-q`);
    input.addEventListener('input', (e) => {
        let research = e.target.value.toLowerCase().trim();

        if(research.trim().length < 3 ){
            console.log('Votre recherche doit contenir au moins 3 caractères');
            return;

        } else {
            let recipesFiltered = searchA(recipes, research);

            deleteListElement();
            /** selected recipes by multiple filters */
            recipesFiltered = getFilteredRecipes(recipesFiltered, 'ingredients');
            recipesFiltered = getFilteredRecipes(recipesFiltered, 'appliances');
            recipesFiltered = getFilteredRecipes(recipesFiltered, 'ustensils');

            filterListElements(recipesFiltered);
            
            removeElSearchBarInFilterList('appliances', research);
            removeElSearchBarInFilterList('ingredients', research);
            removeElSearchBarInFilterList('ustensils', research);

            displayCardRecipes(recipesFiltered); 

            updateCounterRecipes();
        }           
    
    }); 
}

function removeElSearchBarInFilterList(name, research){
    const listElementsToFilter = document.querySelectorAll('.' + name);
    listElementsToFilter.forEach(el => {
        console.log(el.innerText);
        if(el.innerText.toLowerCase() === research)
            el.style.display = 'none';
    });
}


function removeSelectedElFromList(name){

    const tag = document.querySelectorAll(`.tag-${name}-p`);
    const listElementsToFilter = document.querySelectorAll('.' + name);

    /** removes the displayed tag from the list of elements */
    listElementsToFilter.forEach(el => {
        tag.forEach(selection => {
            if(el.innerText.toLowerCase().trim() === selection.innerText.toLowerCase().trim()){
                el.style.display = 'none';
            }
        });
    });

    document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
}


function searchA(recipes, research){
    let recipesFiltered = [];

    recipes.forEach(recipe => {
        let found = false; 
        getAppliancesByRecipe(recipe).forEach(appliance => {
            if(appliance.includes(research)){
                if (found){
                    return;
                }
                recipesFiltered.push(recipe); 
                found = true;
                return;
            }
        });

        getIngredientsByRecipes(recipe).forEach(ingredient => {         
            if(ingredient.toLowerCase().includes(research)){
                if (found){
                    return;
                }
                recipesFiltered.push(recipe);    
                found = true;
                return;
            }
        });

        getUstensilsByRecipe(recipe).forEach(ustensil => {
            if(ustensil.includes(research)){
                if (found){
                    return;
                }
                recipesFiltered.push(recipe); 
                found = true;
                return;
            }
        });

        if(recipe.name.toLowerCase().includes(research)){
            if (found){
                return;
            }
            recipesFiltered.push(recipe);  
            found = true;  
            return;
        }

        if(recipe.description.toLowerCase().includes(research)){
            if (found){
                return;
            }
            recipesFiltered.push(recipe);   
            found = true; 
            return;
        }

        if(recipesFiltered.length === 0){
            console.log("Votre recherche ne correspond à aucun résultat");
        }
    });

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


function updateRecipesbyFilter(name, recipes){
    let allElSelected = [];
    const mainFilter = document.querySelector(`#main_filter-${name}-wrapper`);
    const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');
    let selection;
    const listElements = document.querySelectorAll('.' + name);


    for(let elSelected of listElements){
        elSelected.addEventListener('click', () => {

            /** save elements selected */
            if(name === 'ingredients'){
                selection =  elSelected.innerText.toLowerCase().trim(); 
                selectIng.push(selection);
            }
            
            if(name === 'appliances'){
                selection =  elSelected.innerText.toLowerCase().trim(); 
                selectApp.push(selection);
            }

            if(name === 'ustensils'){
                selection =  elSelected.innerText.toLowerCase().trim(); 
                selectUst.push(selection);
            }

            selectApp.forEach(select => {
                allElSelected.push(select)
            })

            selectIng.forEach(select => {
                allElSelected.push(select)
            });

            selectUst.forEach(select => {
                allElSelected.push(select)
            })

            /** Create tag  */
            const tag = createTag(name, elSelected);
            mainTagWrapper.appendChild(tag);

            /** delete list elements of filters for recreate it with updated recipes */
            deleteListElement();
            /** selected recipes by multiple filters */
            filteredRecipes = getFilteredRecipes(recipes, 'ingredients');
            filteredRecipes = getFilteredRecipes(filteredRecipes, 'appliances');
            filteredRecipes = getFilteredRecipes(filteredRecipes, 'ustensils');
  
            filterListElements(filteredRecipes);

            displayCardRecipes(filteredRecipes); 
            /** remove elements in list of filter */
            removeSelectedElFromList(name, allElSelected);    
            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, name);

            updateCounterRecipes();
        });       
    }
}

 