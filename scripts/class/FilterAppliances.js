import { Filters } from "./Filters.js";


export class FilterAppliances extends Filters {

    constructor(list){
        super(list, 'appliances');
        //  here appliances will correspond to the this.name of the parent class
        this.all = [];
        this.selection = []; // saves all selected appliances
        this.recipes = list.recipes;
    }


    display(){
        super.display();
    }


    deleteData(){
        super.deleteDataInput();
    }


    /** Get all elements */
    getListEl(recipes){
        const getApp = new Set();
        let allApp;

        recipes.forEach(rec => {
            getApp.add(rec.getAppliances());
        });

        allApp = [...getApp].sort();
        this.all = allApp;
    }


    filter(recipes){
        //returns filtered recipes that contain the selected elements
        return recipes.filter(recipe =>{
            let count = 0;
            this.selection.forEach(a => {
                if(recipe.appliance.toLowerCase().trim().includes(a.toLowerCase())){
                    count ++;
                }
            });
            // After checking all selected appliances, we returns true if all selected appliances are present in the recipe
            return (count === this.selection.length);
        });
      
    }


    listenForSelection(){
        const listElements = document.querySelectorAll(`.${this.name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                if (this.name === 'appliances' && !this.selection.includes(el.innerText)) {
                    this.selection.push(el.innerText);
                    this.list.filterRecipes();
                }

             this.list.updateCounterRecipes();
            });
          
        });
    }

}