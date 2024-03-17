export function displayTag(name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    const listElements = document.querySelectorAll('.' + name);

    const mainTag = document.createElement('div');
    mainTag.classList.add('main_Tag-wrapper');

    for(let elSelectedInList of listElements){

        elSelectedInList.addEventListener('click', () => {

            /** Create tag  */
            const tag = createTag(name, elSelectedInList);
            mainTag.appendChild(tag);

            /** Delete elements from list */
            removeFromList(elSelectedInList, input, dropdown);
            /** delete the tag and put the element back in the list */
            deleteTagAndUpdateList(tag, elSelectedInList)
                            
        });
    }

    document.querySelector(`#main_filter-${name}-wrapper`).appendChild(mainTag);
}

function createTag(name, elSelectedInList){
    const tag = document.createElement('div');
    tag.classList.add(`tag-${name}`);

    const textEl = document.createElement('p');
    textEl.classList.add(`tag-${name}-p`);
    textEl.innerText =  `${elSelectedInList.innerText}`; 

    tag.appendChild(textEl);

    return tag;
}

function removeFromList(elSelectedInList, input, dropdown){
    // elSelectedInList.classList.remove('hidden');
    input.value = '';
    /** removes the displayed tag from the list of elements */
    elSelectedInList.style.display = 'none'; 
    dropdown.classList.toggle('displayBlock');
}

function deleteTagAndUpdateList(tag, elSelectedInList){
    /** Create cross to delete tag */
    const crossToDeleteTag = document.createElement('span');
    crossToDeleteTag.classList.add('tag-delete');
    tag.appendChild(crossToDeleteTag);
      /** listener for delete the tag and put the element back in the list */
    crossToDeleteTag.addEventListener('click', () => {
        tag.style.display = 'none';
        elSelectedInList.style.display = 'block';
    });  
}