import { updateCounterRecipes } from "../utils/updateCounterRecipes.js";

export class SearchBar{

    constructor(list){
        this.list = list;
        this.wrapper = document.querySelector('#main_allRecipes');
        this.recipes = list.recipes;
        this.recipesFiltered = [];
        this.init(); 
    }

    deleteDataInput(){
        const crossToDeleteMain = document.querySelector(`span.header_delete-main`);
        const inputMain = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');
    
        /** Clicking on the cross erases the data and undisplays the cross */
        crossToDeleteMain.addEventListener('click', () => {
            this.displayCards(this.recipes);
            inputMain.value = '';
            crossToDeleteMain.style.display = "none";
            updateCounterRecipes(this.recipes)
        });
   
        /** if data is inserted into the input, the cross is displayed */
        inputMain.addEventListener('input', () => {
            crossToDeleteMain.style.display = "block";
        });
    
        submit.addEventListener('click', (e) => {
           e.preventDefault();
        })
    }
    

    deleteInputOfList() {
        const input = document.querySelector('#search-q').value.toLowerCase().trim();
        const list = ['.appliances', '.ingredients', '.ustensils'];
        
        list.forEach(el => {
            document.querySelectorAll(el).forEach(listEl => {
                if (listEl.innerText.toLowerCase().trim() === input) {
                    listEl.style.display = 'none';
                }
            });
        });
    }


    displayCards(recipes){
        this.wrapper.innerHTML = '';
        recipes.forEach(recipe => {
            const card = recipe.buildCard();
            this.wrapper.appendChild(card);
        });
    }


    init(){
        const input = document.querySelector(`#search-q`);
        input.addEventListener("input", (e) => {
            e.preventDefault();
            this.list.filterRecipes(input.value.toLowerCase().trim());
        });
    }


     search(needle, recipes) {
        const removeAccents = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove accents and special characters 
        const research = removeAccents(needle);
        // this.recipesFiltered = [];  // delete previous results
    
        if (needle.length < 3) {
            console.log('La recherche doit comporter au moins 3 caractères');
            return recipes;
        }
    
        const list = [];
    
        for (let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let arrayIng = recipe.ingredients;
            let description = removeAccents(recipe.description.toLowerCase());
            let ing = [];
            let name = removeAccents(recipe.name.toLowerCase());
    
            // Create an array of ingredients per recipe
            for (let j = 0; j < arrayIng.length; j++) {
                let ingredient = arrayIng[j];
                ing.push(removeAccents(ingredient.ingredient.toLowerCase()));
            }
    
            if (ing.includes(research) || name.includes(research) || description.includes(research)) {
                list.push(recipe);
            }
        }
    
        return list;
    }
    
}