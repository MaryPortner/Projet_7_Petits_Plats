import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { Recipe } from "./Recipe.js";


export class RecipesFiltered{

    constructor(recipes){
        this.recipes = [];
        this.wrapper = document.querySelector('#main_allRecipes');
        this.filters = [];
        this.filtered = this.recipes;
        this.init(recipes);
        this.elClicked = [];
        this.appSelected = [];
        this.ingSelected = [];
        this.ustSelected = [];
    }

    /** add all filters in this.filters */
    addFilter(filter){ 
        this.filters.push(filter);
    }

   
    displayCard(){
        this.wrapper.innerHTML = '';
        this.filtered.forEach(recipe => {
            const card = recipe.buildCard();
            this.wrapper.appendChild(card);
        });
    }


    getAllElSelected(name) {
        const listElements = document.querySelectorAll(`.${name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                this.elClicked.push(el.innerText);
                // console.log(this.elClicked);
                return this.elClicked;
            });
        });
    }


    getElSelected(name) {
        const listElements = document.querySelectorAll(`.${name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                if (name === 'appliances' && !this.appSelected.includes(el.innerText)) {
                    this.appSelected.push(el.innerText);
                }
                if (name === 'ingredients' && !this.ingSelected.includes(el.innerText)) {
                    this.ingSelected.push(el.innerText);
                }
                if (name === 'ustensils' && !this.ustSelected.includes(el.innerText)) {
                    this.ustSelected.push(el.innerText);
                }

              this.filterRecipes();

            });
        });
    }

    filterRecipes(){

        const filterApp = new FilterAppliances(this); // "this" here refers to the class itself 
        const filterIng = new FilterIngredients(this);
        const filterUst = new FilterUstensils(this);

        const app = this.appSelected;
        const ing = this.ingSelected;
        const ust = this.ustSelected;


        console.log(filterApp.all);
        console.log(filterIng.all);
        console.log(filterUst.all);

        // console.log(this.appSelected);
        // console.log(this.ingSelected);
        // console.log(this.ustSelected);

        console.log(app);
        console.log(ing);
        console.log(ust);

        this.filtered = this.recipes.filter(recipe => {
            const hasSelectedAppliances = app.every(a => recipe.appliances.includes(a));
            const hasSelectedIngredients = ing.every(i => recipe.ingredients.includes(i));
            const hasSelectedUstensils = ust.every(u => recipe.ustensils.includes(u));
            return hasSelectedAppliances && hasSelectedIngredients && hasSelectedUstensils;
        });
        this.displayCard();

        // const getElSelected = this.getElSelected(ing)
 
        //    this.recipes.forEach(rec => {
        //     const recipe = new Recipe(rec);
        //     // recipe.buildCard();
        //     // const namesByRecipes = recipe.getName();
        //     // const descrByRecipe = recipe.getDescription();
      
        //     el.forEach(e => {
        //         if(ingByRecipe.includes(e)){
        //             this.filtered.push(rec);
        //         }
        //     });
        // });

        
      

     
    }






    /** get elements and display them in the filters */
    hydrateFilters(){
        this.filters.forEach(filter => {
            filter.getListEl();
            filter.display();
        });
    }


  /** get elements and display them in the filters */
    init(recipes){
        const filterApp = new FilterAppliances(this); // "this" here refers to the class itself 
        const filterIng = new FilterIngredients(this);
        const filterUst = new FilterUstensils(this);



        recipes.forEach(recipe => {
            this.recipes.push(new Recipe(recipe));
        });

        

        this.addFilter(filterApp);
        this.addFilter(filterIng);
        this.addFilter(filterUst);

        this.hydrateFilters();
        this.displayCard();

        /** get all clicked elements */
        this.getAllElSelected('appliances');
        this.getAllElSelected('ingredients');
        this.getAllElSelected('ustensils');

        /** get clicked elements */
        this.getElSelected('appliances');
        this.getElSelected('ingredients');
        this.getElSelected('ustensils');
    
        this.filterRecipes();
   

    }
}