document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

function toggleExpand(button, link) {
    if (!button.classList.contains("expanded")) {
        // Expand the button
        button.classList.add("expanded");
    } else {
        // Open the link in a new tab
        window.open(link, "_blank");

        // Collapse back after a short delay
        setTimeout(() => {
            button.classList.remove("expanded");
        }, 500); // Adjust delay if needed
    }
}
