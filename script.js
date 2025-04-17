// script.js

// Ajoute animasyon lè seksyon yo antre nan ekran an
document.addEventListener("DOMContentLoaded", function () {
    const seksyon = document.querySelectorAll('.animasyon');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('vini');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    seksyon.forEach(sec => {
        observer.observe(sec);
    });

    // Repons lè fòmilè a voye
    const fòm = document.querySelector("form");
    fòm.addEventListener("submit", function(e) {
        e.preventDefault(); // Anpeche paj la rafrechi
        alert("Mèsi pou mesaj ou! Nou resevwa li.");
        fòm.reset(); // Netwaye fòmilè a
    });
});


---
