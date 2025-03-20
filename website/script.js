/* 

window.addEventListener('load', function () {
    window.scrollTo({top: 0, behavior: 'instant'});
});

*/

function switchTheme() {
    let themeButton = document.getElementById('themeButton');
    let arrowImage = document.getElementById('downArrow');
    let logoImage = document.getElementById('logo')
    
    //if changing to light theme
    if (themeButton.src.includes('sun')) {
        themeButton.src = 'static/moon.svg';
        arrowImage.src = 'static/light-theme-arrow.svg'
        logo.src = 'static/light-theme-logo.svg'

        let backgrounds = document.querySelectorAll(".dark-theme-background");
        let texts = document.querySelectorAll(".dark-theme-text");
        let headers = document.querySelectorAll(".dark-theme-header");
        let githubImages = document.querySelectorAll('#githubIcon');

        backgrounds.forEach(background => {
            background.classList.remove('dark-theme-background');
            background.classList.add('light-theme-background');
        });

        texts.forEach(text => {
            text.classList.remove('dark-theme-text');
            text.classList.add('light-theme-text');
        });

        headers.forEach(header => {
            header.classList.remove('dark-theme-header');
            header.classList.add('light-theme-header');
        });

        githubImages.forEach(img => {
            img.src = 'icons/light-theme-github.png'
        });

    } 
    else { //if changing to dark theme
        themeButton.src = 'static/sun.svg';
        arrowImage.src = 'static/dark-theme-arrow.svg'
        logo.src = 'static/dark-theme-logo.svg'

        let backgrounds = document.querySelectorAll(".light-theme-background");
        let texts = document.querySelectorAll(".light-theme-text");
        let headers = document.querySelectorAll(".light-theme-header");
        let githubImages = document.querySelectorAll('#githubIcon');

        backgrounds.forEach(background => {
            background.classList.remove('light-theme-background');
            background.classList.add('dark-theme-background');
        });

        texts.forEach(text => {
            text.classList.remove('light-theme-text');
            text.classList.add('dark-theme-text');
        });

        headers.forEach(header => {
            header.classList.remove('light-theme-header');
            header.classList.add('dark-theme-header');
        });

        githubImages.forEach(img => {
            img.src = 'icons/dark-theme-github.png'
        });
    }
};
themeButton.addEventListener("click", switchTheme);

/* window.addEventListener('scroll', function () {
    let aboutMeHeader = this.document.getElementById('aboutMeHeader');
    let currentY = this.window.scrollY;

    if (currentY > 500) {
        aboutMeHeader.style.display = 'block';
    }
    console.log(currentY);
}); */