import { list } from "../pages/index.js";

export class Filters {

    constructor(list, name){
        this.list = list;
        this.name = name;
        this.filterRecipe = list.filterRecipes();
        // this.name retrieves the name in the constructor of the inheriting class ex: super(list, 'appliances');  
    }
    

    /** Create list of elements for dropdown - Section filters - */
    createListOfElements(name, elements){
        const classUl = `filter-${name}-list`;

        // empty list if exists
        let getUl = document.querySelector(`.${classUl}`);
        if (getUl) {
            getUl.remove();
        }

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


    createTag(el){
        const tag = document.createElement('div');
        tag.classList.add(`tag-${this.name}`);
    
        const textEl = document.createElement('p');
        textEl.classList.add(`tag-${this.name}-p`);
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


    deleteDataInput(){
        const btnDropdown = document.querySelector(`#btn-display-dropdown-${this.name}`);
        const crossToDelete = document.querySelector(`.deleteData-${this.name}`);
        const crossToDeleteMain = document.querySelector(`.deleteData`);
        const inputData = document.querySelector(`#filter-sort-${this.name}`);
        const inputMain = document.querySelector(`#search-q`);
        const submit = document.querySelector('button.search-submit');
    
        btnDropdown.addEventListener('click', () =>{
            inputData.value = '';
        })
    
        /** Clicking on the cross erases the data and undisplays the cross */
        crossToDelete.addEventListener('click', () => {
            inputData.value = '';
            crossToDelete.style.display = "none";
        });
    
        crossToDeleteMain.addEventListener('click', () => {
            inputMain.value = '';
            crossToDeleteMain.style.display = "none";
        });
    
        /** if data is inserted into the input, the cross is displayed */
        inputData.addEventListener('input', () => {
            crossToDelete.style.display = "block";
        });
    
        /** if data is inserted into the input, the cross is displayed */
        inputMain.addEventListener('input', () => {
            crossToDeleteMain.style.display = "block";
        });
    
        submit.addEventListener('click', (e) => {
           e.preventDefault();
        })
    }

    // deleteListElement(){
    //     document.getElementById("main_filter-bar-appliances").removeChild(document.getElementById("main_filter-bar-appliances").children[1]);
    //     document.getElementById("main_filter-bar-ingredients").removeChild(document.getElementById("main_filter-bar-ingredients").children[1]);
    //     document.getElementById("main_filter-bar-ustensils").removeChild(document.getElementById("main_filter-bar-ustensils").children[1]);
    // }


    display(){
        /** Create list elements and display it */
        const element =  this.createListOfElements(this.name, this.all);
        document.querySelector(`.main_filter-bar-${this.name}`).appendChild(element);
        this.displayTag();
        this.displayListElFiltered();
    }

    
    /** displays the list of elements matching the entry in the input */
    displayListElFiltered(){
        /** filter data based on the element inserted into the input*/
        const btnDisplayDropdown = document.querySelector(`#btn-display-dropdown-${this.name}`);
        const crossToDelete = document.querySelector(`.deleteData-${this.name}`);
        const elementsToFilter = document.querySelectorAll('.' + this.name);
        const input = document.querySelector(`#filter-sort-${this.name}`);
        const regex = /^[a-zA-ZàâçéèêëôöúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÎÏÔÖÚÙÛÜÆŒ._-\s]{1,30}$/;

        input.addEventListener('input', () => {
            crossToDelete.style.display = 'block';
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
                        input.value = '';
                        elFiltered.classList.remove('hidden');
                    }); 

                    /** redisplays the data list if you empty the search field */
                    btnDisplayDropdown.addEventListener('click', () => {
                        input.value = '';
                        elFiltered.classList.remove('hidden');
                        // crossToDelete.style.display = 'none';
                    }); 
                }
            }

            if (inputValue == ''){
                crossToDelete.style.display = 'none';
                /** displays the element corresponding to the input value */
                elementsToFilter.forEach(el =>{
                    el.classList.remove('hidden');
                })
            }
        });
    }


    displayTag(){
        const listElements = document.querySelectorAll(`.${this.name}`);
        const mainFilter = document.querySelector(`#main_filter-${this.name}-wrapper`);
        const mainTagWrapper = mainFilter.querySelector('.main_Tag-wrapper');

        listElements.forEach(el => { 
            el.addEventListener('click', () => {

                /** Create Tag */
                mainTagWrapper.appendChild(this.createTag(el));
                /** remove el of list elements */
                el.style.display = 'none';
                /** hide list elements  */
                document.querySelector(`#main_filter-bar-${this.name}`).classList.toggle('displayBlock');     
            });         
        })
    }
}