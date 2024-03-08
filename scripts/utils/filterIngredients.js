export function filterByIngredients(recipes){

    // let arrayAllElements = [];
    const btnToFilter = document.querySelector('#btn-filter-ingredients');
    const crossToDelete = document.querySelector('.deleteDataIngredients' );
    let elements = [];
    // let regex = /^[^A-Z-É]*$/;




    displayElementsIngredients();

    function displayElementsIngredients(){
        /** Loop for get all elements in recipes array*/
        let arrayIngredient = [];
        for(let i = 0 ; i < recipes.length ; i++){
            let AllIngredients = recipes[i].ingredients[0].ingredient;
            console.log(AllIngredients);
            arrayIngredient.push(AllIngredients);
        }
        getListElements(arrayIngredient);
        /** Inserting list of utensils into the filter div */
        const element =  displayListOfElements('filter-ingredients-list' , elements);
        document.querySelector('.main_filter-bar-ingredients').appendChild(element);
    }

    function getListElements(arrayEl){  
        for(let i = 0 ; i < arrayEl.length ; i++){

            /** remove duplicates */
            if( !elements.includes(arrayEl[i])){
                elements.push(arrayEl[i]); 
            } 
        }  
    }


    function displayListOfElements(classUl, elements){
        const ul = document.createElement('ul');
        ul.classList.add(`${classUl}`);
        for(let el of elements){
            /** creation of a li for each utensil */
            const li = document.createElement('li');
            li.innerHTML = `${el}`;
            li.classList.add("ingredients");
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        return ul;
    }


    /** filter the utensils from the data inserted in the input*/
    const input = document.querySelector('#filter-sort-ingredients');
    const typeToFilter = document.querySelectorAll('.ingredients');

    input.addEventListener('input', () => {
        const inputValue =  input.value.toLowerCase().trim();
        typeToFilter.forEach(filterEl => {
            const textContentFilter = filterEl.textContent.toLowerCase().trim();
            if(textContentFilter.includes(inputValue)){
                filterEl.classList.remove('hidden');
            }else {
                filterEl.classList.add('hidden');
            }
            resetDatas(filterEl);
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