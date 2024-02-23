//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImage(image) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        img.src = image.url;
    });
}

// Function to download all images in parallel
function downloadAllImages(images) {
    const promises = images.map(image => downloadImage(image));
    return Promise.all(promises);
}

// Function to display images on the webpage
function displayImages(images) {
    const outputDiv = document.getElementById('output');
    images.forEach(img => {
        outputDiv.appendChild(img);
    });
}

// Event listener for the download button click
document.getElementById('download-images-button').addEventListener('click', () => {
    downloadAllImages(imageUrls)
        .then(images => {
            // Clear existing images
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            // Display downloaded images
            displayImages(images);
        })
        .catch(error => {
            console.error(error);
        });
});
