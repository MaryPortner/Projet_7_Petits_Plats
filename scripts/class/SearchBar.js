export class SearchBar{

    constructor(list){
        this.list = list;
        this.recipes = list.recipes;
        console.log(this.recipes);
        this.recipesFiltered = [];
     
        // this.filteredBySearchBar = [];
        this.init(); 
    }


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

            // this.filteredBySearchBar = recipesFiltered;
            console.log(this.recipesFiltered);
            // return recipesFiltered;
            if(this.recipesFiltered.length === 0){
                console.log('Aucune recette ne correspond à votre recherche');
            }
            
        };

        filterRecipes();
    }


    init(){
        console.log('tout est ok');
        const input = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            this.getRecipes(this.list.filtered);
            // console.log(recipesFiltered);
            input.value = '';
        });

    }
}
