import { Recipe } from "./Recipe.js";

export class recipesFiltered{

    constructor(recipes){
        this.recipes = recipes;
        // console.log(this.list);
    }

    // Déclarer une variable qui récupérerait tous les éléments cliqués
    // Déclarer une variable pour sauvergarder les recettes sélectionnées dans un tableau.
    // Boucler sur chaque élément cliqué
    // S'il apparait dans une recette, on sauvegarde la recette.
    // on retourne toutes les recettes.

    elSelected(name){
        const listElements = document.querySelectorAll(`.${name}`);
        let elSelected = [];
        listElements.forEach(el => { 
            el.addEventListener('click', () => {
                elSelected.push(el);
            });
        })
        return elSelected;
    }


    byAppliances(){
        let recipe = new Recipe(this.recipes);
        let appByRecipes = recipe.getAppliances();
        console.log('a', appByRecipes);

        let count = 0;
        this.elSelected.forEach(app => {
            /** count recipes that contain selected tags */
            if(appByRecipes.indexOf(app) > -1){
                count ++;
            }
        });
    
        if( count ==   this.elSelected.length){
            /** Create a new recipe list when filtering by appliance selected */
            this.list.push(this.recipe);
        }
    }
   



}