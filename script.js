const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
});

// Image Slider (Automatic Slideshow)
let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

function changeImage() {
    images.forEach((img, index) => {
        img.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % totalImages;
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

function updateTotal() {
    // Get the quantities of each dish
    var quantity1 = parseInt(document.getElementById('quantity1').value) || 0;
    var quantity2 = parseInt(document.getElementById('quantity2').value) || 0;
    var quantity3 = parseInt(document.getElementById('quantity3').value) || 0;
  
    // Dish prices
    var price1 = 100; // Dish 1 price
    var price2 = 190; // Dish 2 price
    var price3 = 90; // Dish 3 price
  
    // Calculate total
    var total = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3);
  
    // Update total amount on the page
    document.getElementById('totalAmount').innerText = total;
  }
  