export class GetElementsByRecipe {
    constructor(recipes){
        this.recipes = recipes;
    }

    
    getAppliances(){
        
        this.recipes.forEach(recipe => {
            let applianceByRecipes = [];
            /** get appliance per recipe  */
            applianceByRecipes.push(recipe.appliance.toLowerCase().trim());   
            
            return applianceByRecipes; 
        });
    }


    getIngredients(){
        this.recipes.forEach(recipe => {
            /** get array of ingredients per recipe */
            const arrayIngredients = recipe.ingredients;
            let ingredientsByRecipes = [];
            /** create an array of ingredients per recipe  */
            arrayIngredients.forEach(ingredients => {         
                ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
            });

            return ingredientsByRecipes;            
        });
    }


    getUstensils(){
        this.recipes.forEach(recipe => {
            /** get array of ingredients per recipe */
            const arrayUstensils = recipe.ustensils;
            let ustensilsByRecipes = [];
            /** create an array of ingredients per recipe  */
            arrayUstensils.forEach(ustensils => {         
                ustensilsByRecipes.push(ustensils.toLowerCase().trim());
            });

            return ustensilsByRecipes;
        });
    }

}