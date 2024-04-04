import { CardRecipe } from "../class/cardRecipe.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { recipes } from "../../data/recipes.js";



export function createTagAndUpdateRecipes(name){

    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    const listElements = document.querySelectorAll('.' + name);
    const mainTag = document.createElement('div');
    mainTag.classList.add('main_Tag-wrapper');

    displayRecipes(recipes);

    updateRecipesByIngredients(listElements, name, recipes, mainTag, input, dropdown);
    
    document.querySelector(`#main_filter-${name}-wrapper`).appendChild(mainTag);
}



function updateRecipesByIngredients(listElements, name, recipes, mainTag, input, dropdown){

    let ingSelected;
    let  selectedRecipes = [];
    let listElementsSelected = [];

    for(let elSelectedInList of listElements){
        elSelectedInList.addEventListener('click', () => {
            
            ingSelected =  elSelectedInList.innerText.toLowerCase().trim(); 
            /** Create tag  */
            const tag = createTag(name, elSelectedInList);
            mainTag.appendChild(tag);

            deleteListElement();
 
            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, elSelectedInList);

            selectedRecipes = getSelectedRecipes(recipes, ingSelected, selectedRecipes);

            removeFromList(input, elSelectedInList, dropdown);

            filterListElements(selectedRecipes, ingSelected);

            displayRecipes(selectedRecipes);

            updateCounterRecipes();

            listElementsSelected = document.querySelectorAll('.' + name);
        });       
    }
}


function createTag(name, elSelectedInList){
    const tag = document.createElement('div');
    tag.classList.add(`tag-${name}`);

    const textEl = document.createElement('p');
    textEl.classList.add(`tag-${name}-p`);
    textEl.innerText =  `${elSelectedInList.innerText}`; 

    tag.appendChild(textEl);

    return tag;
}


function deleteListElement(){
    document.getElementById("main_filter-bar-appliances").removeChild(document.getElementById("main_filter-bar-appliances").children[1]);
    document.getElementById("main_filter-bar-ingredients").removeChild(document.getElementById("main_filter-bar-ingredients").children[1]);
    document.getElementById("main_filter-bar-ustensils").removeChild(document.getElementById("main_filter-bar-ustensils").children[1]);
}


function deleteTagAndUpdateList(tag, elSelectedInList){
    /** Create cross to delete tag */
    const crossToDeleteTag = document.createElement('span');
    crossToDeleteTag.classList.add('tag-delete');
    tag.appendChild(crossToDeleteTag);
      /** listener for delete the tag and put the element back in the list */
    crossToDeleteTag.addEventListener('click', () => {
        tag.style.display = 'none';
        elSelectedInList.style.display = 'block';
    });  
}


function displayRecipes(recipesSortByElements){
    document.querySelector('#main_allRecipes').innerHTML = '';

    recipesSortByElements.forEach(recipe => {
        let recipeUpdate = new CardRecipe(recipe);
        recipeUpdate.buildCard();
    });
}


function filterListElements(sortBy, ingSelected){
    filterAppliances(sortBy, ingSelected);
    filterIngredients(sortBy, ingSelected);
    filterUstensils(sortBy, ingSelected);
}


function getIngredientsByRecipesSelected(el){
    /** get array of ingredients for each recipe */
    const arrayIngredients = el.ingredients;
    let ingredientsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayIngredients.forEach(ingredients => {         
        ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());

    });

    return ingredientsByRecipes;
}


// function getListElementsUpdated(listElementsSelected, elSelectedInList){
//     listElementsSelected.forEach(el =>{
//         if (el === elSelectedInList){
//             el.style.display ='none';
//         }

//     })

  
//     return listElementsSelected;
// }


function getSelectedRecipes(recipes, ingSelected, selectedRecipes){
    recipes.forEach(el => {
        let ingredientsByRecipes = getIngredientsByRecipesSelected(el);
        // console.log(ingredientsByRecipes);

        /** displays recipes that contain the selected tag */
        if((ingredientsByRecipes.indexOf(ingSelected) > -1)){
            /** Create a new recipe list when filtering by ingredients*/
            selectedRecipes.push(el);
        } 
    });

    return selectedRecipes; 
}



function removeFromList(input, elSelectedInList, dropdown){
    // elSelectedInList.classList.remove('hidden');
    input.value = '';
    /** removes the displayed tag from the list of elements */
    elSelectedInList.style.display = 'none'; 
    dropdown.classList.toggle('displayBlock');
}

/** update number recipes */
function updateCounterRecipes(){
    const recipesContainer = document.querySelector('#main_allRecipes');
    /** get number of recipes displayed */
    let numberRecipes = recipesContainer.childElementCount; 
    /** update display number of recipes */
    document.querySelector('.numberRecipes').innerText = numberRecipes;
}





