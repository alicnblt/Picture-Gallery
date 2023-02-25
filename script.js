// DOM Elements
const images = document.querySelectorAll(".image-container img");
const imageModal = document.querySelector(".image-modal");
const fullscreenImage = document.querySelector(".fullscreen-image-container img");

// Variables
let imgSrc = "";

// Click to display images on the modal
function displayImage(image) {
  // Get img src
  imgSrc = image.getAttribute("src");

  // Set fullscreen image src
  fullscreenImage.setAttribute("src", imgSrc);

  // Toggle modal
  imageModal.classList.add("toggled");
}

// Event Listeners
images.forEach((image) =>
  image.addEventListener("click", (e) => displayImage(e.target))
);

// To close the modal
imageModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("image-modal")) {
    imageModal.classList.remove("toggled");
  }
});


// const container = document.querySelector('.col-images');
// const unplashImage = 'https://source.unsplash.com/random/';
// const rows = 5;

// for (let i = 0; i < rows * 3; i++) {
//     const img = document.createElement('img');
//     img.src = '${unplashImage}${getRandomSize()}';
//     container.appendChild(img);
    
// }

// function getRandomSize(){
//     return '${getRandomNr()}x${getRandomNr()}'
// }

// function getRandomNr(){
//     return Math.floor(Math.random() * 10)+300;
// }