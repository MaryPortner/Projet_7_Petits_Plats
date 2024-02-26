/**  Dropdown for filters */ 

const arrowAppareils = document.querySelector('#btn-filter-appareils .arrow');
const arrowIngredients = document.querySelector('#btn-filter-ingredients .arrow');
const arrowUstensiles = document.querySelector('#btn-filter-ustensiles .arrow');

const btnFilterAppareils = document.querySelector('#btn-filter-appareils');
const btnFilterIngredients = document.querySelector('#btn-filter-ingredients');
const btnFilterUstensiles = document.querySelector('#btn-filter-ustensiles');

const filterBarAppareils = document.querySelector('.main_filter-bar-appareils');
const filterBarIngredients = document.querySelector('.main_filter-bar-ingredients');
const filterBarUstensiles = document.querySelector('.main_filter-bar-ustensiles');

export function displayDropdown (){

    function dropdown(filter, arrow, btn){
        const showHideFilter = () => {
            filter.classList.toggle('active');
            filter.classList.toggle('displayBlock');
            if (filter.classList.contains('active')) {
                btn.setAttribute('aria-expanded', 'true');
            } else {
                btn.setAttribute('aria-expanded', 'false');
            }
            arrow.classList.toggle('rotate');
        }

        btn.addEventListener('click', showHideFilter);
    } 

    dropdown(filterBarAppareils, arrowAppareils, btnFilterAppareils);
    dropdown(filterBarIngredients, arrowIngredients, btnFilterIngredients);   
    dropdown(filterBarUstensiles, arrowUstensiles, btnFilterUstensiles);
}