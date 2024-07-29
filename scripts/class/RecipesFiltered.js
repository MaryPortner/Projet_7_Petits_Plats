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
        console.log(this.searchBar);
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
        let list = this.filtered;

        if(recipesSearchBar.length >= 3){
            list = this.searchBar.search(recipesSearchBar, list);
        } 
        
        this.filters.forEach(filter =>{
            // filter here, is a method of the Filter object (FilterAppliances, FilterIngredients, FilterUstensils)
            list = filter.filter(list);
            console.log('LIST', list);

        });
        //the list will be updated based on the selected items
        this.filtered = list;
        console.log(this.filtered);

        this.hydrateFilters();
        this.displayCards(this.filtered);  
        this.listenElSelected();
        this.updateCounterRecipes();
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

        
    /** update number recipes */
    updateCounterRecipes(){
        const recipesContainer = document.querySelector('#main_allRecipes');
        /** get number of recipes displayed */
        let numberRecipes = recipesContainer.childElementCount; 
        /** update display number of recipes */
        document.querySelector('.numberRecipes').innerText = numberRecipes;
    }

  
}