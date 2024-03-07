/**  Dropdown for filters */ 

const arrow = document.querySelectorAll('#btn-filter-ingredients .arrow, #btn-filter-appareils .arrow,  #btn-filter-ustensiles .arrow');
const btnToFilter = document.querySelectorAll('#btn-filter-ingredients, #btn-filter-appareils, #btn-filter-ustensiles');
const filterBar = document.querySelectorAll('.main_filter-bar-ingredients, .main_filter-bar-appareils, .main_filter-bar-ustensiles');

export function displayDropdown (){

    function dropdown(filter, arrow, btn){
        const showHideDataList = () => {
            filter.classList.toggle('active');
            filter.classList.toggle('displayBlock');
            if (filter.classList.contains('active')) {
                btn.setAttribute('aria-expanded', 'true');
            } else {
                btn.setAttribute('aria-expanded', 'false');
            }
            arrow.classList.toggle('rotate');
        }

        btn.addEventListener('click', showHideDataList);
    } 

    dropdown(filterBar[0], arrow[0], btnToFilter[0]);  
    dropdown(filterBar[1], arrow[1], btnToFilter[1]); 
    dropdown(filterBar[2], arrow[2], btnToFilter[2]);
}