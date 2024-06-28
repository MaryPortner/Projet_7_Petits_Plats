import { Filters } from "./Filters.js";


export class FilterIngredients extends Filters {

    constructor(list){
        super(list,'ingredients');
    //  here ingredients will correspond to the this.name of the parent class
        this.all = [];
    }


    display(){
        const element =  super.createListOfElements(this.name, this.all);
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
        super.displayTag();
        super.displayListElFiltered();
    }

    /** Get all elements */
    getListEl(){
        const getIng = new Set();
        let allIng;

        this.list.filtered.forEach(rec => {
            rec.getIngredients().forEach(ing => {
                getIng.add(ing);
            });
        });

        allIng = [...getIng].sort();
        this.all = allIng;
    }

    deleteData(){
        super.deleteDataInput();
    }



    



    







}