import { CardRecipe } from "../class/cardRecipe.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { recipes } from "../../data/recipes.js";


/** Selection de plusieurs ingredients - selectSeveralIng */
const selectApp = [];
const selectIng = [];
const selectUst = [];

export function displayUpdatedRecipes(name){
    displayRecipes(recipes);
    updateRecipesbyFilter(name, recipes);
}


function createTag(name, elSelected){
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


function deleteListElement(){
    document.getElementById("main_filter-bar-appliances").removeChild(document.getElementById("main_filter-bar-appliances").children[1]);
    document.getElementById("main_filter-bar-ingredients").removeChild(document.getElementById("main_filter-bar-ingredients").children[1]);
    document.getElementById("main_filter-bar-ustensils").removeChild(document.getElementById("main_filter-bar-ustensils").children[1]);
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
        filteredRecipes = getFilteredRecipes(recipes, name);
        /** put back selected element from list after delete tag corresponding */
        
        if(name === 'ingredients'){
            putBackSelectedElFromList(filteredRecipes, selectIng, name);
        }

        if(name === 'ustensils'){
            putBackSelectedElFromList(filteredRecipes, selectUst, name);
        }
        
        updateCounterRecipes();

    });  

}


function displayRecipes(recipesSortByElements){
    document.querySelector('#main_allRecipes').innerHTML = '';

    recipesSortByElements.forEach(recipe => {
        let recipeUpdate = new CardRecipe(recipe);
        recipeUpdate.buildCard();
    });
}


function filterListElements(sortBy){
    filterAppliances(sortBy);
    filterIngredients(sortBy);
    filterUstensils(sortBy);
}


function getAppliances(recipe){
    /** get appliance per recipe  */
    let applianceByRecipes = [];
    applianceByRecipes.push(recipe.appliance.toLowerCase().trim());

    return applianceByRecipes;
}


function getIngredients(recipe){
    /** get array of ingredients per recipe */
    const arrayIngredients = recipe.ingredients;
    let ingredientsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayIngredients.forEach(ingredients => {         
        ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
    });

    return ingredientsByRecipes;
}


function getUstensils(recipe){
    /** get array of ingredients per recipe */
    const arrayUstensils = recipe.ustensils;
    let ustensilsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayUstensils.forEach(ustensils => {         
        ustensilsByRecipes.push(ustensils.toLowerCase().trim());
    });

    return ustensilsByRecipes;
}


function getFilteredRecipes(recipes, name){
    // console.log(selectApp);
    // console.log(selectUst);
    /** list to return */
    const list = [];
    recipes.forEach(recipe => {
        let count = 0; 

        // To filter by Appliances
        if(name === 'appliances'){
            let applianceByRecipes = getAppliances(recipe);
            selectApp.forEach(app => {
                /** displays recipes that contain the selected tag */
                if(applianceByRecipes.indexOf(app) > -1){
                    count ++;
                }
            });
    
            if( count == selectApp.length){
                    /** Create a new recipe list when filtering by appliance selected */
                list.push(recipe);
            }
        }

        if(name === 'ingredients'){
            let ingredientsByRecipes = getIngredients(recipe);
            selectIng.forEach(ing => {
                /** displays recipes that contain the selected tag */
                if(ingredientsByRecipes.indexOf(ing) > -1){
                    count ++;
                }
            });
    
            if( count == selectIng.length){
                /** Create a new recipe list when filtering by ingredients selected */
                list.push(recipe);
            }
        }

        if(name === 'ustensils'){
            let applianceByRecipes = getUstensils(recipe);
            selectUst.forEach(ust => {
                    /** displays recipes that contain the selected tag */
                    if(applianceByRecipes.indexOf(ust) > -1){
                        count ++;
                    }
                });
        
                if( count == selectUst.length){
                     /** Create a new recipe list when filtering by appliance selected */
                    list.push(recipe);
                }
            }
    });
    
    return list;     
  
}


function removeSelectedElFromList(selectEl, name){

    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const listElementsToFilter = document.querySelectorAll('.' + name);

   /** removes the displayed tag from the list of elements */
    listElementsToFilter.forEach(el => {
        // console.log(el);
        selectEl.forEach(selection => {
            // console.log(selection);
            if(el.innerText.toLowerCase().trim() === selection){
                el.style.display = 'none';
            }
        });
    });

    dropdown.classList.toggle('displayBlock');
}


function putBackSelectedElFromList(filteredRecipes, select, name){

    deleteListElement();

    filterListElements(filteredRecipes);
    /** redisplay recipes  */
    displayRecipes(filteredRecipes);

    const listElementsToFilter = document.querySelectorAll('.' + name);
    console.log(listElementsToFilter);      
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



/** update number recipes */
function updateCounterRecipes(){
    const recipesContainer = document.querySelector('#main_allRecipes');
    /** get number of recipes displayed */
    let numberRecipes = recipesContainer.childElementCount; 
    /** update display number of recipes */
    document.querySelector('.numberRecipes').innerText = numberRecipes;
}


function updateRecipesbyFilter(name, recipes){

    const mainFilter = document.querySelector(`#main_filter-${name}-wrapper`);
    const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');
    let selection;
    const listElements = document.querySelectorAll('.' + name);
    let  filteredRecipes = [];

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


            /** Create tag  */
            const tag = createTag(name, elSelected);
            mainTagWrapper.appendChild(tag);

            /** delete list elements of filters for recreate it with updated recipes */
            deleteListElement();
        
            filteredRecipes = getFilteredRecipes(recipes, name);
            console.log(filteredRecipes);

            filterListElements(filteredRecipes);

            displayRecipes(filteredRecipes);

            /** remove elements in list of filter */
            if(name === 'appliances'){
                removeSelectedElFromList(selectApp, name);
            }

            if(name === 'ingredients'){
                removeSelectedElFromList(selectIng, name);
            }
            
            if(name === 'ustensils'){
                removeSelectedElFromList(selectUst, name);
            }
    
            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, name);

            updateCounterRecipes();

        });       
    }

    // getAppliances(recipes);
}