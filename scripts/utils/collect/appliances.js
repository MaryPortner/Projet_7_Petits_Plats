/** collect all datas of recipes  */
export function collectAppliances(recipes){
    /** The Set object lets you store unique values of any type */
    const list = new Set();
    let arrayList;
    /** Loop for get all elements in recipes array*/
    for(let i = 0 ; i < recipes.length ; i++){
        /** The add() method of Set () inserts a new element with a specified value in to this set, if there isn't an element with the same value already in this set  <=> push */
            list.add(recipes[i].appliance);
        /** sort alphabetically */
        arrayList = [...list].sort();
    }
    return arrayList;
}






// function getFilteredRecipes(recipes, name){
//     /** list to return */
//     const list = [];
//     recipes.forEach(recipe => {
//         // let countApp = 0;
//         let countIng = 0;
//         let countUst = 0;

//         let ingMatch = true;
//         let ustMatch = true;
//         let appMatch = true;
       

//         // // To filter by Appliances
//         if(name === 'appliances'){
        

//             let applianceByRecipes = getAppliances(recipe);
//             console.log(applianceByRecipes);

        

//             selectApp.forEach(app => {
//                 /** displays recipes that contain the selected tag */
//                 // if(applianceByRecipes.indexOf(app) > -1){
//                 //     countApp ++;
//                 // }


//                 if(app != recipe.appliance){
//                     console.log(app);
//                     console.log(recipe.appliance);
//                     appMatch = false;
//                 }
//             });
    
//             // if( countApp == selectApp.length){
//             //     /** Create a new recipe list when filtering by appliance selected */
//             //     // list.push(recipe);
//             //     appMatch = true;
//             // }
//         }

//         if(name === 'ingredients'){
//             let ingredientsByRecipes = getIngredients(recipe);
//             selectIng.forEach(ing => {
//                 /** displays recipes that contain the selected tag */
//                 if(ingredientsByRecipes.indexOf(ing) > -1){
//                     countIng ++;
//                 }
//             });
    
//             if( countIng != selectIng.length){
//                 /** Create a new recipe list when filtering by ingredients selected */
//                 // list.push(recipe);
//                 ingMatch = false;
//             }
//         }

//         if(name === 'ustensils'){
//             let ustensilsByRecipes = getUstensils(recipe);
//             selectUst.forEach(ust => {
//                 /** displays recipes that contain the selected tag */
//                 if(ustensilsByRecipes.indexOf(ust) > -1){
//                     countUst ++;
//                 }
//             });
        
//             if( countUst != selectUst.length){
//                     /** Create a new recipe list when filtering by appliance selected */
//                 // list.push(recipe);
//                 ingMatch = false;
//             }
//         }  

//         if (appMatch && ingMatch && ustMatch){
//             list.push(recipe);
//         }
//     });

//     return list;     
// }