// update number of recipes
export function updateCounterRecipes(){
        const recipesContainer = document.querySelector('#main_allRecipes');
        /** get number of recipes displayed */
        let numberRecipes = recipesContainer.childElementCount; 
        /** update display number of recipes */
        document.querySelector('.numberRecipes').innerText = numberRecipes;
    }