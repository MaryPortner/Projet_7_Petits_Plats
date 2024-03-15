export function displayListElFiltered(name){
    /** filter data based on the element inserted into the input*/
    const btnDisplayDropdown = document.querySelector(`#btn-display-dropdown-${name}`);
    const crossToDelete = document.querySelector(`.deleteData-${name}`);
    const elementsToFilter = document.querySelectorAll('.' + name);
    const input = document.querySelector(`#filter-sort-${name}`);
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
    });
}
