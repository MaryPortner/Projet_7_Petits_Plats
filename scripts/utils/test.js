export function filterByUtensils(recipes){
    let arrayAllUtensils = [];
    const btnToFilter = document.querySelector('#btn-filter-ustensiles');
    const mainFilterBarUstensiles = document.querySelector('.main_filter-bar-ustensiles');
    const crossToDelete = document.querySelector('.deleteDataUtensils' );
    let regex = /^[^A-Z-É]*$/;
    let utensils = [];
    // const input = document.querySelector('#filter-sort-utensils');
    // const ustensils = document.querySelectorAll('.utensil');

    

    /** Loop for get all utensils in recipes array*/
    for (let i = 0 ; i < recipes.length ; i++){
        arrayAllUtensils = recipes[i].ustensils;
        /** Loop to insert all the utensils in a array*/
        for (let j = 0 ; j < arrayAllUtensils.length ; j++){
            /** remove duplicates */
            if(!utensils.includes(arrayAllUtensils[j]) && (regex.test(arrayAllUtensils[j]))){
                utensils.push(arrayAllUtensils[j]);
            }
        }
    }

    

    /** Inserting list of utensils into the filter div */
    const element = displayListOfUstensils(utensils);
    mainFilterBarUstensiles.appendChild(element);
    
    function displayListOfUstensils(utensils){
        const listToCreate = document.createElement('ul');
        listToCreate.classList.add('filter-bar-ustensiles-list');
        for (let el of utensils){
            /** creation of a li for each utensil */
            const utensil = document.createElement('li');
            utensil.innerHTML = `${el}`;
            utensil.classList.add("utensil");
            utensil.setAttribute('tabindex', 0);

            listToCreate.appendChild(utensil);
        }
        return listToCreate;
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
            console.log(input.value);
            input.value = '';
            el.classList.remove('hidden');
            crossToDelete.style.display = 'none';
        });  
    }
}


















export function filterByElements(recipes){

   
    let regex = /^[^A-Z-Â-É]*$/;
    const ul = document.createElement('ul');

    let arrayAllIngredients = [];
    let arrayIngredient = [];

    let arrayApplianceEl = [];

    const btnToFilter = document.querySelector('#btn-filter-ustensiles');
    const crossToDelete = document.querySelector('.deleteDataUtensils');


    function displayElementsUtensiles(){
        
       
        let elements = [];
    

        /** Loop for get all elements in recipes array*/
        for(let i = 0 ; i < recipes.length ; i++){
            let arrayAllUstensil = recipes[i].ustensils;
            getListElements(arrayAllUstensil, elements );
        }

        /** Inserting list of utensils into the filter div */
        const element =  displayListOfElements('filter-ustensiles-list', elements);
        document.querySelector('.main_filter-bar-ustensiles').appendChild(element);

        /** filter the utensils from the data inserted in the input*/
        displayFilteredEl();
    }

    displayElementsUtensiles();


    // function displayElementsIngredients(){
    //     let arrayIngredient = [];
    //     for(let i = 0 ; i < recipes.length ; i++){
    //         let arrayAllIngredients = recipes[i].ingredients[0].ingredient;
    //         arrayIngredient.push(arrayAllIngredients);
            
    //         getListElements(arrayIngredient);
    //     }
    //     console.log(arrayIngredient);
    // }


    // displayElementsIngredients()





    function getListElements(arrayEl, arrayElements){    
        for (let j = 0 ; j < arrayEl.length ; j++){
            /** remove duplicates */
            if(!arrayElements.includes(arrayEl[j]) && (regex.test(arrayEl[j]))){
                arrayElements.push(arrayEl[j]); 
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


    const inputUtensils = document.querySelector('#filter-sort-utensils');
    const typeToFilter = document.querySelectorAll('.utensil');
    function displayFilteredEl(){
        /** filter the utensils from the data inserted in the input*/
        typeToFilter.addEventListener('input', () => {
            const inputValue =  inputUtensils.value.toLowerCase().trim();
            /** get the list of elements matching the input */ 
            typeToFilter.forEach(el => {
                const utensil = el.textContent.toLowerCase().trim();
                /** get the list of elements matching the input */
                if(utensil.includes(inputValue)){
                    el.classList.remove('hidden');
                }else {
                    el.classList.add('hidden');
                }

                resetDatas(el);
            }); 
        });
    }


    function resetDatas(el){
        
        /** redisplays the data list if you empty the search field */
        crossToDelete.addEventListener('click', () => {
            el.classList.remove('hidden');
        }); 

        /** Clicking on the cross erases the data and undisplays the cross */
        btnToFilter.addEventListener('click', () => {
        
            el.value = '';
            el.classList.remove('hidden');
            crossToDelete.style.display = 'none';
        });  
    }



    // function resetDatas(cross, btn){
    // //     /** redisplays the data list if you empty the search field */
    // //     cross.addEventListener('click', () => {
    // //         el.classList.remove('hidden');
    // //     }); 

    // //     /** Clicking on the cross erases the data and undisplays the cross */
    // //     btn.addEventListener('click', () => {
    // //         inputEvent.value = '';
    // //         el.classList.remove('hidden');
    // //         cross.style.display = 'none';
    // //     }); 


    //   /** redisplays the data list if you empty the search field */
    //   cross.addEventListener('click', () => {
    //     console.log('1 ça fonctionne');
    //     // el.classList.remove('hidden');
    // }); 

    // /** Clicking on the cross erases the data and undisplays the cross */
    // btn.addEventListener('click', () => {
    //     console.log('2 ça fonctionne');
    //     // inputEvent.value = '';
    //     // el.classList.remove('hidden');
    //     // cross.style.display = 'none';
    // });    
     
    // }





    function deleteDataInput(el){
        const crossToDelete = document.querySelectorAll('.header_delete-main, .deleteDataIngredients, .deleteDataAppareils, .deleteDataUtensils' );
        const inputData = document.querySelectorAll('#search-q, #filter-sort-ingredients, #filter-sort-appareils, #filter-sort-utensils ');
        function deleteDatas(input, cross){

            /** if data is inserted into the input, the cross is displayed */
            input.addEventListener('input', () => {
                cross.style.display = "block";
            });
    
            /** Clicking on the cross erases the data and undisplays the cross */
            cross.addEventListener('click', () => {
                input.value = '';
                el.classList.remove('hidden');
                cross.style.display = "none";
            });  
        }
    
        deleteDatas(inputData[0], crossToDelete[0]);
        deleteDatas(inputData[1], crossToDelete[1]);
        deleteDatas(inputData[2], crossToDelete[2]);
        deleteDatas(inputData[3], crossToDelete[3]);
    }
}



