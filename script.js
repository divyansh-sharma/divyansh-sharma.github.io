console.log('script.js loaded');

// Select all elements that should be animated
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Function to reveal elements on scroll
function revealOnScroll() {
    elementsToAnimate.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Check if the element is within the viewport
        // (element top is less than window height AND element bottom is greater than 0)
        if (elementTop < windowHeight && elementBottom > 0) {
            element.classList.add('is-visible');
        }
        // Optional: Remove 'is-visible' if element scrolls out of view from the top
        // else if (elementTop > windowHeight || elementBottom < 0) {
        //     element.classList.remove('is-visible');
        // }
    });
}

// Add event listener for scroll events
window.addEventListener('scroll', revealOnScroll);

// Call revealOnScroll once on page load
// Use setTimeout to ensure layout is complete before checking visibility
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});
