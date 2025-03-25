let hamLinks = document.getElementById('hamLinks');

hamLinks.style.display = 'none';

let topY = 0;

for (let i = 0; i < 100; i++) {
    window.setTimeout(() => {
        window.scrollTo({ top: topY, behavior: 'smooth' });

        topY += 900;
        if (topY > 2940) {
            topY = 0;
        }
    }, 7000 * i); 
}