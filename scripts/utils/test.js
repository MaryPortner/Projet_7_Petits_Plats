import { CardRecipe } from "../class/cardRecipe.js";
import { collectAppliances } from "./collect/appliances.js";
import { createListOfElements } from "../utils/createListOfElements.js";
// import { displayCardRecipes } from "./displayCardRecipes.js";
import { recipes } from "../../data/recipes.js";



export function createTagAndUpdateRecipes(name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    let innerTextTag;
    const listElements = document.querySelectorAll('.' + name);
    const mainTag = document.createElement('div');
    mainTag.classList.add('main_Tag-wrapper');
    
    displayCardRecipes(recipes);
    
    for(let elSelectedInList of listElements){
    
        elSelectedInList.addEventListener('click', () => {
            
            /** Create tag  */
            const tag = createTag(name, elSelectedInList);
            mainTag.appendChild(tag);

            /** Delete elements from list */
            removeFromList(elSelectedInList, input, dropdown);
            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, elSelectedInList);
        
            // get clicked element
            getInnerTextTag(name, 'ingredients', elSelectedInList);
            getInnerTextTag(name, 'appliances', elSelectedInList);
            getInnerTextTag(name, 'ustensils', elSelectedInList);

            updateRecipes(recipes, innerTextTag);
        }); 
    }
    
    document.querySelector(`#main_filter-${name}-wrapper`).appendChild(mainTag);

    function getInnerTextTag(name, filter, elSelectedInList){
        if (name === filter){
            innerTextTag =  elSelectedInList.innerText.toLowerCase().trim();
        }
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


function removeFromList(elSelectedInList, input, dropdown){
    // elSelectedInList.classList.remove('hidden');
    input.value = '';
    /** removes the displayed tag from the list of elements */
    elSelectedInList.style.display = 'none'; 
    dropdown.classList.toggle('displayBlock');
}


function updateRecipes(recipes, innerTextTag){
    /** FILTER RECIPES BASED ON SELECTION*/
    let newArrayRecipesSortByIngredients = [];

    recipes.forEach(el => {
        /** get array of ingredients for each recipe */
        const arrayIngredients = el.ingredients;
        let ingredientsByRecipes = [];

        /** create an array of ingredients per recipe  */
        arrayIngredients.forEach(ingredients => {         
            ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
        });

        /** displays recipes that contain the selected tag */
        if((ingredientsByRecipes.indexOf(innerTextTag) > -1)){
            /** Create a new recipe list when filtering by ingredients*/
            newArrayRecipesSortByIngredients.push(el);
        } 
    });


    
    /** LIST OF FILTERED RECIPES */
        /** Get list of appliance after filter by ingredients*/
        const name = 'appliances';
        const list = collectAppliances(newArrayRecipesSortByIngredients);
        console.log(list);
        /** Inserting list of elements into the filter div */
        const elements = createListOfElements(list, name);
        console.log(elements);

        /**  to empty list of items */
        document.querySelector(`.main_filter-bar-${name}`).innerHTML = '';
        /**  recreate a list with the elements of the filtered recipes */
        document.querySelector(`.main_filter-bar-${name}`).appendChild(elements);
        
        createTagAndUpdateRecipes(name);
        /** update counter after filter */


        console.log(newArrayRecipesSortByIngredients);
        updateRecipes(newArrayRecipesSortByIngredients);
        updateCounterRecipes(newArrayRecipesSortByIngredients);
}

    
// function displayElFiltered(elements, name){
//     const filterApplianceList = document.querySelector('.filter-appliances-list');
//     filterApplianceList.style.display = 'none';
//     const element =  createListOfElements(elements, name);
//     console.log(element);
//     document.querySelector(`.main_filter-bar-${name}`).appendChild(element);
// }

/** redisplay list of appliances */
function updateCounterRecipes(recipes){
    document.querySelector('.numberRecipes').innerText = recipes.length;
}

// function displayCardRecipes(recipes) {
//     recipes.forEach(el => {
//         let recipe = new CardRecipe(el);
//         recipe.buildCard();  
//     });
// }





function updateRecipes(recipes){
    recipes.forEach(el => {
    
        let collectListIngredients = (el.ingredients[0].ingredient).toLowerCase().trim();
        // console.log(collectListIngredients);

    if(collectListIngredients.includes(tagIngredients)){
        let recipe = new CardRecipe(el);
        recipe.buildCard();  

    }
    })
    
}

// export function displayCardRecipes(recipes) {
//     recipes.forEach(el => {
//         console.log(el.ingredients);
//         console.log(tagIngredients.toLowerCase().trim());
 
//         let collectListIngredients = ((el.ingredients[0].ingredient).toLowerCase().trim());

//         collectListIngredients = collectListIngredients.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
//         if(collectListIngredients.includes(tagIngredients)){
//             let recipe = new CardRecipe(el);
//             recipe.buildCard();  
//         }
    
//     });
// }




