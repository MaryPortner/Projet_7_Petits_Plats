export class Recipe {

    constructor({name, ingredients, description,  appliance, ustensils}){
        this.name = name;
        this.ingredients = ingredients;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    }

    /** get array of elements per recipe */
    getAppliances(){
        let applianceByRecipes = (this.appliance.toLowerCase().trim());   

        return applianceByRecipes; 
    }


    getIngredients(){
        let ingredientsByRecipes = [];
        this.ingredients.forEach(ingredients => {         
            ingredientsByRecipes.push(ingredients.ingredient.toLowerCase().trim());
        });

        return ingredientsByRecipes;            
    }


    getUstensils(){
        let ustensilsByRecipes = [];
        this.ustensils.forEach(ustensils => {         
            ustensilsByRecipes.push(ustensils.toLowerCase().trim());
        });

        return ustensilsByRecipes;
    }

    
    getName(){
        let name = this.name;
        return name;
    }


    getDescription(){
        let description = this.description;
        return description;
    }

}