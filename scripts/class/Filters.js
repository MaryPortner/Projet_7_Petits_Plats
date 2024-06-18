
export class Filters {

    // static elcliked = [];

    constructor(recipes){
        this.recipes = recipes;
        // this.elcliked = [];
     
    }


    /** Create list of elements for dropdown - Section filters - */
    createListOfElements(name, elements){
        const classUl = `filter-${name}-list` ;
        const ul = document.createElement('ul');
        ul.classList.add(`${classUl}`);

        elements.forEach(el => {
            /** creation of a li for each element */
            const li = document.createElement('li');
            li.innerText = `${el}`;
            li.classList.add(name);
            li.setAttribute('tabindex', 0);

            ul.appendChild(li);
        });
        
        return ul;
    }


    createTag(name, el){
        const tag = document.createElement('div');
        tag.classList.add(`tag-${name}`);
    
        const textEl = document.createElement('p');
        textEl.classList.add(`tag-${name}-p`);
        textEl.innerText =  `${el.innerText}`; 
    
        const crossToDeleteTag = document.createElement('span');
        crossToDeleteTag.classList.add('tag-delete');
  
        /** Delete tag and display el */
        crossToDeleteTag.addEventListener('click', () => {
            tag.remove();
            el.style.display = 'block';
        });
    
        tag.appendChild(textEl);
        tag.appendChild(crossToDeleteTag);
    
        return tag;
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


    
    displayTag(name){
        const listElements = document.querySelectorAll(`.${name}`);
        const mainFilter = document.querySelector(`#main_filter-${name}-wrapper`);
        const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');

        listElements.forEach(el => { 
            el.addEventListener('click', () => {
                /** Create Tag */
                mainTagWrapper.appendChild(this.createTag(name, el));
                /** remove el of list elements */
                el.style.display = 'none';
                /** hide list elements  */
                document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');     
            });
           
        })
      
    }

}