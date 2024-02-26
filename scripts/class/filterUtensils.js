export class FilterByUtensils{
    
    /** 
     * 
     * @param { string } recipes
     *
     *  */
    constructor(recipes){

        let arrayAllUtensils = [];
        const mainFilterBarUstensiles = document.querySelector('.main_filter-bar-ustensiles');
        let regex = /^[^A-Z-É]*$/;
        let utensils = [];
        /** Loop for get all utensils in recipes array*/
        for (let i = 0 ; i < recipes.length ; i++){
            arrayAllUtensils = recipes[i].ustensils;
            /** Loop to insert all the utensils in a array*/
            for (let j = 0 ; j < arrayAllUtensils.length ; j++){
                /** remove duplicates */
                if(!utensils.includes(arrayAllUtensils[j]) && (regex.test(arrayAllUtensils[j]))){
                    utensils.push(arrayAllUtensils[j]);
                }
            }
        }
        /** Inserting list of utensils into the filter div */
        const element = this.displayListOfUstensils(utensils);
        mainFilterBarUstensiles.appendChild(element);
    }

    displayListOfUstensils(utensils){
        const listUtensils = document.createElement('ul');
        listUtensils.classList.add('filter-bar-ustensiles-list')
        for (let el of utensils){
            const utensil = document.createElement('li');
            utensil.innerHTML = `${el}`;
            utensil.classList.add("utensil");
            listUtensils.appendChild(utensil);
        }
        return listUtensils;
    }

 
}


// let regex = /\b[[:upper:]][[:alpha:]]*\b/;
// && (!(arrayAllUtensils[j].match(regex)))
