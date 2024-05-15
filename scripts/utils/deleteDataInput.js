export function deleteDataInput(name){
    const btnDropdown = document.querySelector(`#btn-display-dropdown-${name}`);
    const crossToDelete = document.querySelector(`.deleteData-${name}`);
    const crossToDeleteMain = document.querySelector(`.deleteData`);
    const inputData = document.querySelector(`#filter-sort-${name}`);
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

    submit.addEventListener('click', () => {
        crossToDeleteMain.style.display = "none";
    })
}

