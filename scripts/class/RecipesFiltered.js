import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { Recipe } from "./Recipe.js";


export class RecipesFiltered{

    constructor(recipes){
        this.appSelected = [];
        this.ingSelected = [];
        this.ustSelected = [];
        this.recipes = [];
        this.wrapper = document.querySelector('#main_allRecipes');
        this.filters = [];
        this.filtered = this.recipes;
        this.init(recipes);
        this.elClicked = [];
    }

    /** add all filters in this.filters */
    addFilter(filter){ 
        this.filters.push(filter);
    }

   
    displayCard(recipes){
        this.wrapper.innerHTML = '';
        recipes.forEach(recipe => {
            const card = recipe.buildCard();
            this.wrapper.appendChild(card);
        });
    }


    displayCounterRecipes(recipes){

        // const recipesContainer = document.querySelector('#main_allRecipes');
        let numberRecipes = recipes.length;
        const numberTotalRecipes = document.querySelector('.numberTotalRecipes');
    
        const numberRecipesContainer = document.createElement('p');
        numberRecipesContainer.classList.add("numberRecipes");
        numberRecipesContainer.innerText = `${numberRecipes}`;
      
        const recipesTxt = document.createElement("p");
        recipesTxt.classList.add("recipes");
        recipesTxt.innerText = `recettes`;
    
        numberTotalRecipes.appendChild(numberRecipesContainer);
        numberTotalRecipes.appendChild(recipesTxt);
    }


    getAllElSelected(name){
        const listElements = document.querySelectorAll(`.${name}`);
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                this.elClicked.push(el.innerText);
                // console.log(this.elClicked);
                return this.elClicked;
            });
        });
    }


    filterRecipes(){
        this.filtered = this.recipes;

        // console.log(this.filters);
        this.filters.forEach(filter =>{
          
            this.filtered = filter.filter(this.filtered);
            this.filtered.forEach(recipe =>{
                this.displayCard(this.filtered);  
            })
        });
    
    }

    
    /** get elements and display them in the filters */
    hydrateFilters(){
        this.filters.forEach(filter => {
            filter.getListEl();
            filter.display();
        });
    }


    init(recipes){
        const filterApp = new FilterAppliances(this); // "this" here refers to the class itself 
        const filterIng = new FilterIngredients(this);
        const filterUst = new FilterUstensils(this);

        recipes.forEach(recipe => {
            this.recipes.push(new Recipe(recipe));
        });

        // this.displayCard();
        this.addFilter(filterApp);
        this.addFilter(filterIng);
        this.addFilter(filterUst);

        this.hydrateFilters();
    

        /** get all clicked elements */
        // this.getAllElSelected('appliances');
        // this.getAllElSelected('ingredients');
        // this.getAllElSelected('ustensils');

        this.listenElSelected();
   
        // this.appSelected = filterApp.appSelected;
        // this.ingSelected = filterIng.ingSelected;
        // this.ustSelected = filterUst.ustSelected;

        this.displayCard(this.filtered);
        this.displayCounterRecipes(recipes);
      
    }


    /** get elements selected */
    listenElSelected(){
        this.filters.forEach(filter => {
            filter.listenForSelection();
        });
    }

        
    /** update number recipes */
    updateCounterRecipes(){
        const recipesContainer = document.querySelector('#main_allRecipes');
        /** get number of recipes displayed */
        let numberRecipes = recipesContainer.childElementCount; 
        /** update display number of recipes */
        document.querySelector('.numberRecipes').innerText = numberRecipes;
    }

  
}