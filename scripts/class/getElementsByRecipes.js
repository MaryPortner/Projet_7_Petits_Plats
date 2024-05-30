export class GetElementsByRecipe {
    constructor(recipes){
        this.recipes = recipes;
    }

    
    getAppliances(){
       
        let recipes = this.recipes;
        // console.log('getAppliances', this.recipes);
        recipes.forEach(recipe => {
        /** get appliance per recipe  */
        let applianceByRecipes = [];
        applianceByRecipes.push(recipe.appliance.toLowerCase().trim());

        // console.log(applianceByRecipes);
        return applianceByRecipes;
            
        });
    }

    getIngredients(){
        let recipes = this.recipes;
        recipes.forEach(recipe => {
            /** get array of ingredients per recipe */
            const arrayIngredients = recipe.ingredients;
            let ingredientsByRecipes = [];

            /** create an array of ingredients per recipe  */
            arrayIngredients.forEach(ingredients => {         
                ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
            });
            // console.log(ingredientsByRecipes);
            return ingredientsByRecipes;
                
        });
    }

    getUstensils(){
        let recipes = this.recipes;
        recipes.forEach(recipe => {
            /** get array of ingredients per recipe */
            const arrayUstensils = recipe.ustensils;
            let ustensilsByRecipes = [];

            /** create an array of ingredients per recipe  */
            arrayUstensils.forEach(ustensils => {         
                ustensilsByRecipes.push(ustensils.toLowerCase().trim());
            });
            // console.log(ustensilsByRecipes);
            return ustensilsByRecipes;

        });

    }

}