// function searchB(recipes, research){

//     let found = false;
//     let recipesFiltered = [];

//     for(let i = 0 ;  i < recipes.length ; i ++ ){
        
//         let appliances = getAppliancesByRecipe(recipes[i]);


//         // for (let i = 0 ; i < appliances.length ; i++){
//             console.log(appliances);
//             if(appliances.includes(research)){
//                 if (found){
//                     return;
//                 }
//                 console.log(recipesFiltered);
//                 recipesFiltered.push(recipes[i]); 
//                 found = true;
//                 return;
//             }
//         // }
    
 

//         if(getIngredientsByRecipes(recipes[i]).includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipes[i]); 
//             console.log(recipesFiltered);
//             found = true;
//             return;
//         }

//         if(getUstensilsByRecipe(recipes[i]).includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipes[i]); 
//             found = true;
//             return;
//         }

//         if(recipes[i].name.toLowerCase().includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipes[i]);  
//             found = true;  
//             return;
//         }

//         if(recipes[i].description.toLowerCase().includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipes[i]);   
//             found = true; 
//             return;
//         }

//         if(recipesFiltered.length === 0){
//             console.log("Votre recherche ne correspond à aucun résultat");
//         }
//     }
//     console.log(recipesFiltered);
//     return recipesFiltered;
// }






// function searchA(recipes, research){
//     let recipesFiltered = [];

//     recipes.forEach(recipe => {
//         let found = false; 

//             if( getAppliancesByRecipe(recipe).includes(research)){
//                 if (found){
//                     return;
//                 }
//                 recipesFiltered.push(recipe); 
//                 found = true;
//                 return;
//             }

//             if( getIngredientsByRecipes(recipe).includes(research)){
//                 if (found){
//                     return;
//                 }
//                 recipesFiltered.push(recipe);    
//                 found = true;
//                 return;
//             }


//             if(getUstensilsByRecipe(recipe).includes(research)){
//                 if (found){
//                     return;
//                 }
//                 recipesFiltered.push(recipe); 
//                 found = true;
//                 return;
//             }
   

//         if(recipe.name.toLowerCase().includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipe);  
//             found = true;  
//             return;
//         }

//         if(recipe.description.toLowerCase().includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipe);   
//             found = true; 
//             return;
//         }
//     });

//     return recipesFiltered;
// }









// function searchA(recipes, research){
//     let recipesFiltered = [];

//     recipes.forEach(recipe => {
//         let found = false; 

//         getAppliancesByRecipe(recipe).forEach(appliance => {
//             if( appliance.toLowerCase().includes(research)){
//                 if (found){
//                     return;
//                 }
//                 recipesFiltered.push(recipe); 
//                 found = true;
//                 return;
//             }
//         });
   
//         getIngredientsByRecipes(recipe).forEach(ingredient => {
//             if(ingredient.includes(research)){
//                 if (found){
//                     return;
//                 }
//                 recipesFiltered.push(recipe);    
//                 found = true;
//                 return;
//             }
//         });
            
//         getUstensilsByRecipe(recipe).forEach(ustensil => {
//             if(ustensil.includes(research)){
//                 if (found){
//                     return;
//                 }
//                 recipesFiltered.push(recipe); 
//                 found = true;
//                 return;
//             }
//         })
          
//         if(recipe.name.toLowerCase().includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipe);  
//             found = true;  
//             return;
//         }

//         if(recipe.description.toLowerCase().includes(research)){
//             if (found){
//                 return;
//             }
//             recipesFiltered.push(recipe);   
//             found = true; 
//             return;
//         }
//     });

//     return recipesFiltered;
// }
