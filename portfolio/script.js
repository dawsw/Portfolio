let hamIcon = document.getElementById('hamIcon');
let hamLinks = document.getElementById('hamLinks');

hamLinks.style.display = 'none';

hamIcon.addEventListener('click', function () {
    if (hamLinks.style.display == 'none') {
        hamLinks.style.display = 'flex'
    } else {
        hamLinks.style.display = 'none'
    }
});

let themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', function () {
    let currentTheme = document.getElementsByClassName('dark-theme');
    let darkNavFooter = document.querySelectorAll('.dark-theme-nav-footer');
    let lightNavFooter = document.querySelectorAll('.light-theme-nav-footer');
    let hiIm = document.querySelectorAll('.hi-im');
    let darkIcons = document.querySelectorAll('.dark-theme-icon');
    let lightIcons = document.querySelectorAll('.light-theme-icon');
    let links = document.querySelectorAll('.link');
 

    //if switching to light mode
    if (currentTheme.length >= 1) {
        themeButton.src = 'static/moon.svg';
        
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');


        darkNavFooter.forEach(_ => {
            _.classList.remove('dark-theme-nav-footer');
            _.classList.add('light-theme-nav-footer');
        });

        hiIm.forEach(word => {
            word.classList.remove('dark-theme-hi-im');
            word.classList.add('light-theme-hi-im');
        });

        darkIcons.forEach(icon => {
            icon.classList.remove('dark-theme-icon');
            icon.classList.add('light-theme-icon');
        });

        links.forEach(link => {
            link.classList.remove('dark-theme-icon');
            link.classList.add('light-theme-icon');
        });
        
    } else { //if switching to dark mode
        themeButton.src = 'static/sun.svg';

        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

        lightNavFooter.forEach(_ => {
            _.classList.remove('light-theme-nav-footer');
            _.classList.add('dark-theme-nav-footer');
        });

        hiIm.forEach(word => {
            word.classList.remove('light-theme-hi-im');
            word.classList.add('dark-theme-hi-im');
        });

        lightIcons.forEach(icon => {
            icon.classList.remove('light-theme-icon');
            icon.classList.add('dark-theme-icon');
        });

        links.forEach(link => {
            link.classList.remove('light-theme-icon');
            link.classList.add('dark-theme-icon');
        });
    }
})