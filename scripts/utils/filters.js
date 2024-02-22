/**  Dropdown for filters */ 

export function dropdown(filter, arrow, btn){
    // filter.style.display="none";
    const showHideMenu = () => {
        filter.classList.toggle('active');
        filter.classList.toggle('displayNone');
        if (filter.classList.contains('active')) {
            btn.setAttribute('aria-expanded', 'true');
        } else {
            btn.setAttribute('aria-expanded', 'false');
        }
        arrow.classList.toggle('rotate');
    }
    btn.addEventListener('click', showHideMenu);
} 

