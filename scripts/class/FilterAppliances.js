import { Filters } from "./Filters.js";


export class FilterAppliances extends Filters {

    constructor(list){
        super(list);
        this.name = 'appliances';
        this.all = [];
    }

    display(){
        /** Create list elements and display it */
        const element =  super.createListOfElements(this.name, this.all);
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
        super.displayTag(this.name);
        super.displayListElFiltered(this.name);
    }

    /** Get all elements */
    getListEl(){
        const getApp = new Set();
        let allApp;

        this.list.filtered.forEach(rec => {
            getApp.add(rec.getAppliances());
        });

        allApp = [...getApp].sort();
        this.all = allApp;
    }

    deleteData(){
        super.deleteDataInput(this.name)
    }

    getElSelected(){
        super.getElSelected(this.name);
    }
}

