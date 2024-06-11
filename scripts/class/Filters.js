
export class Filters {

    constructor(recipes){
        this.recipes = recipes;
    }


    /** Create list of elements for dropdown - Section filters - */
    createListOfElements(name, elements){
        const classUl = `filter-${name}-list` ;
        const ul = document.createElement('ul');
        ul.classList.add(`${classUl}`);

        for(let el of elements){
            /** creation of a li for each element */
            const li = document.createElement('li');
            li.innerText = `${el}`;
            li.classList.add(name);
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        }
        
        return ul;
    }


    /** displays the list of elements matching the entry in the input */
    displayListElFiltered(name){
        /** filter data based on the element inserted into the input*/
        const btnDisplayDropdown = document.querySelector(`#btn-display-dropdown-${name}`);
        const crossToDelete = document.querySelector(`.deleteData-${name}`);
        const elementsToFilter = document.querySelectorAll('.' + name);
        const input = document.querySelector(`#filter-sort-${name}`);
        const regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{3,30}$/;

        input.addEventListener('input', () => {
            /** to lowercase and remove spaces of the element entered in the input*/
            const inputValue =  input.value.toLowerCase().trim();
            /** check data entry */
            if(regex.test(inputValue)){
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

                    /** Clicking on the cross erases the data and undisplays the cross */
                    crossToDelete.addEventListener('click', () => {
                        elFiltered.classList.remove('hidden');
                    }); 

                    /** redisplays the data list if you empty the search field */
                    btnDisplayDropdown.addEventListener('click', () => {
                        input.value = '';
                        elFiltered.classList.remove('hidden');
                        crossToDelete.style.display = 'none';
                    }); 
                }
            }

            if (inputValue == ''){
                /** displays the element corresponding to the input value */
                elementsToFilter.forEach(el =>{
                    el.classList.remove('hidden');
                })
            }
        });
    }


    getElSelected(name){
        let elSelect = new Set();
        let elSelected;
        const listElements = document.querySelectorAll(`.${name}`);
        listElements.forEach(el => { 
            el.addEventListener('click', () => {
            /** save elements selected */
                elSelect.add(el.innerText.toLowerCase());
                elSelected = Array.from(elSelect);
                console.log(elSelected);
                return elSelected;
           
            });
        })
    }
        




}