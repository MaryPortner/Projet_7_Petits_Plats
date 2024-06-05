
import { ListElements } from "./ListElements.js";

export class CreateFilters {

    constructor(recipes){

        this.recipes = recipes;
        this.listElements = new ListElements(recipes);
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
  

    filterAppliances(){
        // let listElements = new ListElements(recipes);
        let listAllApp = this.listElements.listAllAppliances();

        const element =  this.createListOfElements('appliances', listAllApp);
        document.querySelector(`.main_filter-bar-appliances`).appendChild(element);
    }


    filterIngredients(){
        // let listElements = new ListElements(recipes);
        let listAllIng = this.listElements.listAllIngredients();

        const element =  this.createListOfElements('ingredients', listAllIng);
        document.querySelector(`.main_filter-bar-ingredients`).appendChild(element);
    }

    filterUstensils(){
        // let listElements = new ListElements(recipes);
        let listAllUst = this.listElements.listAllUstensils();
        console.log(listAllUst);

        const element =  this.createListOfElements('ustensils', listAllUst);
        document.querySelector(`.main_filter-bar-ustensils`).appendChild(element);
    }
  
  
    
}