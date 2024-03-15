/** collect all datas of recipes  */
export function collectIngredients(recipes, name){
    /** The Set object lets you store unique values of any type */
    const list = new Set();
    let arrayList;
    /** Loop for get all elements in recipes array*/
    for(let i = 0 ; i < recipes.length ; i++){
        if(name === 'ingredients'){
            list.add(recipes[i].ingredients[0].ingredient);
        } 
        /** sort alphabetically */
        arrayList = [...list].sort();
    }

    return arrayList;
 }