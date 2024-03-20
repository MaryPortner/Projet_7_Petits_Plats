/** collect all datas of recipes  */
export function collectUstensils(recipes, name){
    /** The Set object lets you store unique values of any type */
    const list = new Set();
    let arrayList;
    let allUstensils = [];
    for(let i = 0 ; i < recipes.length ; i++){
        if(name === 'ustensils'){
            /** get all array of ustensils */
            const ustensilsByRecipes = recipes[i].ustensils;
            for(let j = 0 ; j < ustensilsByRecipes.length ; j++){
                allUstensils.push(ustensilsByRecipes[j]);
                /** loop for get each ustensils */
                for(let k = 0 ; k < allUstensils.length ; k++){
                    if (allUstensils[k] == 'moule à tartelettes (6)'){
                        allUstensils[k] = 'moule à tartelettes'; 
                    }               
                        /** The add() method of Set () inserts a new element in to this set, if the value is not already present  <=> push */
                        list.add(allUstensils[k].toLowerCase().trim());                  
                }
            }
        }
        /** sort alphabetically */
        arrayList = [...list].sort();
    }

    return arrayList;
 }