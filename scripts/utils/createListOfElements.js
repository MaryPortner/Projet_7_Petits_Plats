/** Create list of elements for dropdown - Section filters - */
export function createListOfElements(elements, name){
    const classUl = `filter-${name}-list` ;
    const ul = document.createElement('ul');
    ul.classList.add(`${classUl}`);
    for(let el of elements){
        /** creation of a li for each element */
        const li = document.createElement('li');
        li.innerText = `${el}`;
        li.classList.add(name);
        li.setAttribute('tabindex', 0);

        ul.appendChild(li);
    }
    return ul;
}