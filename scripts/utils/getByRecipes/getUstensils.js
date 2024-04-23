export function getUstensilsByRecipe(recipe){
    /** get array of ingredients per recipe */
    const arrayUstensils = recipe.ustensils;
    let ustensilsByRecipes = [];

    /** create an array of ingredients per recipe  */
    arrayUstensils.forEach(ustensils => {         
        ustensilsByRecipes.push(ustensils.toLowerCase().trim());
    });

    return ustensilsByRecipes;
}
