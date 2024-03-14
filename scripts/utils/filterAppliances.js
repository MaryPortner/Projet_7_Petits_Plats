let elements = [];
const name = 'appliances';
const input = document.querySelector(`#filter-sort-${name}`);

export function filterAppliances(recipes){
    elements = collect(recipes);
    
    /** Inserting list of utensils into the filter div */
    const element =  createListOfElements(elements);
    document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

    displayListElFiltered();
    displayTag();

    // displayRecipesByFilters();

}

function collect(recipes){
    /** The Set object lets you store unique values of any type, whether primitive values or object references */
    const list = new Set();
    let arrayList;
    /** Loop for get all elements in recipes array*/
    for(let i = 0 ; i < recipes.length ; i++){
        /** The add() method of Set () inserts a new element with a specified value in to this set, if there isn't an element with the same value already in this set  <=> push */
        list.add(recipes[i].appliance);
            /** sort alphabetically */
        arrayList = [...list].sort();
    }
    return arrayList;
 }


function createListOfElements(elements){
    const classUl = `filter-${name}-list` ;
    const ul = document.createElement('ul');
    ul.classList.add(`${classUl}`);
    for(let el of elements){
        /** creation of a li for each utensil */
        const li = document.createElement('li');
        li.innerText = `${el}`;
        li.classList.add(name);
        li.setAttribute('tabindex', 0);

        ul.appendChild(li);
    }
    return ul;
}


function displayListElFiltered(){
    /** filter data based on the element inserted into the input*/
    const elementsToFilter = document.querySelectorAll('.' + name);
    const regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{1,30}$/;

    input.addEventListener('input', () => {
        /** to lowercase and remove spaces of the element entered in the input*/
        const inputValue =  input.value.toLowerCase().trim();
        /** check data entry */
        if(regex.test(input.value)){
            /** loop over each filter element */
            for (let elFiltered of elementsToFilter)  {
                /** lowercase and remove spaces from element */
                const textContentFilter = elFiltered.textContent.toLowerCase().trim();
                if(textContentFilter.includes(inputValue)){
                    /** displays the element corresponding to the input value */
                    elFiltered.classList.remove('hidden');
                }else {
                    elFiltered.classList.add('hidden');
                }
                resetDatas(elFiltered);
            }
        }
    });
}


function resetDatas(el){
    const btnDisplayDropdown = document.querySelector(`#btn-display-dropdown-${name}`);
    const crossToDelete = document.querySelector(`.deleteData-${name}`);
        /** Clicking on the cross erases the data and undisplays the cross */

    crossToDelete.addEventListener('click', () => {
        el.classList.remove('hidden');
    }); 

    /** redisplays the data list if you empty the search field */
    btnDisplayDropdown.addEventListener('click', () => {
        input.value = '';
        el.classList.remove('hidden');
        crossToDelete.style.display = 'none';
    });  
}


function displayTag(){
    const listElements = document.querySelectorAll('.' + name);
    const dropdown = document.querySelector('.filter-bar-single');
 

    // 1 - Je récupère la liste des ingrédients ou appareil ou ustensiles qui n'ont plus la class hidden
    // 2 - Au clic d'un des éléments, on va créer un tag "bouton" qui apparaitra au dessus de liste, il aura une croix pour le supprimer
    // 3 -  récupérer les recettes qui contiennent le tag en question
    // 4 -  afficher les recettes
    // 5 -  récupère les appareils dans ces recettes
    // 6 -  affiche les appareils dans la liste, 
    // 7 -  récupère les ustensiles dans les recettes
    // 8 -  affiche les ustensiles

    for(let elSelected of listElements){
        /** if the input is not empty  */
        if(!elSelected.classList.contains("hidden")){
                
            elSelected.addEventListener('click', () => {
                const mainTag = document.createElement('div');
                mainTag.classList.add(`main_Tag-${name}`);

                const tag = document.createElement('div');
                tag.classList.add(`tag-${name}`);

                const textEl = document.createElement('p');
                textEl.classList.add(`tag-${name}-p`);
                textEl.innerText =  `${elSelected.innerText}`; 

                const deleteTag = document.createElement('span');
                deleteTag.classList.add(`tag-${name}-delete`);
                
                tag.appendChild(textEl);
                tag.appendChild(deleteTag);

                mainTag.appendChild(tag);

                document.querySelector('.main_tag').appendChild(mainTag);


                elSelected.classList.remove('hidden');
                input.value = '';
                /** removes the displayed tag from the list of elements */
                elSelected.style.display = 'none'; 
                dropdown.style.display = 'none'; 

/** */
                deleteTag.addEventListener('click', () => {
                    mainTag.style.display = 'none';
                    elSelected.style.display = 'block';
                });                        
            });


          
         

        


          
        }
    }
}






// const dropdown = document.querySelector('.filter-bar-single');
// for(let elToDisplay of elementsToFilter){
//     elToDisplay.classList.remove('hidden');
// //     input.value = '';
// }

// deleteTag.addEventListener('click', () => {
//     elSelected.style.display = 'block';
//     mainTag.style.display = 'none';
// })

 

// elSelected.classList.remove('hidden');
// input.value = '';
// elSelected.style.display = 'none';
// dropdown.style.display = 'none';
