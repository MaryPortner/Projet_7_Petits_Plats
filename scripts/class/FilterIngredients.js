import { Filters } from "./Filters.js";

export class FilterIngredients extends Filters {

    constructor(list){
        super(list,'ingredients');
    //  here ingredients will correspond to the this.name of the parent class
        this.all = [];
        this.ingSelected = [];
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
        const getIng = new Set();
        let allIng;

        this.list.recipes.forEach(rec => {
            rec.getIngredients().forEach(ing => {
                getIng.add(ing);
            });
        });

        allIng = [...getIng].sort();
        this.all = allIng;
    }


    filter(){
        const list = [];
        
        this.recipes.forEach(recipe => {
            this.ingSelected.forEach(i => {
                if(recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase().trim()).includes(i.toLowerCase())){
                    list.push(recipe);
                }
            });
        });
        
        return list;
    }

    /** Get element selected and get recipe filtered  */
    listenForSelection(){
        const listElements = document.querySelectorAll(`.${this.name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                if (this.name === 'ingredients' && !this.ingSelected.includes(el.innerText)) {
                    this.ingSelected.push(el.innerText);
                    this.list.filterRecipes();
                   
                }
                this.list.updateCounterRecipes();
            });
        });
    }



    



    







}