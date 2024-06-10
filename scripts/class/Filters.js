
// import { ListElements } from "./ListElements.js";

export class Filters {

    constructor(recipes){

        this.recipes = recipes;
       
    }


    /** Create list of elements for dropdown - Section filters - */
    createListOfElements(name, elements){
        const classUl = `filter-${name}-list` ;
        const ul = document.createElement('ul');
        ul.classList.add(`${classUl}`);

        for(let el of elements){
            /** creation of a li for each element */
            const li = document.createElement('li');
            li.innerText = `${el}`;
            li.classList.add(name);
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        
        return ul;
    }

}