// Back to Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Smooth scroll to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Bootstrap Carousel
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 2000,  // 2 seconds per slide
        touch: true      // Enable touch swiping on mobile
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});