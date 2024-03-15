export function deleteDataInput(name){
    const crossToDelete = document.querySelector(`.deleteData-${name}`);
    const inputData = document.querySelector(`#filter-sort-${name}`);
    const btnDropdown = document.querySelector(`#btn-display-dropdown-${name}`);


    btnDropdown.addEventListener('click', () =>{
        inputData.value = '';
    })

       /** Clicking on the cross erases the data and undisplays the cross */
       crossToDelete.addEventListener('click', () => {
        inputData.value = '';
        crossToDelete.style.display = "none";
    });

    /** if data is inserted into the input, the cross is displayed */
    inputData.addEventListener('input', () => {
        crossToDelete.style.display = "block";
    });
}

