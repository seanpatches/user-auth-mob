import { auth } from './firebase.js';

export function makeHeader(){
    const html = `
        <div id="header">
            <img src="./assets/readingRainbow.jpg" alt="website logo" id="logo">
            <h1>Book List</h1>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const avatar = user.photoURL || './assets/defaultPhoto.png';

    const html = `
        <div id="profile">
        <img src="${avatar}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
        `;

    

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadHeader(options) {
    const headerContainer = document.getElementById('header-container');
    const dom = makeHeader();
    headerContainer.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }
    auth.onAuthStateChanged(user =>{
        if(user){
            const profileDom = makeProfile(user); 
            headerContainer.appendChild(profileDom);
            const button = headerContainer.querySelector('button'); //ask why we have to place this here rather than after 41
            button.addEventListener('click', () => {
                auth.signOut();
            });
        } else {
            window.location = './auth.html';
        }
    });
}