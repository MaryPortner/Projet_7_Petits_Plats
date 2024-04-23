export function getIngredientsByRecipes(recipe){
    /** get array of ingredients per recipe */
    const arrayIngredients = recipe.ingredients;
    let ingredientsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayIngredients.forEach(ingredients => {         
        ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
    });

    return ingredientsByRecipes;
}