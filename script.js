// Show or hide the Back to Top button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the document
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
