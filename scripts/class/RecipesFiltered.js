import { Recipe } from "./Recipe.js";
import { recipes } from "../../data/recipes.js";

export class RecipesFiltered{

    constructor(){
        this.recipes = recipes;
        this.recipe = new Recipe(this.recipes);
    }

    // Déclarer une variable qui récupérerait tous les éléments cliqués
    // Déclarer une variable pour sauvergarder les recettes sélectionnées dans un tableau.
    // Boucler sur chaque élément cliqué
    // S'il apparait dans une recette, on sauvegarde la recette.
    // on retourne toutes les recettes.

    elSelected(name) {
        const listElements = document.querySelectorAll(`.${name}`);
        const elSelected = []; // Déclarer la variable en dehors de la boucle forEach
    
        listElements.forEach(el => {
            el.addEventListener('click', () => {
                elSelected.push(el.innerText);
                // console.log(elSelected);
                return elSelected;
            });
        });
    }


    allElSelected(){
        const ing = this.elSelected('ingredients');
        console.log(ing);
     
     
    }
}