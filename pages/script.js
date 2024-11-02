// Show button when scrolling down
window.onscroll = function() {
    toggleButtonVisibility();
};

function toggleButtonVisibility() {
    const button = document.getElementById("backToTopButton");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
