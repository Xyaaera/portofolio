document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#3d5b37";
            header.style.color = "white";
        } else {
            header.style.backgroundColor = "#f7f4eb";
            header.style.color = "#333";
        }
        
        document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    // Efek scroll pada header
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#3d5b37";
            header.style.color = "white";
        } else {
            header.style.backgroundColor = "#f7f4eb";
            header.style.color = "#333";
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
    });
});