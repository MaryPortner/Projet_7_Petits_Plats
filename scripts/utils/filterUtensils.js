export function filterByElements(recipes){

    // let arrayAllElements = [];
    const btnToFilter = document.querySelector('#btn-filter-ustensiles');
    const crossToDelete = document.querySelector('.deleteDataUtensils' );
    let elements = [];

    let regexEl = /^[^A-Z-É]*$/;
    let regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{1,30}$/;
    

    function displayElementsUtensiles(){
        /** Loop for get all elements in recipes array*/
        for(let i = 0 ; i < recipes.length ; i++){
            let arrayAllUstensil = recipes[i].ustensils;
            getListElements(arrayAllUstensil);
        }
        /** Inserting list of utensils into the filter div */
        const element =  displayListOfElements('filter-ustensiles-list' , elements);
        document.querySelector('.main_filter-bar-ustensiles').appendChild(element);

    }

    displayElementsUtensiles();


    function getListElements(arrayEl){    
        for (let i = 0 ; i < arrayEl.length ; i++){
            /** remove duplicates */
            if(!elements.includes(arrayEl[i]) && (regexEl.test(arrayEl[i]))){
                elements.push(arrayEl[i]); 
                elements.forEach((item, i) => { if (item == 'moule à tartelettes (6)') elements[i] = 'moule à tartelettes'; });
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
            li.classList.add("utensil");
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        return ul;
    }


    /** filter the utensils from the data inserted in the input*/
    const input = document.querySelector('#filter-sort-utensils');
    const elementsToFilter = document.querySelectorAll('.utensil');

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