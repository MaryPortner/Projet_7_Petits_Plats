import { CardRecipe } from "../class/cardRecipe.js";

export function displayCardRecipes(recipes) {

    let datas = [];
    let arrayIngredients;
    let recipe;
    let dataIngredients = [];

    for (let i = 0 ; i < recipes.length ; i++){
        datas = recipes[i];
        console.log(datas);
        // let dataId = datas.id;
        recipe = new CardRecipe(datas.image, datas.name, datas.time, datas.description, dataIngredients.ingredient, dataIngredients.quantity, dataIngredients.unit);
        recipe.buildCard();
  
 
            arrayIngredients = datas.ingredients;
        

            for (let i = 0 ; i < arrayIngredients.length ; i++){
                
                dataIngredients = arrayIngredients[i];
                console.log(dataIngredients);
                // let ingredients = new CardRecipe(data.ingredient, data.quantity, data.unit);
                recipe.displayIngredients();
            }

    

        // arrayIngredients = datas.ingredients;
        

        // for (let i = 0 ; i < arrayIngredients.length ; i++){
            
        //     dataIngredients = arrayIngredients[i];
        //     console.log(dataIngredients);

        
        //     // let ingredients = new CardRecipe(data.ingredient, data.quantity, data.unit);
   
        //     recipe.displayIngredients();
        // }

        // ArrayIngredients.forEach((data) => {
        //     console.log(data);
        //     let ingredients = new CardRecipe(data.ingredient, data.quantity, data.unit);
   
        //     ingredients.displayIngredients();
        // });
    }

    }



          /** Loop to insert all the datas in a array*/
        // for (let j = 0 ; j < allDatas.length ; j++){
        //     /** remove duplicates */
        //     if(!datas.includes(allDatas[j]) && (regex.test(allDatas[j]))){
        //         datas.push(allDatas[j]);
        //     }
        // }


