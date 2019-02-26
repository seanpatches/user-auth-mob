function createHtmlTemplate(images){
    return `
    <li>
        <p>${images.title}</p>
        <img src="${images.url}">
    </li>
    `;
}

export default createHtmlTemplate;