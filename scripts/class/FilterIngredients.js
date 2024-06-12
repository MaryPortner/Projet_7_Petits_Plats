import { Filters } from "./Filters.js";
import { ListElements } from "./ListElements.js";


export class FilterIngredients extends Filters {

    constructor(recipes){
        super();
        this.recipes = recipes;
        this.listElements = new ListElements();
    }


    createFilterIngredients(){
        // let listElements = new ListElements(recipes);
        let listAllIng =  this.listElements.listAllIngredients();
        const element =  super.createListOfElements('ingredients', listAllIng);
        document.querySelector(`.main_filter-bar-ingredients`).appendChild(element);
    }


    displayListElFiltered(){
        super.displayListElFiltered('ingredients');
    }


    displayTag(){
       super.displayTag('ingredients');
    }



    



    







}