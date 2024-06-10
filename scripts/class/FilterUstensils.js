import { Filters } from "./Filters.js";
import { ListElements } from "./ListElements.js";

export class FilterUstensils extends Filters {


    constructor(recipes){
        super(recipes);
        this.listElements = new ListElements(recipes);
    }


    createFilterUstensils(){
        // let listElements = new ListElements(recipes);
        let listAllUst = this.listElements.listAllUstensils();
        const element =  this.createListOfElements('ustensils', listAllUst);
        document.querySelector(`.main_filter-bar-ustensils`).appendChild(element);
    }

}