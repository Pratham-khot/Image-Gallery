// Select all child images and the display image
const leftImages = document.querySelectorAll('.left-container .child img');
const displayImage = document.getElementById('displayimage');

// Add click event listeners to all images in the left container
leftImages.forEach((img) => {
  img.addEventListener('click', () => {
    // Set the src of the right container image to the clicked image's src
    displayImage.src = img.src;
  });
});
