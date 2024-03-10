export function filterByIngredients(recipes){

    // let arrayAllElements = [];
    const btnToFilter = document.querySelector('#btn-filter-ingredients');
    const crossToDelete = document.querySelector('.deleteDataIngredients' );
    let elements = [];
    let regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{1,30}$/;




    displayElementsIngredients();

    function displayElementsIngredients(){
        /** Loop for get all elements in recipes array*/
        let arrayIngredient = [];
        for(let i = 0 ; i < recipes.length ; i++){
            let AllIngredients = recipes[i].ingredients[0].ingredient;
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
            li.innerText = `${el}`;
            li.classList.add("ingredients");
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        return ul;
    }


    /** filter the utensils from the data inserted in the input*/
    const input = document.querySelector('#filter-sort-ingredients');
    const elementsToFilter = document.querySelectorAll('.ingredients');

    input.addEventListener('input', () => {
        /** lowercase and remove spaces from input value */
        const inputValue =  input.value.toLowerCase().trim();
        /** check data entry */
        if(regex.test(input.value)){
            /** lloop over each filter element */
            elementsToFilter.forEach(elFiltered => {
                /** lowercase and remove spaces from element */
                const textContentFilter = elFiltered.textContent.toLowerCase().trim();
                if(textContentFilter.includes(inputValue)){
                    /** displays the element corresponding to the input value */
                    elFiltered.classList.remove('hidden');
                }else {
                    elFiltered.classList.add('hidden');
                }
                resetDatas(elFiltered);
            }); 
        }
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