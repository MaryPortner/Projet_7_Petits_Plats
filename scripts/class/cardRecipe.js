export class CardRecipe {
    /** 
     * 
     * @param { HTMLImageElement } image
     * @param { string } name
     * @param { number } time
     * @param { string } description
     * @param { string } ingredient
     * @param { number } quantity
     * @param { string } unit
     * 
     */
    
    constructor ({image, name, time, description, ingredients}){
        this.image = image;
        this.name = name;
        this.time = time;
        this.description = description;
        this.ingredients = ingredients;
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
        nameRecipe.classList.add('allRecipes_dataRecipes-nameRecipe');
        nameRecipe.innerText =  `${this.name}`;

        const recipe = document.createElement('div');
        recipe.classList.add('dataRecipes_recipe');

        const recipeTitle = document.createElement('h2');
        recipeTitle.classList.add('dataRecipes_recipe-title');
        recipeTitle.innerText = `RECETTE`;

        const recipeTxt = document.createElement('p');
        recipeTxt.classList.add('dataRecipes_recipe-txt');
        recipeTxt.innerText = `${this.description}`;

        const recipeIngredientsTitle = document.createElement('h2');
        recipeIngredientsTitle.classList.add('dataRecipes_recipe-title');
        recipeIngredientsTitle.innerText = `INGREDIENTS`;

        
        recipe.appendChild(recipeTitle);
        recipe.appendChild(recipeTxt);
        recipe.appendChild(recipeIngredientsTitle);
        recipe.appendChild(this.displayIngredients());
    
        dataRecipes.appendChild(nameRecipe);
        dataRecipes.appendChild(recipe);
    
        imgSection.appendChild(imgRecipes);
        imgSection.appendChild(duration);
    
        recipeCard.appendChild(imgSection);
        recipeCard.appendChild(dataRecipes);
    
        recipesSection.appendChild(recipeCard);
    
        // this.displayIngredients();

        return recipesSection;
        
    }
    
    displayIngredients(){
        const ingredientsSection = document.createElement('div');
        ingredientsSection.classList.add('recipe-ingredients-main-section');

            this.ingredients.forEach(el => {
                const ingredient = document.createElement('div');
                ingredient.classList.add('recipe-ingredient-section');

                const ingredientTitle = document.createElement('h3');
                ingredientTitle.classList.add('recipe-ingredient-section-title');
                ingredientTitle.innerText = `${el.ingredient}`;
        
                const ingredientQteUnit = document.createElement('div');
                ingredientQteUnit.classList.add('ingredient-section-qteUnit');
        
                const quantity = document.createElement('p');
                quantity.classList.add('ingredient-section-qte');
                    if(el.quantity != undefined){
                        quantity.innerText = (`${el.quantity} `);
                    } else {
                        quantity.innerText = '';
                    }
                
                const unit = document.createElement('p');
                unit.classList.add('ingredient-section-unit');
                    if(el.unit != undefined){
                        unit.innerText = (`${el.unit}`);
                    } else {
                        unit.innerText = '';
                    }
                            
            
                ingredientQteUnit.appendChild(quantity);
                ingredientQteUnit.appendChild(unit);
            
                ingredient.appendChild(ingredientTitle);
                ingredient.appendChild(ingredientQteUnit);

                ingredientsSection.appendChild(ingredient);
            });
            
            return ingredientsSection;
    
        }
    }