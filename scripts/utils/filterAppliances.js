export function filterByAppliances(recipes){
    const btnToFilter = document.querySelector('#btn-filter-appliances');
    const crossToDelete = document.querySelector('.deleteData-appliances' );
    let elements = [];

    let regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{1,30}$/;



    function displayElementsAppliances(){
        /** Loop for get all elements in recipes array*/
        for(let i = 0 ; i < recipes.length ; i++){
            let arrayAppliance = recipes[i].appliance;
            getListElements( arrayAppliance);
        }

        /** Inserting list of utensils into the filter div */
        const element =  createListOfElements('filter-appliances-list' , elements);
        document.querySelector('.main_filter-bar-appliances').appendChild(element);

    }

    displayElementsAppliances();


    function getListElements(arrayEl){    
        /** remove duplicates */
        if(!elements.includes(arrayEl)){
            elements.push(arrayEl); 
            elements.sort((a, b) => a.localeCompare(b));
        
        }
    }
    console.log(elements);

    function createListOfElements(classUl, elements){
        const ul = document.createElement('ul');
        ul.classList.add(`${classUl}`);
        for(let el of elements){
            /** creation of a li for each utensil */
            const li = document.createElement('li');
            li.innerText = `${el}`;
            li.classList.add("appliances");
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        return ul;
    }


    /** filter the utensils from the data inserted in the input*/
    const input = document.querySelector('#filter-sort-appliances');
    const elementsToFilter = document.querySelectorAll('.appliances');
  

    function displayListFiltered(){
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
    }

    displayListFiltered();
    displayTag();



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

    function displayTag(){

    
        //  1 - Je récupère la liste des ingrédients ou appareil ou ustensiles qui n'ont plus la class hidden


        // 2 - Au clic d'un des éléments, on va créer un tag "bouton" qui apparaitra au dessus de liste, il aura une croix pour le supprimer
        // 3 -  récupérer les recettes qui contiennent le tag en question
        // 4 -  afficher les recettes
        // 5 -  récupère les appareils dans ces recettes
        // 6 -  affiche les appareils dans la liste, 
        // 7 -  récupère les ustensiles dans les recettes
        // 8 -  affiche les ustensiles


        elementsToFilter.forEach(elSelected => {
            if(!elSelected.classList.contains("hidden")){
                    
                elSelected.addEventListener('click', () => {
    
                    const mainTag = document.createElement('div');
                    mainTag.classList.add('main_Tag-Appliances');

                    const tag = document.createElement('div');
                    tag.classList.add('tag-Appliance');

                    const textEl = document.createElement('p');
                    textEl.classList.add('tag-Appliance-p');
                    textEl.innerText =  `${elSelected.innerText}`; 

                    const deleteTag= document.createElement('span');
                    deleteTag.classList.add('tag-Appliance-delete');
                    
                    tag.appendChild(textEl);
                    tag.appendChild(deleteTag);
            
                    mainTag.appendChild(tag);

                    document.querySelector('.main_tag').appendChild(mainTag);

                    elementsToFilter.forEach(elToDisplay => {
                        elToDisplay.classList.remove('hidden');
                        input.value = '';
                    })
                    
                });
            }
        });
 

    }


    // displayRecipesByFilters();

}