export function deleteDataInput(){
    const crossToDelete = document.querySelectorAll('.deleteDataIngredients, .deleteDataAppareils, .deleteDataUtensils, .header_delete-main');
    console.log(crossToDelete);
    // const crossToDelete = document.querySelector('.header_delete-main');
    // const crossToDeleteIngredient = document.querySelector('.deleteDataIngredients');
    // const crossToDeleteAppareils = document.querySelector('.deleteDataAppareils');
    // const crossToDeleteUtensils = document.querySelector('.deleteDataUtensils');
    
    const inputData = document.querySelectorAll('#filter-sort-ingredients, #filter-sort-appareils, #filter-sort-utensils, #search-q');
    // const inputHeader = document.querySelector('#search-q');


    for (let el of inputData){

        for(let elToDelete of crossToDelete){
            /** if data is inserted into the input, the cross is displayed */
            el.addEventListener('input', () => {
                elToDelete.style.display = "block";
            });

            /** Clicking on the cross erases the data and undisplays the cross */
            elToDelete.addEventListener('click', () => {
                el.value = '';
                elToDelete.style.display = "none";
            });  
        }
    }
}



// export  function deleteDataInputFilterAndSearchbar(){

//     const crossToDelete = document.querySelector('.header_delete-main');
//     const crossToDeleteIngredient = document.querySelector('.deleteDataIngredients');
//     const crossToDeleteAppareils = document.querySelector('.deleteDataAppareils');
//     const crossToDeleteUtensils = document.querySelector('.deleteDataUtensils');
    
//     const inputDataIngredient = document.querySelector('#filter-sort-ingredients');
//     const inputDataAppareils = document.querySelector('#filter-sort-appareils');
//     const inputDataUtensils = document.querySelector('#filter-sort-utensils');
//     const inputDataHeader = document.querySelector('#search-q');

//     function deleteDataInput(inputFilters, cross){

//         // const crossToDeleteHeader = document.querySelector('div#header_search .header_delete-main');
//         // const inputDataHeader = document.querySelector('#search-q');
    
    
    
//         for (let el of inputFilters){
    
//             for(let elToDelete of cross){
//                 /** if data is inserted into the input, the cross is displayed */
//                 el.addEventListener('input', () => {
//                     elToDelete.style.display = "block";
//                 });
    
//                 /** Clicking on the cross erases the data and undisplays the cross */
//                 elToDelete.addEventListener('click', () => {
//                     el.value = '';
//                     elToDelete.style.display = "none";
//                 });  
//             }
//         }


 
//                 /** if data is inserted into the input, the cross is displayed */
//                 inputFilters.addEventListener('input', () => {
//                    cross.style.display = "block";
//                 });
    
//                 /** Clicking on the cross erases the data and undisplays the cross */
//                 cross.addEventListener('click', () => {
//                     inputFilters.value = '';
//                     cross.style.display = "none";
//                 });  
            
//         }
//         deleteDataInput(inputDataHeader,crossToDelete);
//         deleteDataInput(inputDataIngredient, crossToDeleteIngredient);
//         deleteDataInput(inputDataAppareils, crossToDeleteAppareils);
//         deleteDataInput(inputDataUtensils, crossToDeleteUtensils);


//     }