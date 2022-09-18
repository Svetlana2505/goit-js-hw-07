import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryContainer = onCteateGalleryContainer(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryContainer);

function onCteateGalleryContainer(items) {
  return items
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}" ><img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`
    )
    .join("");
}

const gallery = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});
