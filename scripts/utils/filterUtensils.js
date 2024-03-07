export function filterByElements(recipes){

    // let arrayAllElements = [];
    const btnToFilter = document.querySelector('#btn-filter-ustensiles');
    const crossToDelete = document.querySelector('.deleteDataUtensils' );
    let elements = [];
    // let filterBy = ["ustensils", "ingredients.ingredient", "appliance"];

    // const mainFilterBarUstensiles = document.querySelector('.main_filter-bar-ustensiles');
    let regex = /^[^A-Z-É]*$/;
    const ul = document.createElement('ul');




    let arrayAllIngredients = [];
    let arrayIngredient = [];

    let arrayApplianceEl = [];


    function displayElementsUtensiles(){
        /** Loop for get all elements in recipes array*/
        for(let i = 0 ; i < recipes.length ; i++){
            let arrayAllUstensil = recipes[i].ustensils;
            getListElements( arrayAllUstensil);
        }
        /** Inserting list of utensils into the filter div */
        const element =  displayListOfElements('filter-ustensiles-list' ,elements);
        document.querySelector('.main_filter-bar-ustensiles').appendChild(element);

        // displayListOfElements('filter-ustensiles-list' ,elements);

        console.log(elements);
    }

    displayElementsUtensiles();



    function displayElementsIngredients(){
        let arrayIngredient = [];
        for(let i = 0 ; i < recipes.length ; i++){
            let arrayAllIngredients = recipes[i].ingredients[0].ingredient;
            arrayIngredient.push(arrayAllIngredients);
          
            
            getListElements( arrayIngredient);
        }
        console.log(arrayIngredient);
    }


    displayElementsIngredients()





    function getListElements(arrayEl){    
        for (let j = 0 ; j < arrayEl.length ; j++){
            /** remove duplicates */
            if(!elements.includes(arrayEl[j]) && (regex.test(arrayEl[j]))){
                elements.push(arrayEl[j]); 
            }
        } 
    }


  
    
    function displayListOfElements(classUl, elements){
  
        ul.classList.add(`${classUl}`);
        for(let el of elements){
            /** creation of a li for each utensil */
            const li = document.createElement('li');
            li.innerHTML = `${el}`;
            li.classList.add("utensil");
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        return ul;
    }


    /** filter the utensils from the data inserted in the input*/
    const input = document.querySelector('#filter-sort-utensils');
    const typeToFilter = document.querySelectorAll('.utensil');

    input.addEventListener('input', () => {
        const inputValue =  input.value.toLowerCase().trim();
        typeToFilter.forEach(utensilEl => {
            const utensil = utensilEl.textContent.toLowerCase().trim();
            if(utensil.includes(inputValue)){
                utensilEl.classList.remove('hidden');
            }else {
                utensilEl.classList.add('hidden');
            }
            resetDatas(utensilEl);
        }); 
    });



    function resetDatas(el){
    
         /** redisplays the data list if you empty the search field */
         crossToDelete.addEventListener('click', () => {
            el.classList.remove('hidden');
        }); 

        /** Clicking on the cross erases the data and undisplays the cross */
        btnToFilter.addEventListener('click', () => {
            input.value = '';
            el.classList.remove('hidden');
            crossToDelete.style.display = 'none';
        });  
    }
}


