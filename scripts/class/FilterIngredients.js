import { Filters } from "./Filters.js";
import { ListElements } from "./ListElements.js";

export class FilterIngredients extends Filters {


    constructor(recipes){
        super(recipes);
        this.listElements = new ListElements(recipes);
    }


    createFilterIngredients(){
        // let listElements = new ListElements(recipes);
        let listAllIng = this.listElements.listAllIngredients();
        const element =  this.createListOfElements('ingredients', listAllIng);
        document.querySelector(`.main_filter-bar-ingredients`).appendChild(element);
    }
    

}