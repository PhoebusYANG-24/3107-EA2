document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".box-img"); // Select all images in the carousel
    const leftButton = document.querySelector(".box-left"); // Select the left navigation button
    const rightButton = document.querySelector(".box-right"); // Select the right navigation button
    const points = document.querySelectorAll(".box-point li"); // Select the indicator dots
    let index = 0; // Initialize the current image index
    const totalImages = images.length; // Total number of images

    function showImage() {
        images.forEach((img, i) => {
            img.style.opacity = 0; // Hide all images
            points[i].style.backgroundColor = "#ccc"; // Reset indicator dot colors
        });
        images[index].style.opacity = 1; // Show the current image
        points[index].style.backgroundColor = "#717171"; // Highlight the current indicator dot
    }

    // Event listener for the left button
    leftButton.addEventListener("click", () => {
        index = (index - 1 + totalImages) % totalImages; // Cycle to the previous image
        showImage();
    });

    // Event listener for the right button
    rightButton.addEventListener("click", () => {
        index = (index + 1) % totalImages; // Cycle to the next image
        showImage();
    });

    // Event listeners for indicator dots
    points.forEach((point, i) => {
        point.addEventListener("click", () => {
            index = i; // Switch to the corresponding image when an indicator dot is clicked
            showImage();
        });
    });

    // Automatic playback functionality
    setInterval(() => {
        index = (index + 1) % totalImages; // Cycle to the next image
        showImage();
    }, 5000); // Change image every 5 seconds

    showImage(); // Initialize by showing the first image
});

// Function to filter items based on search input
function searchText() {
    const input = document.getElementById('sreach-text'); // Get the search input element
    const filter = input.value.toLowerCase(); // Convert input to lowercase for comparison
    const items = document.getElementsByClassName('buy-item'); // Get all items to filter

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent || items[i].innerText; // Get text content of each item
        // Show or hide items based on whether they include the search term
        items[i].style.display = text.toLowerCase().includes(filter) ? '' : 'none';
    }
}

// Function to toggle the display of an element
function toggleDisplay(a, b) {
    const element = document.getElementById(a); // Get the element to toggle
    const menuIcon = document.getElementById(b); // Get the menu icon for clicking

    // Toggle visibility of the element
    if (element.style.display === 'none') {
        element.style.display = 'flex'; // Show the element
    } else {
        element.style.display = 'none'; // Hide the element
    }

    // Add click event to hide the menu when clicking outside
    document.addEventListener('click', function(event) {
        // Check if the click was outside the element and the menu icon
        if (!element.contains(event.target) && !menuIcon.contains(event.target)) {
            element.style.display = 'none'; // Hide the menu
        }
    });
}