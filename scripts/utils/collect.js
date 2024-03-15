export function collect(recipes, name){
    /** The Set object lets you store unique values of any type */
    const list = new Set();
    console.log(list);
    let arrayList;
    let allUstensils = [];
    /** Loop for get all elements in recipes array*/
    for(let i = 0 ; i < recipes.length ; i++){
        if(name === 'appliances'){
        /** The add() method of Set () inserts a new element with a specified value in to this set, if there isn't an element with the same value already in this set  <=> push */
            list.add(recipes[i].appliance);
        }
        if(name === 'ingredients'){
            list.add(recipes[i].ingredients[0].ingredient);
        } 
        if(name === 'ustensils'){
            const ustensilsByRecipes = recipes[i].ustensils;
            for(let j = 0 ; j < ustensilsByRecipes.length ; j++){
             
                allUstensils.push(ustensilsByRecipes[j]);
                console.log(allUstensils);
                for(let k = 0 ; k < allUstensils.length ; k++){
                    list.add(allUstensils[k]);
                }
             
                   console.log(list);
            }
        }
        /** sort alphabetically */
        arrayList = [...list].sort();
        // console.log (arrayList);
    }
    return arrayList;
 }