/** collect all datas of recipes  */
export function collectAppliances(recipes, name){
    /** The Set object lets you store unique values of any type */
    const list = new Set();
    let arrayList;
    /** Loop for get all elements in recipes array*/
    for(let i = 0 ; i < recipes.length ; i++){
        if(name === 'appliances'){
        /** The add() method of Set () inserts a new element with a specified value in to this set, if there isn't an element with the same value already in this set  <=> push */
            list.add(recipes[i].appliance);
        }
        /** sort alphabetically */
        arrayList = [...list].sort();
    }

    return arrayList;
}