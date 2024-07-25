export class SearchBar{

    constructor(list){
        this.list = list;
        this.recipes = list.recipes;
        this.recipesFiltered = [];
        this.init(); 

    }


    createTag(el, input){
        console.log(el);
        console.log(input);
        const tag = document.createElement('div');
        tag.classList.add(`tag-${el}`);
    
        const textEl = document.createElement('p');
        textEl.classList.add(`tag-${el}-p`);
        textEl.innerText =  `${input}`; 
    
        const crossToDeleteTag = document.createElement('span');
        crossToDeleteTag.classList.add('tag-delete');
  
        /** Delete tag and display el */
        // crossToDeleteTag.addEventListener('click', () => {
        //     tag.remove();
        //     // const index = this.selection.findIndex(a => a === input.innerText);
        //     // this.selection.splice(index, 1);

        //     // console.log(this.selection);
        //     input.style.display = 'block';
        //     // /* updating the selection after deleting the tag */
        //     // this.list.filtered = this.list.recipes; // reset list
        //     // this.list.filterRecipes();
        //     // this.list.updateCounterRecipes();
        // });
    
        tag.appendChild(textEl);
        tag.appendChild(crossToDeleteTag);
    
        return tag;
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


    // Récupérer la liste 
    // chercher l'input qui correspond à un élément de la liste
    // le supprimer de la liste

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

    // afficher le tag de l'élement supprimé (listEl)



    displayTag(){

        const input = document.querySelector('#search-q').value.toLowerCase().trim();
        const submit = document.querySelector('button.search-submit');
        const list = ['.appliances', '.ingredients', '.ustensils'];

        list.forEach(el => {
            console.log(`${el}`);

            submit.addEventListener('click', () => {
                // e.preventDefault();

                const listElements = document.querySelectorAll(`${el}`);
                const mainFilter = document.querySelector(`#main_filter-${el}-wrapper`);
                const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');


                console.log(listElements);
                console.log(input)

                console.log(listElements.includes(input))
                if(listElements.includes(input)){
                    /** Create Tag */
                    mainTagWrapper.appendChild(this.createTag( `${el}`, input));
                    /** hide list elements  */
                    document.querySelector(`#main_filter-bar-${el}`).classList.toggle('displayBlock');                            
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
    
        const input = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');

        submit.addEventListener("click", (e) => {
            e.preventDefault();

            this.getRecipes(this.list.filtered);

           // puts this.recipesFiltered as a parameter of the filter function of the RecipesFiltered class
            this.list.filterRecipes(this.recipesFiltered);
            this.deleteInputOfList();
            this.displayTag();
            this.createTag();
            input.value = '';

        });

    }
}