/**  Dropdown for filters */ 

export function dropdown (){
    document.querySelectorAll('.single-filter').forEach( wrapper =>{
       /** select each filter, arrow and button in each of the filter divs */
        const filter = wrapper.querySelector('.filter-bar-single');
        const arrow = wrapper.querySelector('.arrow');
        const btn = wrapper.querySelector('button');

        // displayDropdown(filter, arrow, button); 
        
        const showHideDatasList = () => {
            filter.classList.toggle('active');
            filter.classList.toggle('displayBlock');
            /** accessibility */
            if (filter.classList.contains('active')) {
                btn.setAttribute('aria-expanded', 'true');
            } else {
                btn.setAttribute('aria-expanded', 'false');
            }
            arrow.classList.toggle('rotate');
        }
    
        btn.addEventListener('click', showHideDatasList);
   });
}


// function displayDropdown(filter, arrow, btn){
//     const showHideDatasList = () => {
//         filter.classList.toggle('active');
//         filter.classList.toggle('displayBlock');
//         /** accessibility */
//         if (filter.classList.contains('active')) {
//             btn.setAttribute('aria-expanded', 'true');
//         } else {
//             btn.setAttribute('aria-expanded', 'false');  
//         }
//         arrow.classList.toggle('rotate');
//     }

//     btn.addEventListener('click', showHideDatasList);
// } 