export class FilterByUtensils{

    constructor(recipes){
        let arrayAllUtensils = [];
        let allUtensil = []; 
        for (let i = 0 ; i < recipes.length ; i++){
            let recipe = recipes[i];
            arrayAllUtensils = recipe.ustensils;

            for (let j = 0 ; j < arrayAllUtensils.length ; j++){
                allUtensil = arrayAllUtensils[j];
                console.log(allUtensil);

            }
        }
}


//     displayListOfUstensils(recipes){


}





