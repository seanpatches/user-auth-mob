export function makeCharTemplate(data) {
    const html = `
        <li>
            <p>${data.name}</p>
            <img src="${data.image}">
            <p>${data.species}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


const charListDisplay = document.getElementById('character-list-display');

export default function loadCharacters(characterList) {
    while(charListDisplay.children.length > 0){
        charListDisplay.lastElementChild.remove();
    }

    if(characterList.error){
        alert('No results found');
        return;

    }
    characterList.results.forEach(character => {
        const dom = makeCharTemplate(character);
        charListDisplay.appendChild(dom);
    });
}
