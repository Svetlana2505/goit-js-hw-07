import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

// const galleryEl = document.querySelector(".gallery");
// const gallery = createGalleryContainer(galleryItems);
// galleryEl.insertAdjacentHTML("beforeend", gallery);

// galleryEl.addEventListener("click", onGalleryClick);

// function createGalleryContainer(galleryItems) {
//   return galleryItems
//     .map(
//       ({ preview, original, description }) => `<div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//     )
//     .join("");
// }

// function onGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const imageOriginal = event.target.dataset.source;
//   onOpenModal(imageOriginal);
// }

// function onOpenModal(imageUrl) {
//   const modal = basicLightbox.create(`
//     <img src="${imageUrl}" width="800" height="600">
// `);

//   modal.show(() => window.addEventListener("keydown", closeModalByEsc));

//   function closeModalByEsc(event) {
//     if (event.code === "Escape") {
//       modal.close(() => window.removeEventListener("keydown", closeModalByEsc));
//     }
//   }
//

const galleryEl = document.querySelector(".gallery");
const galleryElem = createGalleryContainer(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryElem);

galleryEl.addEventListener("click", onGalleryClick);

function createGalleryContainer(items) {
  return items
    .map(
      ({ preview, original, description }) => `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  const elemList = event.target.classList.contains("gallery__image");
  if (!elemList) {
    return;
  }

  const elemUrl = event.target.dataset.source;
  createModal(elemUrl);
}

function createModal(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);

  instance.show(() => window.addEventListener("keydown", closeModalByEsc));

  function closeModalByEsc(event) {
    if (event.code === "Escape") {
      instance.close(() =>
        window.removeEventListener("keydown", closeModalByEsc)
      );
    }
  }
}
