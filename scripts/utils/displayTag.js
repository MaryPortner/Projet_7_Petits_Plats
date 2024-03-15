export function displayTag(name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    const listElements = document.querySelectorAll('.' + name);

    const mainTag = document.createElement('div');
    mainTag.classList.add('main_Tag-wrapper');

    for(let elSelectedInList of listElements){
        /** if the input is not empty  */
        if(!elSelectedInList.classList.contains("hidden")){
                
            elSelectedInList.addEventListener('click', () => {

                const tag = document.createElement('div');
                tag.classList.add(`tag-${name}`);
            
                const textEl = document.createElement('p');
                textEl.classList.add(`tag-${name}-p`);
                textEl.innerText =  `${elSelectedInList.innerText}`; 

                const crossToDeleteTag = document.createElement('span');
                crossToDeleteTag.classList.add('tag-delete');
                
                tag.appendChild(textEl);
                tag.appendChild(crossToDeleteTag);

                mainTag.appendChild(tag);

                document.querySelector(`#main_filter-${name}-wrapper`).appendChild(mainTag);


                // elSelectedInList.classList.remove('hidden');
                input.value = '';

                /** removes the displayed tag from the list of elements */
                elSelectedInList.style.display = 'none'; 
                dropdown.classList.toggle('displayBlock');

                /** delete the tag and put the element back in the list */
                crossToDeleteTag.addEventListener('click', () => {
                    tag.style.display = 'none';
                    elSelectedInList.style.display = 'block';
                });                        
            });
        }
    }
}
