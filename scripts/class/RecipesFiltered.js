import { updateCounterRecipes } from "../utils/updateCounterRecipes.js";
import { FilterAppliances } from "../class/FilterAppliances.js";
import { FilterIngredients } from "../class/FilterIngredients.js";
import { FilterUstensils } from "../class/FilterUstensils.js";

import { SearchBar } from "./SearchBar.js";
import { Recipe } from "./Recipe.js";

export class RecipesFiltered{
    constructor(recipes){
        this.recipes = [];
        this.wrapper = document.querySelector('#main_allRecipes');
        this.filters = [];
        this.filtered = this.recipes;
        this.init(recipes);
        this.elClicked = [];
        this.searchBar = new SearchBar(this); // initialisation class SearchBar
    }


    /** Create an array of all filters except searchBar */
    addFilter(filter){ 
        this.filters.push(filter);
    }


    displayCards(recipes){
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




    filterRecipes(recipesSearchBar = ''){ // we set the parameter to empty in the case where no search is carried out.
        //let list is the list of recipes that contain the selected filters
        let list = this.recipes;

        if(recipesSearchBar.length >= 3){
            this.filtered = this.searchBar.search(recipesSearchBar, list);
            console.log('SEARCHBAR', this.filtered);
        }else {
            this.displayCards(this.filtered); 
        }

        this.filters.forEach(filter =>{
            // filter here, is a method of the Filter object (FilterAppliances, FilterIngredients, FilterUstensils)
            this.filtered = filter.filter(this.filtered);
            console.log('LIST', this.filtered);

        });

        this.hydrateFilters();
        this.searchBar.deleteDataInput();
        this.displayCards(this.filtered);  
        this.listenElSelected();
        updateCounterRecipes();
    }


    /** get elements and display them in the filters */
    hydrateFilters(){
        this.filters.forEach(filter => {
            filter.getListEl(this.filtered);
            filter.display();
            filter.deleteDataInput();
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
        this.displayCards(this.filtered);
        this.displayCounterRecipes(this.filtered);
    }
    

    /** get elements selected */
    listenElSelected(){
        this.filters.forEach(filter => {
            filter.listenForSelection();
        });
    }

        


 
  
}