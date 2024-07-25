import { recipes } from "../../data/recipes.js";
import { Recipe } from "./Recipe.js";

export class SearchBar{

    constructor(list){
        this.list = list;
        this.recipes = list.recipes;
        this.recipesFiltered = [];
        this.init(); 
        this.allApp = [];
        this.allIng = [];
        this.allUst = [];
        this.search = [];
    }


    // createTag(el){
    //     console.log('createtag', el);
    //     const tag = document.createElement('div');
    //     tag.classList.add(`tag-${this.name}`);
    
    //     const textEl = document.createElement('p');
    //     textEl.classList.add(`tag-${this.name}-p`);
    //     textEl.innerText =  `${el.innerText}`; 
    
    //     const crossToDeleteTag = document.createElement('span');
    //     crossToDeleteTag.classList.add('tag-delete');
  
    //     /** Delete tag and display el */
    //     crossToDeleteTag.addEventListener('click', () => {
    //         tag.remove();
    //         const index = this.search.findIndex(a => a === el);
    //         this.search.splice(index, 1);
    //         el.style.display = 'block';
    //         /* updating the selection after deleting the tag */
    //         this.list.filtered = this.list.recipes; // reset list
    //         this.list.filterRecipes();
    //         this.list.updateCounterRecipes();
    //     });
    
    //     tag.appendChild(textEl);
    //     tag.appendChild(crossToDeleteTag);
    
    //     return tag;
    // }


    deleteDataInput(){
    
        const crossToDeleteMain = document.querySelector(`.deleteData`);
        const inputMain = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');
    
        /** Clicking on the cross erases the data and undisplays the cross */
        crossToDeleteMain.addEventListener('click', () => {
            inputMain.value = '';
            crossToDeleteMain.style.display = "none";
        });
    
        /** if data is inserted into the input, the cross is displayed */
        inputMain.addEventListener('input', () => {
            crossToDeleteMain.style.display = "block";
        });
    
        submit.addEventListener('click', (e) => {
           e.preventDefault();
        })
    }



    // displayTag(){

    //     const input = document.querySelector(`#search-q`);
   
    //     console.log(input.value);
   
    //     if(this.allApp.includes(input.value)){
    //         this.name = 'appliances';
    //         this.tag(input);
    //         this.createTag(input.value);
    //     }
    //     if(this.allIng.includes(input.value)){
    //        this.name = 'ingredients';
    //        this.tag(input);
    //        this.createTag(input.value);
    //     }
    //     if(this.allUst.includes(input.value)){
    //         this.name = 'ustensils';
    //         this.tag(input);
    //         this.createTag(input.value);
    //     }

        
        
    // }


    removeSelectedElFromList(){
        const tag = document.querySelectorAll(`.tag-${this.name}-p`);
        const listElementsToFilter = document.querySelectorAll('.' + this.name);
    
        /** remove el of list elements */
        listElementsToFilter.forEach(el => {
            tag.forEach(selection => {
                if(el.innerText.toLowerCase().trim() === selection.innerText.toLowerCase().trim()){
                    el.style.display = 'none';
                }
            });
        });
    }


    getRecipes(){
        const input = document.querySelector(`#search-q`);
        const removeAccents = str =>
            str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //remove accents and special characters 

        const filterRecipes = () => {
            
            this.recipesFiltered = [];  // delete previous results
            let research = removeAccents(input.value.toLowerCase().trim());

            if (research.length < 3){
                console.log('La recherche doit comporter au moins 3 caractères');
                return;
            }

            this.recipes.forEach(recipe => {
                let app = removeAccents(recipe.appliance.toLowerCase());
                let arrayIng = recipe.ingredients;
                let arrayUst = recipe.ustensils;
                let description = removeAccents(recipe.description.toLowerCase());
                let ing = [];
                let name = removeAccents(recipe.name.toLowerCase());
                let ust = [];
                // Create an array of ingredients per recipe
                arrayIng.forEach(ingredient => {
                    ing.push(removeAccents(ingredient.ingredient.toLowerCase()));
                });

                // Create an array of ustensils per recipe
                arrayUst.forEach(ustensil => {
                    ust.push(removeAccents(ustensil.toLowerCase()));
                });

                if (app.includes(research) || ing.includes(research) || ust.includes(research) || name.includes(research) || description.includes(research)) {
                    this.recipesFiltered.push(recipe);
                } 
            });

            console.log(this.recipesFiltered);

            if(this.recipesFiltered.length === 0){
                console.log('Aucune recette ne correspond à votre recherche');
            }
        };

        filterRecipes();
    }


    init(){

        const input = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            // this.getListApp();
            // this.getListIng();
            // this.getListUst();

            this.search.push(input.value);
        
           // puts this.recipesFiltered as a parameter of the filter function of the RecipesFiltered class
            this.list.filterRecipes(this.recipesFiltered);
            this.getRecipes();
            // this.displayTag();

            input.value = '';
        });
    }


    //     /** Get all elements */
    //     getListApp(){
    //         const getApp = new Set();
    //         this.list.recipes.forEach(rec => {
    //             getApp.add(rec.getAppliances());
    //         });
    
    //         this.allApp = [...getApp].sort();
    //     }


    //     /** Get all elements */
    //     getListIng(){
    //         const getIng = new Set();
    //         this.list.recipes.forEach(rec => {
    //             rec.getIngredients().forEach(ing => {
    //                 getIng.add(ing);
    //             });
    //         });

    //         this.allIng = [...getIng].sort();
         
    //     }


    //         /** Get all elements */
    // getListUst(){
    //     const getUst = new Set();
    //     this.list.recipes.forEach(rec => {
    //         rec.getUstensils().forEach(ust =>{
    //             getUst.add(ust);
    //         });
    //     });

    //     this.allUst = [...getUst].sort();
     
    // }

    // tag(input){
      
    //     let value = input.value;
    
    //     let mainFilter;
    //     mainFilter = document.querySelector(`#main_filter-${this.name}-wrapper`);
    //     const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');
    //     /** Create Tag */
    //     mainTagWrapper.appendChild(this.createTag(value));
    //     /** hide list elements  */
    //     document.querySelector(`#main_filter-bar-${this.name}`).classList.toggle('displayBlock'); 
    // }
}
