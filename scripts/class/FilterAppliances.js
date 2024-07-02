import { Filters } from "./Filters.js";


export class FilterAppliances extends Filters {

    constructor(list){
        super(list, 'appliances');
        //  here appliances will correspond to the this.name of the parent class
        this.all = [];
        this.appSelected = [];
        this.recipes = list.recipes;
    }


    display(){
        super.display();
    }


    /** Get all elements */
    getListEl(){
        const getApp = new Set();
        let allApp;

        this.list.recipes.forEach(rec => {
            getApp.add(rec.getAppliances());
        });

        allApp = [...getApp].sort();
        this.all = allApp;
    }


    deleteData(){
        super.deleteDataInput();
    }

    filter(){
        const list = [];

        this.recipes.forEach(recipe => {
            this.appSelected.forEach(a => {
                if(recipe.appliance.toLowerCase().trim().includes(a.toLowerCase())){
                    list.push(recipe);
                }
            });
        });

        return list;
    }


    listenForSelection(){
        const listElements = document.querySelectorAll(`.${this.name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                if (this.name === 'appliances' && !this.appSelected.includes(el.innerText)) {
                    this.appSelected.push(el.innerText);
                    this.list.filterRecipes();
                }

             this.list.updateCounterRecipes();
            });
          
        });
    }

}

