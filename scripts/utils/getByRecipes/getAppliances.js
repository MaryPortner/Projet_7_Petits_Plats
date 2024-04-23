export function getAppliancesByRecipe(recipe){
    /** get appliance per recipe  */
    let applianceByRecipes = [];
    applianceByRecipes.push(recipe.appliance.toLowerCase().trim());

    return applianceByRecipes;
}