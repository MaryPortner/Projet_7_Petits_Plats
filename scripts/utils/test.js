// // function removeSelectedElFromList(name, allElSelected){
// //     console.log(name);
// //     // if(name === 'appliances'){

// //     //     removeEl(name);
// //     // }

// //     // if(name === 'ingredients'){

// //     //     removeEl(name);
// //     // }


// //     // if(name === 'ustensils'){
 
// //     //     removeEl(name
     
// //     // }


// //     // const dropdown = document.querySelector(`#main_filter-bar-${name}`);
// //     const listElementsToFilter = document.querySelectorAll('.' + name);
// // //      const getTag = document.querySelectorAll('.tag-' + name);
// // //      let textTag;
// // //       getTag.forEach(tagText => {
// // //         textTag = tagText.innerText.toLowerCase();
// // //         console.log(textTag);
// // //       });

// //     let classList; 
// //    /** removes the displayed tag from the list of elements */
// //     listElementsToFilter.forEach(el => {
// //         classList = el.classList.value;
// //         // console.log(classList);

// //         allElSelected.forEach(selection => {
// //             console.log(selection);
// //             if(el.innerText.toLowerCase().trim() === selection){
// //                 el.style.display = 'none';
// //             }
// //         });
// //         // console.log(name);

// //     });


  


// //     if(name === 'appliances'){

// //         document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
// //     }

// //     if(name === 'ingredients'){

// //         document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
// //     }


// //     if(name === 'ustensils'){
 
// //         document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
     
// //     }


        
  
// // }





// function removeSelectedElFromList(name, allElSelected){

//     const tag = document.querySelectorAll(`.tag-${name}-p`);
//     // console.log(tag);

//     const listElementsToFilter = document.querySelectorAll('.' + name);
//     // console.log( listElementsToFilter);

//     /** removes the displayed tag from the list of elements */
//     listElementsToFilter.forEach(el => {
//         // console.log(el);
//         tag.forEach(selection => {
//             // console.log(selection);
//             // console.log(el.innerText.toLowerCase().trim())
//             if(el.innerText.toLowerCase().trim() === selection.innerText.toLowerCase().trim()){
//                 el.style.display = 'none';
//             }
//         });
//     });

//     // if(name === 'appliances'){
//     //     const listElementsToFilter = document.querySelectorAll('.appliances');

//     //     /** removes the displayed tag from the list of elements */
//     //     listElementsToFilter.forEach(el => {
//     //         // console.log(el);
//     //         allElSelected.forEach(selection => {
//     //             // console.log(selection);
//     //             if(el.innerText.toLowerCase().trim() === selection){
//     //                 el.style.display = 'none';
//     //             }
//     //         });
//     //     });
//     // }

//     // if(name === 'ingredients'){
//     //     const listElementsToFilter = document.querySelectorAll('.ingredients');

//     //     /** removes the displayed tag from the list of elements */
//     //     listElementsToFilter.forEach(el => {
//     //         // console.log(el);
//     //         allElSelected.forEach(selection => {
//     //             // console.log(selection);
//     //             if(el.innerText.toLowerCase().trim() === selection){
//     //                 el.style.display = 'none';
//     //             }
//     //         });
//     //     });
//     // }

//     // if(name === 'ustensils'){
//     //     const listElementsToFilter = document.querySelectorAll('.ustensils');

//     //     /** removes the displayed tag from the list of elements */
//     //     listElementsToFilter.forEach(el => {
//     //         // console.log(el);
//     //         allElSelected.forEach(selection => {
//     //             // console.log(selection);
//     //             if(el.innerText.toLowerCase().trim() === selection){
//     //                 el.style.display = 'none';
//     //             }
//     //         });
//     //     });
//     // }

//     document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
// }














// import { collectIngredients } from "../utils/collect/ingredients.js";
// import { createListOfElements } from "../utils/createListOfElements.js";
// import { displayListElFiltered } from "../utils/displayListElFiltered.js";
// import { displayUpdatedRecipes } from "../utils/displayUpdatedRecipes.js";
// import { deleteDataInput } from "../utils/deleteDataInput.js";


// export function filterIngredients(recipes){
//     const name = 'ingredients';
//     const tags = document.querySelectorAll(`.tag-${name}-p`);
//     let elements = [];


//     elements = collectIngredients(recipes, name);
//     /** Inserting list of utensils into the filter div */

//     // /** removes the displayed tag from the list of elements */
//     // elements.forEach(el => {
//     //     // console.log(el);
//         tags.forEach(selection => {
//             console.log(selection.innerHTML.toLowerCase());
//                 elements = elements.filter(item => item !== selection.innerHTML.toLowerCase());
//             });
        
//             console.log(tags);

//     const element =  createListOfElements(name, elements);
//     document.querySelector(`.main_filter-bar-${name}`).appendChild(element);

//     console.log(elements);
//     deleteDataInput(name);
//     /** displays the list of elements matching the entry in the input */
//     displayListElFiltered(name);
//     displayUpdatedRecipes(name);  
// }


            // tags.forEach(tag => {
            //     let tagToDelete = tag.querySelector('.tag-delete');
            //     console.log(tagToDelete);

            //     tagToDelete.addEventListener('click', () => {
            //         tag.forEach(selection => {
            //             elements.push(selection);
            //         })
            //     })
            // })
      
        
            // console.log(selection);
            // console.log(el.innerText.toLowerCase().trim())
            // if(el.innerText.toLowerCase().trim() === selection.innerText.toLowerCase().trim()){
            //     el.style.display = 'none';
            // }
    
    // });

    // let crossToDeleteTag = mainTagWrapper.querySelector('.tag-delete');
    // crossToDeleteTag.addEventListener('click', () => {
    //     tag.forEach(selection => {
    //         console.log(selection.innerHTML.toLowerCase());

    //             elements = elements.filter(item => item === selection.innerHTML.toLowerCase());
          
    //         });
    // });






    // elements = collectIngredients(recipes, name);
    /** Inserting list of utensils into the filter div */

    // /** removes the displayed tag from the list of elements */
    // elements.forEach(el => {
    // //     // console.log(el);
    //     tags.forEach(selection => {
    //         console.log(selection)
    //         // console.log(selection.innerText.toLowerCase());
    //             elements = elements.filter(item => item !== selection.innerText.toLowerCase());
    //     });
        

    //     tags.forEach(selection => {
           
            
    //         console.log(selection.innerText.toLowerCase());
    //         // console.log(selection.nextSibling);
    //         selection.nextSibling.addEventListener('click', () => {
    //             textTag = selection.innerText.toLowerCase()        
    //         });
    //     })

    //     elements.push(textTag);