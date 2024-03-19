
// // import { displayCardRecipes } from "./displayCardRecipes.js";
import { recipes } from "../../data/recipes.js";
import { CardRecipe } from "../class/cardRecipe.js";
export let tagIngredients;
export let tagAppliances;
export let tagUstensils;


export function displayTag(name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    const listElements = document.querySelectorAll('.' + name);

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

            // Au click sur l'élément de la liste je récupère l'élement cliqué
            if (name === 'ingredients'){
                tagIngredients =  elSelectedInList.innerText;
                // console.log( tagIngredients);
            }
            if (name === 'appliances'){
                tagAppliances =  elSelectedInList.innerText;
                // console.log( tagAppliances);
            }
            if (name === 'ustensils'){
                tagUstensils =  elSelectedInList.innerText;
                // console.log( tagUstensils);
            }

            updateRecipes(recipes, tagIngredients);
       
        });
    }
    document.querySelector(`#main_filter-${name}-wrapper`).appendChild(mainTag);
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

// Filtrer les recettes qui utilisent cet ustensile = > filtrer les recettes
// Mettre à jour le compteur de recettes
// mettre à jour la liste des ustensiles

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


function updateRecipes(recipes, tagIngredients){
   
    recipes.forEach(el => {
    // console.log(el)
        let arrayIngredients = el.ingredients;
        let ingredientsByRecipes = [];

        arrayIngredients.forEach(ingredients => {         
            ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
            console.log(ingredientsByRecipes);
            console.log(tagIngredients);
        });



     if((ingredientsByRecipes.indexOf(tagIngredients) > -1)){


            let recipeUpdate = new CardRecipe(el);
            recipeUpdate.buildCard();  
        }

    
        // console.log(arrayIngredients[0].ingredient);
        // arrayIngredients.forEach(ingredients => {
           

        // //    let  ingredient = (ingredients).normalize("NFD").replace(/[\u0300-\u036f]/g, '');
        // //     ingredient = ingredient.toLowerCase().trim();
        // //     console.log(ingredient);
            // if(ingredientsByRecipes.contains(tagIngredients)){
       
        })
        // console.log(tagIngredients.toLowerCase().trim());
 
        // let collectListIngredients = ((el.ingredients[0].ingredient).toLowerCase().trim());

        // collectListIngredients = collectListIngredients.normalize("NFD").replace(/[\u0300-\u036f]/g, '');

      
 
      

    // });
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
