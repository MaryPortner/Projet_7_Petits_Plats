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
        let list = (this.appliance.toLowerCase().trim());   

        return list; 
    }


    getIngredients(){
        let list = [];
        this.ingredients.forEach(ingredients => {         
            list.push(ingredients.ingredient.toLowerCase().trim());
        });

        return list;            
    }


    getUstensils(){
        let list = [];
        this.ustensils.forEach(ustensils => {         
            list.push(ustensils.toLowerCase().trim());
        });

        return list;
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