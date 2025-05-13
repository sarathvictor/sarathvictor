document.addEventListener('DOMContentLoaded', function() {
    // Initializing Page Variables
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.navbar a');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    // Handling Navigation Clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            navigateToPage(pageId);
        });
    });

    // Handling Hamburger Menu (Mobile View)
    hamburger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
    });

    // Function to Show the Selected Page
    function navigateToPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }
    }

    // Initial Page Load: Show the Home Page
    navigateToPage('home');
});

