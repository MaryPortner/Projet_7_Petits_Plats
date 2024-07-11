import { Filters } from "./Filters.js";

export class FilterUstensils extends Filters {

    constructor(list){
        super(list, 'ustensils');
    //  here utensils will correspond to the this.name of the parent class
        this.all = [];
        this.selection = []; // saves all selected ustensils
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
        const getUst = new Set();
        let allUst;

       recipes.forEach(rec => {
            rec.getUstensils().forEach(ust =>{
                getUst.add(ust);
            });
        });

        allUst = [...getUst].sort();
        this.all = allUst;
     
    }


    //filter recipes 
    filter(recipes){
        //returns filtered recipes that contain the selected elements
       return recipes.filter(recipe => {
        let count = 0;
            this.selection.forEach(u => {
                if(recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(u.toLowerCase())){
                    count++;
                }
            });
            // After checking all selected utensils, we returns true if all selected utensils are present in the recipe
            return (count === this.selection.length);
        });      
    }


    listenForSelection(){
        const listElements = document.querySelectorAll(`.${this.name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                if (this.name === 'ustensils' && !this.selection.includes(el.innerText)) {
                    this.selection.push(el.innerText);
                    this.list.filterRecipes();
                }
                this.list.updateCounterRecipes();
            });
        });
    }
 }