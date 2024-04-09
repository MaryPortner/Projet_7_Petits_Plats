import { CardRecipe } from "../class/cardRecipe.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { recipes } from "../../data/recipes.js";


/** Selection de plusieurs ingredients - selectSeveralIng */
const selectionIng = [];

export function createTagAndUpdateRecipes(name){

    const mainFilter = document.querySelector(`#main_filter-${name}-wrapper`);
    console.log(mainFilter);
    const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');
    console.log(mainTagWrapper);

    displayRecipes(recipes);
    updateRecipesByIngredients(name, recipes, mainTagWrapper);
}



function updateRecipesByIngredients(name, recipes, mainTagWrapper){
    let ingSelected;
    const listElements = document.querySelectorAll('.' + name);
    let  selectedRecipes = [];

    for(let elSelectedInList of listElements){
        elSelectedInList.addEventListener('click', () => {
            /** save ingredient selected */
            ingSelected =  elSelectedInList.innerText.toLowerCase().trim(); 
            /** save all selected ingredients*/
            selectionIng.push(ingSelected);
            /** Create tag  */
            const tag = createTag(name, elSelectedInList);
            mainTagWrapper.appendChild(tag);

            deleteListElement();
       
            selectedRecipes = getSelectedRecipes(recipes);

            filterListElements(selectedRecipes, ingSelected);

            displayRecipes(selectedRecipes);

            updateCounterRecipes();

            removeSelectedElFromList(selectionIng, name);

            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, elSelectedInList);
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

    // let  selectedRecipes = [];
      /** listener for delete the tag and put the element back in the list */
    crossToDeleteTag.addEventListener('click', () => {
        const item = crossToDeleteTag.parentElement.querySelector('p').innerText.toLowerCase().trim();
        let  selectedRecipes = [];
        /*****  update selection to the tag *****/
        /** find index corresponding of item (innerText to the tag) */
        const index = selectionIng.findIndex(i => i === item);
         /** delete of the array selectionIng the item corresponding  */
        selectionIng.splice(index, 1);

        /** To delete tag */
        tag.style.display = 'none';
        // elSelectedInList.style.display = 'block';
        console.log(elSelectedInList);

        /** To filter recipes */
        selectedRecipes = getSelectedRecipes(recipes);
       /** redisplay recipes  */
        displayRecipes(selectedRecipes);

        // METTRE A JOUR LA LISTE DES INGREDIENTS
        //  putBackSelectedElFromList(input, elSelectedInList, dropdown)
        const elementsToFilter = document.querySelectorAll('.' + 'ingredients');
        console.log(elementsToFilter);

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


function getIngredientsByRecipesSelected(el){
    /** get array of ingredients for each recipe */
    const arrayIngredients = el.ingredients;
    let ingredientsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayIngredients.forEach(ingredients => {         
        ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());

    });

    // console.log(ingredientsByRecipes)

    return ingredientsByRecipes;
}




function getSelectedRecipes(recipes){
/** list to return */
    const list = [];
    recipes.forEach(recipe => {
        let count = 0; 
        let ingredientsByRecipes = getIngredientsByRecipesSelected(recipe);

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
    });

    return list; 
}


function removeSelectedElFromList( selectionIng, name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const elementsToFilter = document.querySelectorAll('.' + name);
    // input.value = ''; 
   /** removes the displayed tag from the list of elements */
    elementsToFilter.forEach(el => {
        selectionIng.forEach(selection => {
            if(el.innerText.toLowerCase().trim() === selection){
                el.style.display = 'none';
            }
        });
    });

    dropdown.classList.toggle('displayBlock');
}
// function putBackSelectedElFromList( elSelectedInList, name){
//     const dropdown = document.querySelector(`#main_filter-bar-${name}`);
//     const elementsToFilter = document.querySelectorAll('.' + name);
//     /** removes the displayed tag from the list of elements */
//     elSelectedInList.style.display = 'block'; 
//     dropdown.classList.toggle('displayBlock');
// }

/** update number recipes */
function updateCounterRecipes(){
    const recipesContainer = document.querySelector('#main_allRecipes');
    /** get number of recipes displayed */
    let numberRecipes = recipesContainer.childElementCount; 
    /** update display number of recipes */
    document.querySelector('.numberRecipes').innerText = numberRecipes;
}