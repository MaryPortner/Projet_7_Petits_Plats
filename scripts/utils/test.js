//    // To filter by Appliances
//    if(name === 'appliances'){
//     let applianceByRecipes = getAppliances(recipe);
//     console.log(applianceByRecipes)
//     selectApp.forEach(app => {
//         console.log(app);
//         /** displays recipes that contain the selected tag */
//         console.log(applianceByRecipes.indexOf(app) > -1);
//         if(applianceByRecipes.indexOf(app) > -1){
//             countApp ++;
//         }
//     });

//     if( countApp != selectApp.length){
//         /** Create a new recipe list when filtering by appliance selected */
//         appMatch = false;
//     }
// }

// if(name === 'ingredients'){
//     let ingredientsByRecipes = getIngredients(recipe);
//     console.log(ingredientsByRecipes);
//     selectIng.forEach(ing => {
//         /** displays recipes that contain the selected tag */
//         if(ingredientsByRecipes.indexOf(ing) > -1){
//             countIng ++;
//         }
//     });

//     if( countIng != selectIng.length){
//         /** Create a new recipe list when filtering by ingredients selected */
//         ingMatch = false;
//     }
// }

// if(name === 'ustensils'){
//     let ustensilsByRecipes = getUstensils(recipe);
//     console.log(ustensilsByRecipes);
//     selectUst.forEach(ust => {
//             /** displays recipes that contain the selected tag */
//             if(ustensilsByRecipes.indexOf(ust) > -1){
//                 countUst ++;
//             }
//         });

//         if( countUst != selectUst.length){
//              /** Create a new recipe list when filtering by appliance selected */
//             ustMatch = false;
//         }
//     }

//     if(appMatch && ingMatch && ustMatch){
//         list.push(recipe);
//     }
// });
// console.log(list);
// return list;     

// }