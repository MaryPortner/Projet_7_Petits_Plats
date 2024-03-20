export function displayNumberRecipes(recipes){

    const recipesContainer = document.querySelector('#main_allRecipes');
    let numberRecipes = (recipesContainer.childNodes).length;
    console.log(numberRecipes);
    const numberTotalRecipes = document.querySelector('.numberTotalRecipes');

    const numberRecipesContainer = document.createElement('p');
    numberRecipesContainer.classList.add("numberRecipes");
    if(numberRecipes > 0){
        numberRecipesContainer.innerText = `${numberRecipes}`;
    } else{
        numberRecipesContainer.innerText = `${recipes.length}`;
    }

    const recipesTxt = document.createElement("p");
    recipesTxt.classList.add("recipes");
    recipesTxt.innerText = `recettes`;

    numberTotalRecipes.appendChild(numberRecipesContainer);
    numberTotalRecipes.appendChild(recipesTxt);


}



