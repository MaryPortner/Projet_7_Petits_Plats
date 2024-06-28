import { Filters } from "./Filters.js";


export class FilterUstensils extends Filters {

    constructor(list){
        super(list, 'ustensils');
    //  here utensils will correspond to the this.name of the parent class
        this.all = [];
    }

    display(){
        const element =  this.createListOfElements(this.name, this.all);
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
        super.displayTag();
        super.displayListElFiltered();
    }

    /** Get all elements */
    getListEl(){
        const getUst = new Set();
        let allUst;

        this.list.filtered.forEach(rec => {
            rec.getUstensils().forEach(ust =>{
                getUst.add(ust);
            });
        });

        allUst = [...getUst].sort();
        this.all = allUst;
    }

    deleteData(){
        super.deleteDataInput();
    }


}