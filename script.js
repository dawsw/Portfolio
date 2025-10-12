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
let links = document.querySelectorAll('.link');
let selfImg = document.querySelector('.self-img')
let headerTitle = document.querySelector('.header-title')
let aboutMeHeader = document.querySelector('.about-header')
let projectsHeader = document.querySelector('.projects-header')
let contactHeader = document.querySelector('.contact-header')

themeButton.addEventListener('click', function () {
    let currentTheme = document.getElementsByClassName('dark-theme');
    let darkNavFooter = document.querySelectorAll('.dark-theme-nav-footer');
    let lightNavFooter = document.querySelectorAll('.light-theme-nav-footer');
    let darkIcons = document.querySelectorAll('.dark-theme-icon');
    let lightIcons = document.querySelectorAll('.light-theme-icon');
    let languageIcons = document.querySelectorAll('.language-icon');
    let projects = document.querySelectorAll('.project');
    
 

    //if switching to light mode
    if (currentTheme.length >= 1) {
        themeButton.src = 'static/moon.svg';
        
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');

        selfImg.classList.remove('dark-theme-self-img');
        selfImg.classList.add('light-theme-self-img');

        headerTitle.classList.remove('dark-theme-header-title');
        headerTitle.classList.add('light-theme-header-title');

        aboutMeHeader.classList.remove('dark-theme-background');
        aboutMeHeader.classList.add('light-theme-background');

        projectsHeader.classList.remove('dark-theme-background');
        projectsHeader.classList.add('light-theme-background');

        contactHeader.classList.remove('dark-theme-background');
        contactHeader.classList.add('light-theme-background');


        //change dawson name to black
        document.documentElement.style.setProperty('--signature-fill', '#000');

        darkNavFooter.forEach(_ => {
            _.classList.remove('dark-theme-nav-footer');
            _.classList.add('light-theme-nav-footer');
        });

        darkIcons.forEach(icon => {
            icon.classList.remove('dark-theme-icon');
            icon.classList.add('light-theme-icon');
        });

        links.forEach(link => {
            link.classList.remove('dark-theme-icon');
            link.classList.add('light-theme-icon');
        });

        languageIcons.forEach(icon => {
            icon.classList.remove('dark-theme-background');
            icon.classList.add('light-theme-background');
        });

        projects.forEach(project => {
            project.classList.remove('dark-theme-background');
            project.classList.add('light-theme-background');
        });
        
    } else { //if switching to dark mode
        themeButton.src = 'static/sun.svg';

        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

        selfImg.classList.remove('light-theme-self-img');
        selfImg.classList.add('dark-theme-self-img');

        headerTitle.classList.remove('light-theme-header-title');
        headerTitle.classList.add('dark-theme-header-title');

        aboutMeHeader.classList.remove('light-theme-background');
        aboutMeHeader.classList.add('dark-theme-background');

        projectsHeader.classList.remove('light-theme-background');
        projectsHeader.classList.add('dark-theme-background');

        contactHeader.classList.remove('light-theme-background');
        contactHeader.classList.add('dark-theme-background');

        //change name to white 
        document.documentElement.style.setProperty('--signature-fill', '#fff');

        lightNavFooter.forEach(_ => {
            _.classList.remove('light-theme-nav-footer');
            _.classList.add('dark-theme-nav-footer');
        });

        lightIcons.forEach(icon => {
            icon.classList.remove('light-theme-icon');
            icon.classList.add('dark-theme-icon');
        });

        links.forEach(link => {
            link.classList.remove('light-theme-icon');
            link.classList.add('dark-theme-icon');
        });

        languageIcons.forEach(icon => {
            icon.classList.remove('light-theme-background');
            icon.classList.add('dark-theme-background');
        });

        projects.forEach(project => {
            project.classList.remove('light-theme-background');
            project.classList.add('dark-theme-background');
        });
    }
})
