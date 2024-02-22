/**  Dropdown for filters */ 

const btnDrop = document.querySelector('.btn_drop');
const filterBarSingle = document.querySelector('.filter-bar-single');
// const searchInput = document.querySelector('.')


export function dropdown(){
    filterBarSingle.style.display="none";
    const showHideMenu = () => {
        document.querySelector('.arrow').classList.toggle('rotate');
        filterBarSingle.classList.toggle('active');
        filterBarSingle.classList.remove('displayNone');
        if (filterBarSingle.classList.contains('active')) {
            btnDrop.setAttribute('aria-expanded', 'true');
        } else {
            btnDrop.setAttribute('aria-expanded', 'false');
        }
    }
    btnDrop.addEventListener('click', showHideMenu);
} 