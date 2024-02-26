class Recipes {
/** 
 * 
 * @param { number } id
 * @param { } 
 * @param { string } name
 * @param { number } serving
 * @param { string } ingredient
 * @param { number } quantity
 * @param { string } unit
 * @param { number } time
 * @param { string } description
 * @param { string } appliance
 * @param { string } ustensils
 * 
 *  */

    constructor (id, image, name, serving, ingredient, quantity, unit, time, description, appliance, ustensils){
        this.id = id;
        this.image = image;
        this.name = name;
        this.serving = serving;
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.unit = unit;
        this.time = time;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils;
    }


    buildCard(){
        
    }

}
