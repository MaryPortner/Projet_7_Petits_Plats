import { Filters } from "./Filters.js";
import { ListElements } from "./ListElements.js";

export class FilterAppliances extends Filters {


    constructor(recipes){
        super(recipes);
        this.listElements = new ListElements(recipes);
    }


    createFilterAppliances(){
        // let listElements = new ListElements(recipes);
        let listAllApp = this.listElements.listAllAppliances();
        const element =  this.createListOfElements('appliances', listAllApp);
        document.querySelector(`.main_filter-bar-appliances`).appendChild(element);
    }

}

