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
    getListEl(recipes){
        const getApp = new Set();
        let allApp;

        recipes.forEach(rec => {
            getApp.add(rec.getAppliances());
        });

        allApp = [...getApp].sort();
        this.all = allApp;
    }


    deleteData(){
        super.deleteDataInput();
    }


    filter(recipes){
        //returns filtered recipes that contain the selected elements
        return recipes.filter(recipe =>{
            let count = 0;
            this.appSelected.forEach(a => {
                if(recipe.appliance.toLowerCase().trim().includes(a.toLowerCase())){
                    count ++;
                }
            });
            // After checking all selected appliances, we returns true if all selected appliances are present in the recipe
            return (count === this.appSelected.length);
        });
      
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

