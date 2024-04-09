export function createTagWrapper(name){
    const mainTag = document.createElement('div');
    mainTag.classList.add('main_Tag-wrapper');
    document.querySelector(`#main_filter-${name}-wrapper`).appendChild(mainTag);
}