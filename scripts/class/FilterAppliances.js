import { Filters } from "./Filters.js";


export class FilterAppliances extends Filters {

    constructor(list){
        super(list, 'appliances');
        //  here appliances will correspond to the this.name of the parent class
        this.all = [];
    }

    display(){
        /** Create list elements and display it */
        const element =  super.createListOfElements(this.name, this.all);
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
        super.displayTag();
        super.displayListElFiltered();
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
        super.deleteDataInput()
    }


}

