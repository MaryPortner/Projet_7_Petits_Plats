export function deleteDataInput(){
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
            cross.style.display = "none";
        });  
    }

    deleteDatas(inputData[0], crossToDelete[0]);
    deleteDatas(inputData[1], crossToDelete[1]);
    deleteDatas(inputData[2], crossToDelete[2]);
    deleteDatas(inputData[3], crossToDelete[3]);
}



// for(let i ; i < inputData.length; i++){
//     for( let j ; j < crossToDelete.length; j ++){
//         inputData[i].addEventListener('input', () => {
//             crossToDelete[j].style.display = "block";
//         });
//         crossToDelete[j].addEventListener('click', () => {
//             inputData[i].value = '';
//             crossToDelete[j].style.display = "none";
//         }); 

//     }
// }