// function removeSelectedElFromList(name, allElSelected){
//     console.log(name);
//     // if(name === 'appliances'){

//     //     removeEl(name);
//     // }

//     // if(name === 'ingredients'){

//     //     removeEl(name);
//     // }


//     // if(name === 'ustensils'){
 
//     //     removeEl(name
     
//     // }


//     // const dropdown = document.querySelector(`#main_filter-bar-${name}`);
//     const listElementsToFilter = document.querySelectorAll('.' + name);
// //      const getTag = document.querySelectorAll('.tag-' + name);
// //      let textTag;
// //       getTag.forEach(tagText => {
// //         textTag = tagText.innerText.toLowerCase();
// //         console.log(textTag);
// //       });

//     let classList; 
//    /** removes the displayed tag from the list of elements */
//     listElementsToFilter.forEach(el => {
//         classList = el.classList.value;
//         // console.log(classList);

//         allElSelected.forEach(selection => {
//             console.log(selection);
//             if(el.innerText.toLowerCase().trim() === selection){
//                 el.style.display = 'none';
//             }
//         });
//         // console.log(name);

//     });


  


//     if(name === 'appliances'){

//         document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
//     }

//     if(name === 'ingredients'){

//         document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
//     }


//     if(name === 'ustensils'){
 
//         document.querySelector(`#main_filter-bar-${name}`).classList.toggle('displayBlock');  
     
//     }


        
  
// }