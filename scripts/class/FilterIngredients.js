import { Filters } from "./Filters.js";

export class FilterIngredients extends Filters {

    constructor(list){
        super(list,'ingredients');
    //  here ingredients will correspond to the this.name of the parent class
        this.all = [];
        this.selection = [];  // saves all selected ingredients
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
        const getIng = new Set();
        let allIng;

        recipes.forEach(rec => {
            rec.getIngredients().forEach(ing => {
                getIng.add(ing);
            });
        });

        allIng = [...getIng].sort();
        this.all = allIng;
    }


    filter(recipes){
        //returns filtered recipes that contain the selected elements
        return recipes.filter(recipe => {
            let count = 0;
            this.selection.forEach(i => {
                if(recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase().trim()).includes(i.toLowerCase())){
                    count++;
                }
            });

            return (count === this.selection.length);
        });
    }


    /** Get element selected and get recipe filtered  */
    listenForSelection(){
        const listElements = document.querySelectorAll(`.${this.name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
             
                if (this.name === 'ingredients' && !this.selection.includes(el.innerText)) {
                    this.selection.push(el.innerText);
                    this.list.filterRecipes();
                }
                // console.log(this.list);
                this.list.updateCounterRecipes();
            });
        });
    }

}