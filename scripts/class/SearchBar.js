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





    search(needle, recipes){

        // const input = document.querySelector(`#search-q`);
     
        const removeAccents = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //remove accents and special characters 
        const research = removeAccents(needle);
        // this.recipesFiltered = [];  // delete previous results
        

        if (research.length < 3){
            console.log('La recherche doit comporter au moins 3 caractères');
            return recipes;
        }

           const list = [];

        recipes.forEach(recipe => {

            let arrayIng = recipe.ingredients;
            let description = removeAccents(recipe.description.toLowerCase());
            let ing = [];
            let name = removeAccents(recipe.name.toLowerCase());


              // Create an array of ingredients per recipe
              arrayIng.forEach(ingredient => {
                ing.push(removeAccents(ingredient.ingredient.toLowerCase()));
            });

            if ( ing.includes(research) || name.includes(research) || description.includes(research)) {
                list.push(recipe);
            } 
        });

        return list;

    }


    init(){
    
        const input = document.querySelector(`#search-q`);
 
        input.addEventListener("input", (e) => {
            e.preventDefault();
            this.list.filterRecipes(input.value);
        });

    }
}