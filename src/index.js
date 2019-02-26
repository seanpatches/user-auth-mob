import createHtmlTemplate from './create.js';
import images from '../data/images.js';

const imageContainer = document.getElementById('image-container');

images.forEach((image) => {
    const template = document.createElement('template');
    template.innerHTML = createHtmlTemplate(image);
    const createdTemplate = template.content;
    imageContainer.appendChild(createdTemplate);
});
