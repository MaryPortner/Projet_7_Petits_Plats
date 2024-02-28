import { CardRecipe } from "../class/cardRecipe.js";

export function displayCardRecipes(recipes) {

    let datas = [];
    // let regex = /^[^A-Z-É]*$/;
    // let datas = [];

    for (let i = 0 ; i < recipes.length ; i++){
        datas = recipes[i];
        console.log(datas.image);
        // new CardRecipe().buildCard(datas.image, datas.time, datas.name, datas.ingredient, datas.quantity, datas.unit,  datas.description);
        let recipe = new CardRecipe(datas.image, datas.time, datas.name, datas.ingredient, datas.quantity, datas.unit,  datas.description);
        recipe.buildCard();
        /** Loop to insert all the datas in a array*/
        // for (let j = 0 ; j < allDatas.length ; j++){
        //     /** remove duplicates */
        //     if(!datas.includes(allDatas[j]) && (regex.test(allDatas[j]))){
        //         datas.push(allDatas[j]);
        //     }
        // }

    }

    // recipes.forEach((datas) => {
    //     console.log(datas);
    //     new CardRecipe().buildCard(datas);
    //     datas.forEach((ingredient) => {
    //         console.log(ingredient)
    //     new CardREcipe().displayIngredients(ingredient);
    //     })
    // });

    
}

