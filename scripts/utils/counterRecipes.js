export function displayCounterRecipes(){

    const recipesContainer = document.querySelector('#main_allRecipes');
    let numberRecipes = (recipesContainer.childNodes).length;
    const numberTotalRecipes = document.querySelector('.numberTotalRecipes');

    const numberRecipesContainer = document.createElement('p');
    numberRecipesContainer.classList.add("numberRecipes");
    numberRecipesContainer.innerText = `${numberRecipes}`;
  

    const recipesTxt = document.createElement("p");
    recipesTxt.classList.add("recipes");
    recipesTxt.innerText = `recettes`;

    numberTotalRecipes.appendChild(numberRecipesContainer);
    numberTotalRecipes.appendChild(recipesTxt);


}



