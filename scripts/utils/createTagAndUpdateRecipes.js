import { CardRecipe } from "../class/cardRecipe.js";
import { filterAppliances } from "../templates/filterAppliances.js";
import { filterIngredients } from "../templates/filterIngredients.js";
import { filterUstensils } from "../templates/filterUstensils.js";
import { displayListElFiltered } from "./displayListElFiltered.js";
import { recipes } from "../../data/recipes.js";



export function createTagAndUpdateRecipes(name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    let innerTextTag;
    const listElements = document.querySelectorAll('.' + name);
    let  RecipesSortByIngredients = [];
    // let RecipesSortByAppliances = [];
    // let RecipesSortByIngredients = [];
    // let RecipesSortByUstensils = [];


    const mainTag = document.createElement('div');
    mainTag.classList.add('main_Tag-wrapper');

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

            updateRecipes(recipes, innerTextTag, RecipesSortByIngredients);
            /** redisplay list of appliances on filter */
            // updateListOfElements((collectAppliances(RecipesSortByIngredients, 'appliances')), 'appliances');
            // updateListOfElements((collectIngredients(RecipesSortByIngredients, 'ingredients')), 'ingredients');
            // updateListOfElements((collectUstensils(RecipesSortByIngredients, 'ustensils')), 'ustensils');
            updateCounterRecipes();
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


function updateRecipes(recipes, innerTextTag, RecipesSortByIngredients){

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
            let recipeUpdate = new CardRecipe(el);
            recipeUpdate.buildCard(); 
            /** Create a new recipe list when filtering by ingredients*/
            RecipesSortByIngredients.push(el);
        } 
    });

    // document.getElementById(".main_filter-bar-appliances").removeChild(document.getElementById(".main_filter-bar-appliances").children[1]);
    // document.getElementById(".main_filter-bar-ingredients").removeChild(document.getElementById(".main_filter-bar-ingredients").children[1]);
    // document.getElementById(".main_filter-bar-ustensils").removeChild(document.getElementById(".main_filter-bar-ustensils").children[1]);

    document.getElementById("main_filter-bar-appliances").removeChild(document.querySelector(`.filter-appliances-list`));
    document.getElementById("main_filter-bar-ingredients").removeChild( document.querySelector(`.filter-ingredients-list`));
    document.getElementById("main_filter-bar-ustensils").removeChild(document.querySelector(`.filter-ustensils-list`));

    // document.querySelector(`.filter-appliances-list`).innerHTML = '';
    // document.querySelector(`.filter-ingredients-list`).innerHTML = '';
    // document.querySelector(`.filter-ustensils-list`).innerHTML = '';

    filterAppliances(RecipesSortByIngredients);
    filterIngredients(RecipesSortByIngredients);
    filterUstensils(RecipesSortByIngredients);
    
    console.log(RecipesSortByIngredients);
}
    

/** Redisplay list of appliances */
// function updateListOfElements(arrayList, name){
//     /** Get list of elements after filter*/
//     let list = arrayList;
//     let listOfElements = [];
//     list.forEach(listEl => {
//         listOfElements.push(listEl);        
//     });

//     const elementsToFilter = document.querySelectorAll('.' + name);
//     elementsToFilter.forEach(elFiltered =>{
//         elFiltered.style.display = 'none';
//             for( let i = 0 ; i < listOfElements.length ; i++){
//             /** lowercase and remove spaces from element */
//             if(elFiltered.textContent.toLowerCase().trim() === listOfElements[i].toLowerCase().trim()){
//                 /** displays the element corresponding to elements of the recipe displayed */
//                 elFiltered.style.display = "block";
//             }
//         }
//     });
//     displayListElFiltered(name);
// }
  

/** update number recipes */
function updateCounterRecipes(){
    const recipesContainer = document.querySelector('#main_allRecipes');
    /** get number of recipes displayed */
    let numberRecipes = recipesContainer.childElementCount; 
    /** update display number of recipes */
    document.querySelector('.numberRecipes').innerText = numberRecipes;
}





// function updateRecipes(recipes){
//     recipes.forEach(el => {
    
//         let collectListIngredients = (el.ingredients[0].ingredient).toLowerCase().trim();
//         // console.log(collectListIngredients);

//     if(collectListIngredients.includes(tagIngredients)){
//         let recipe = new CardRecipe(el);
//         recipe.buildCard();  

//     }
//     })
    
// }

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



    /** Inserting list of elements into the filter div */
    // const elements = createListOfElements(list, name);
    // console.log(elements);

    /**  recreate a list with the elements of the filtered recipes */
    // document.querySelector(`.main_filter-bar-${name}`).appendChild(elements);

  
        /** get list of appliance */
    //     for (let elFiltered of elementsToFilter)  {


    //         for( let i = 0 ; i < list.length ; i++){
               
    //         /** lowercase and remove spaces from element */
    //         if(elFiltered.textContent.toLowerCase().trim() === list[i].toLowerCase().trim()){
    //             /** displays the element corresponding to elements of the recipe displayed */
    //             elFiltered.style.display = "block";
    //         }else {
    //             elFiltered.style.display = "none";
    //         }
    //     }

        
    // }



    // function displayElFiltered(elements, name){
//     const filterApplianceList = document.querySelector('.filter-appliances-list');
//     filterApplianceList.style.display = 'none';
//     const element =  createListOfElements(elements, name);
//     console.log(element);
//     document.querySelector(`.main_filter-bar-${name}`).appendChild(element);
// }