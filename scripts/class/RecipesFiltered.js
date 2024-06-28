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

   
    displayCard(){
        this.wrapper.innerHTML = '';
        this.filtered.forEach(recipe => {
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


    getElSelected(name){
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

    /** get elements selected */
    // listenElSelected(){
    //     this.filters.forEach(filter => {
    //         filter.listenForSelection();
    //     });

    // }


    filterRecipes(){
        this.filtered = [];

        this.recipes.forEach(recipe => {

            this.appSelected.forEach(a => {
                if(recipe.appliance.toLowerCase().trim().includes(a.toLowerCase())){
                    this.filtered.push(recipe);
                }
            });

            this.ingSelected.forEach(i => {
                if(recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase().trim()).includes(i.toLowerCase())){
                    this.filtered.push(recipe);
                }
            });

            this.ustSelected.forEach(u => {
                if(recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(u.toLowerCase())){
                    this.filtered.push(recipe);
                }
            });
        });

        this.displayCard();  
        this.updateCounterRecipes();
        console.log(this.filtered);
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

 
        this.addFilter(filterApp);
        this.addFilter(filterIng);
        this.addFilter(filterUst);

        this.hydrateFilters();
        this.displayCard();
        this.displayCounterRecipes(this.filtered);

        /** get all clicked elements */
        this.getAllElSelected('appliances');
        this.getAllElSelected('ingredients');
        this.getAllElSelected('ustensils');

        /** get clicked elements */
        this.getElSelected('appliances');
        this.getElSelected('ingredients');
        this.getElSelected('ustensils');

        //this.listenElSelected();

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