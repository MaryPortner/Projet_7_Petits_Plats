export function displayTag(name){
    const dropdown = document.querySelector(`#main_filter-bar-${name}`);
    const input = document.querySelector(`#filter-sort-${name}`);
    const listElements = document.querySelectorAll('.' + name);
    // 1 - Je récupère la liste des ingrédients ou appareil ou ustensiles qui n'ont plus la class hidden
    // 2 - Au clic d'un des éléments, on va créer un tag "bouton" qui apparaitra au dessus de liste, il aura une croix pour le supprimer
    // 3 -  récupérer les recettes qui contiennent le tag en question
    // 4 -  afficher les recettes
    // 5 -  récupère les appareils dans ces recettes
    // 6 -  affiche les appareils dans la liste, 
    // 7 -  récupère les ustensiles dans les recettes
    // 8 -  affiche les ustensiles
    const mainTag = document.createElement('div');
    mainTag.classList.add(`main_Tag-${name}`);

  

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
                crossToDeleteTag.classList.add(`tag-${name}-delete`);
                
                tag.appendChild(textEl);
                tag.appendChild(crossToDeleteTag);

                mainTag.appendChild(tag);

                document.querySelector('.main_tag').appendChild(mainTag);


                elSelectedInList.classList.remove('hidden');
                input.value = '';
                /** removes the displayed tag from the list of elements */
                elSelectedInList.style.display = 'none'; 
                dropdown.classList.toggle('displayBlock');

                /** delete the tag and put the element back in the list */
                crossToDeleteTag.addEventListener('click', () => {
                    mainTag.style.display = 'none';
                    elSelectedInList.style.display = 'block';
                });                        
            });
        }
    }
}
