import { CardRecipe } from "../class/cardRecipe.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { recipes } from "../../data/recipes.js";


/** Selection de plusieurs ingredients - selectSeveralIng */
const selectionIng = [];
const selectApp = [];
const selectUte = [];

export function displayUpdatedRecipes(name){
    displayRecipes(recipes);
    updateRecipesbyFilter(name, recipes);
}


function createTag(name, elSelectedInList){
    const tag = document.createElement('div');
    tag.classList.add(`tag-${name}`);

    const textEl = document.createElement('p');
    textEl.classList.add(`tag-${name}-p`);
    textEl.innerText =  `${elSelectedInList.innerText}`; 

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
        /** find index corresponding of item (innerText to the tag) */
        const index = selectionIng.findIndex(i => i === item);
         /** delete of the array selectionIng the item corresponding  */
        selectionIng.splice(index, 1);

        /** To delete tag */
        tag.style.display = 'none';

        /** To filter recipes */
        filteredRecipes = getfilteredRecipes(recipes, name);
 
        putBackSelectedElFromList(filteredRecipes, selectionIng, name)

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


function getIngredients(recipe){
    /** get array of ingredients for each recipe */
    const arrayIngredients = recipe.ingredients;
    let ingredientsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayIngredients.forEach(ingredients => {         
        ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
    });

    return ingredientsByRecipes;
}

// function getAppliances(recipe){
//     console.log(recipe.appliance);
//     let applianceByRecipes = [];
//     applianceByRecipes.push(recipe.appliance.toLowerCase().trim());

//     return applianceByRecipes;



// }




function getfilteredRecipes(recipes, name){
    /** list to return */
    const list = [];
    recipes.forEach(recipe => {
        let count = 0; 

        if(name === 'ingredients'){
            let ingredientsByRecipes = getIngredients(recipe);
            selectionIng.forEach(ing => {
                /** displays recipes that contain the selected tag */
                if(ingredientsByRecipes.indexOf(ing) > -1){
                    count ++;
                }
            })
    
            if( count == selectionIng.length){
                /** Create a new recipe list when filtering by ingredients selected */
                list.push(recipe);
            }
        }



    });
    
    return list; 
      
       




     



    // To filter by Appliances

        // To filter by ingredients
        // recipes.forEach(recipe => {
        //     let count = 0; 

        
        //     let applianceByRecipes = getAppliances(recipe);
     
    
        //     selectApp.forEach(app => {
        //         /** displays recipes that contain the selected tag */
        //         if(applianceByRecipes.indexOf(app) > -1){
        //             count ++;
        //         }
        //     })
    
        //     if( count == selectApp.length){
        //          /** Create a new recipe list when filtering by ingredients selected */
        //         list.push(recipe);
        //     }
        // });

    
  
    }


function removeSelectedElFromList(selectionIng, name){

    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const listElementsToFilter = document.querySelectorAll('.' + name);

   /** removes the displayed tag from the list of elements */
    listElementsToFilter.forEach(el => {
        // console.log(el);
        selectionIng.forEach(selection => {
            // console.log(selection);
            if(el.innerText.toLowerCase().trim() === selection){
                el.style.display = 'none';
            }
        });
    });
    dropdown.classList.toggle('displayBlock');
}


function putBackSelectedElFromList(filteredRecipes, selectionIng, name){

    deleteListElement();

    filterListElements(filteredRecipes);
    /** redisplay recipes  */
    displayRecipes(filteredRecipes);

    const listElementsToFilter = document.querySelectorAll('.' + name);      
    /** removes the displayed tag from the list of elements */
    listElementsToFilter.forEach(el => {
        // console.log(el);
        selectionIng.forEach(selection => {
            // console.log(selection);
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
    let ingSelected;
    const listElements = document.querySelectorAll('.' + name);
    let  filteredRecipes = [];

    for(let elSelectedInList of listElements){
        elSelectedInList.addEventListener('click', () => {
            /** save ingredient selected */
            ingSelected =  elSelectedInList.innerText.toLowerCase().trim(); 
            /** save all selected ingredients*/
            selectionIng.push(ingSelected);
            /** Create tag  */
            const tag = createTag(name, elSelectedInList);
            mainTagWrapper.appendChild(tag);

            /** delete list elements of filters for recreate it with updated recipes */
            deleteListElement();
        
            filteredRecipes = getfilteredRecipes(recipes, name);

            filterListElements(filteredRecipes);

            displayRecipes(filteredRecipes);

            removeSelectedElFromList(selectionIng, name);
            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, name);

            updateCounterRecipes();
        });       
    }

    // getAppliances(recipes);
}