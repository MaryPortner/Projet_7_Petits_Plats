export class CardRecipe {
/** 
 * 
 * @param { HTMLImageElement } image
 * @param { number } time
 * @param { string } name
 * @param { string } ingredient
 * @param { number } quantity
 * @param { string } unit
 * @param { string } description
 * 
 */

constructor (image, time, name, ingredient, quantity, unit,  description){
    this.image = image;
    this.time = time;
    this.name = name;
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.unit = unit;
    this.description = description;
}


buildCard(){
    const recipesSection = document.querySelector('#main_allRecipes');

        const recipeCard = document.createElement('article');
        recipeCard.classList.add('allRecipes_article');

            const imgSection = document.createElement('div');
            imgSection.classList.add('allRecipes_imgSection')

                const imgRecipes = document.createElement('img');
                imgRecipes.classList.add('allRecipes_imgSection-img');
                imgRecipes.setAttribute("src", `${this.image}`);
                imgRecipes.setAttribute("alt", `image de ${this.name}`)

                const duration = document.createElement('p');
                duration.classList.add('allRecipes_imgSection-duration');
                duration.innerText =  `${this.time} min`;
                // .innerText =  `${tagline}`;

            const dataRecipes = document.createElement('div');
            dataRecipes.classList.add('allRecipes_dataRecipes');

                const nameRecipe = document.createElement('h1');
                nameRecipe.classList.add('.allRecipes_dataRecipes-nameRecipe');

                const recipe = document.createElement('div');
                recipe.classList.add('dataRecipes_recipe');

                    const recipeTitle = document.createElement('h2');
                    recipeTitle.classList.add('dataRecipes_recipe-title');

                    const recipeTxt = document.createElement('p');
                    recipeTxt.classList.add('dataRecipes_recipe-txt');

                    const recipeIngredientsTitle = document.createElement('h2');
                    recipeIngredientsTitle.classList.add('dataRecipes_recipe-title');

                    const ingredientsSection = document.createElement('div');
                    ingredientsSection.classList.add('recipe-ingredients-section');

                        // this.displayIngredients(datas);

    
    
    recipe.appendChild(recipeTitle);
    recipe.appendChild(recipeTxt);
    recipe.appendChild(recipeIngredientsTitle);
    recipe.appendChild(ingredientsSection);

    dataRecipes.appendChild(nameRecipe);
    dataRecipes.appendChild(recipe);

    imgSection.appendChild(imgRecipes);
    imgSection.appendChild(duration);

    recipeCard.appendChild(imgSection);
    recipeCard.appendChild(dataRecipes);

    recipesSection.appendChild(recipeCard);
    
    return recipesSection;
    
}

// displayIngredients(ingredient){

//     // Boucle pour récupérer les ingrédients.                        
//     // datas.forEach((ingredients) => {
        
//         const ingredientSection = document.querySelector('.recipe-ingredients-section');

//             const ingredientTitle = document.createElement('h3');
//             ingredientTitle.classList.add('recipe-ingredient-section-title');

//             const ingredientQteUnit = document.createElement('div');
//             ingredientQteUnit.classList.add('ingredient-section-qteUnit');

//                 const quantity = document.createElement('p');
//                 quantity.classList.add('ingredient-section-qte');

//                 const unit = document.createElement('p');
//                 unit.classList.add('ingredient-section-unit');

//                 ingredientQteUnit.appendChild(quantity);
//                 ingredientQteUnit.appendChild(unit);

//                 ingredientSection.appendChild(ingredient);
//                 ingredientSection.appendChild(ingredientQteUnit);

//                 return ingredientSection;
                
//     // });
// }


}
