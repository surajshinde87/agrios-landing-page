document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle navbar visibility
    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Hide navbar on link click and show the corresponding section
    links.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');

            // Scroll to the clicked section smoothly
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
