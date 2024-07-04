import { Filters } from "./Filters.js";

export class FilterUstensils extends Filters {

    constructor(list){
        super(list, 'ustensils');
    //  here utensils will correspond to the this.name of the parent class
        this.all = [];
        this.ustSelected = [];
        this.recipes = list.recipes;
    }


    display(){
        super.display();
    }


    deleteData(){
        super.deleteDataInput();
    }


    /** Get all elements */
    getListEl(){
        const getUst = new Set();
        let allUst;

       this.list.recipes.forEach(rec => {
            rec.getUstensils().forEach(ust =>{
                getUst.add(ust);
            });
        });

        allUst = [...getUst].sort();
        this.all = allUst;
    }



    filter(){
        const list = [];
        this.recipes.forEach(recipe => {
            this.ustSelected.forEach(u => {
                if(recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(u.toLowerCase())){
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
                if (this.name === 'ustensils' && !this.ustSelected.includes(el.innerText)) {
                    this.ustSelected.push(el.innerText);
                    this.list.filterRecipes();
                }
                this.list.updateCounterRecipes();
            });
        });
    }
 }



