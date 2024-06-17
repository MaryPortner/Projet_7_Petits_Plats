import { Filters } from "./Filters.js";
import { Recipe } from "./Recipe.js";
import { recipes } from "../../data/recipes.js";


export class FilterIngredients extends Filters {

    constructor(recipes){
        super();
        this.recipes = recipes;
        this.name = 'ingredients';
    }


    createFilterIngredients(){
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
        const getIng = new Set();
        let allIng;

        recipes.forEach(r => {
            const rec = new Recipe(r);
            rec.getIngredients().forEach(ing => {
                getIng.add(ing);
            });
        });

        allIng = [...getIng].sort();
        return allIng;
    }



    



    







}