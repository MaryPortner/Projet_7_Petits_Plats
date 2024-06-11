import { Filters } from "./Filters.js";
import { ListElements } from "./ListElements.js";

export class FilterAppliances extends Filters {

    constructor(){
        super();
        this.listElements = new ListElements();
    }

    createFilterAppliances(){
        // let listElements = new ListElements(recipes);
        let listAllApp = this.listElements.listAllAppliances();
        const element =  super.createListOfElements('appliances', listAllApp);
        document.querySelector(`.main_filter-bar-appliances`).appendChild(element);
    }

}

