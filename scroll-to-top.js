const scrollToTopButton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};