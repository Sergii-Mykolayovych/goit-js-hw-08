
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
import '../css/common.css';


const galleryContainer = document.querySelector('.gallery');

const imagesMarkup = createGalleryCardsMarkup(galleryItems);

const imagesLinks = document.querySelector(".gallery__link");

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);



function createGalleryCardsMarkup(item) {
    return item.map(({preview, original, description}) => {
        return `
       <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
    }).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,

});



