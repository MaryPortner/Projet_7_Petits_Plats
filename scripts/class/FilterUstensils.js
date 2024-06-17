import { Filters } from "./Filters.js";
import { Recipe } from "./Recipe.js";
import { recipes } from "../../data/recipes.js";

export class FilterUstensils extends Filters {

    constructor(){
        super();
        this.name = 'ustensils';
    }

    createFilterUstensils(){
        const element =  this.createListOfElements(this.name, this.listAll());
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
    }


    displayListElFiltered(){
        super.displayListElFiltered(this.name);
    }


    displayTag(){
       super.displayTag(this.name);
    }


    listAll(){
        const getUst = new Set();
        let allUst;

        recipes.forEach(r => {
            const rec = new Recipe(r);
            rec.getUstensils().forEach(ust =>{
                getUst.add(ust);
            });
        });

        allUst = [...getUst].sort();
        return allUst;
    }


}