export function makeHeader(){
    const html = `
        <div>
            <img src="./assets/readingRainbow.jpg" alt="website logo">
            <h1>Book List</h1>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const html = `
        <div>
            <span>${user.displayName}</span>
            <img src="${user.photoURL}">
        </div>
        `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    const dom = makeHeader();
    headerContainer.appendChild(dom);
}