import { Filters } from "./Filters.js";
import { Recipe } from "./Recipe.js";
import { recipes } from "../../data/recipes.js";

export class FilterAppliances extends Filters {

    constructor(){
        super();
        this.name = 'appliances';
    }

    createFilterAppliances(){
        const element =  super.createListOfElements(this.name, this.listAll());
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
    }

    displayListElFiltered(){
        super.displayListElFiltered(this.name);
    }


    displayTag(){
       super.displayTag(this.name);
    }

    listAll(){
        const getApp = new Set();
        let allApp;

        recipes.forEach(r => {
            const rec = new Recipe(r);
            getApp.add(rec.getAppliances());
        });

        allApp = [...getApp].sort();
        return allApp;

    }


}

