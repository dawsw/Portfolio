function closeMenu() {
    const hamLinks = document.getElementById('hamLinks');
    hamLinks.style.display = 'none'
}


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

// Section reveals: only opt in to the hidden starting state when JS can undo it
let revealSections = document.querySelectorAll('.about-section, .projects-section, .contact-section');

if (revealSections.length && 'IntersectionObserver' in window) {
    // Fires once a section's top edge is ~15% into the viewport. A rootMargin
    // rather than a threshold keeps the trigger reliable on mobile, where a
    // section can be taller than the screen.
    let revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -15% 0px' });

    revealSections.forEach(section => revealObserver.observe(section));
}


// Hand each card its own screenshot as a CSS variable, so .project::before can
// paint a blurred wash of that image across the whole card — including behind
// the text, where the crisp copy has already faded out.
document.querySelectorAll('.project').forEach(card => {
    let image = card.querySelector('.project-image');
    if (image) card.style.setProperty('--project-image', 'url("' + image.getAttribute('src') + '")');
});


/***** PROJECT LIGHTBOX (desktop only) *****/

let projectOverlay = document.getElementById('projectOverlay');
let projectModal = document.getElementById('projectModal');
let projectModalClose = document.getElementById('projectModalClose');
let desktopQuery = window.matchMedia('(min-width: 1200px)');
let lastFocusedCard = null;

function openProject(card) {
    // Clone the card so a new project never needs extra markup here. The clone
    // keeps its theme classes and its real <a> buttons, and CSS restyles it
    // back into the vertical (image-on-top) layout.
    let clone = card.cloneNode(true);
    clone.removeAttribute('tabindex');

    // Drop any previous clone, keeping the close button
    let previous = projectModal.querySelector('.project');
    if (previous) previous.remove();
    projectModal.appendChild(clone);

    let title = clone.querySelector('h2');
    if (title) {
        title.id = 'projectModalTitle';
        projectModal.setAttribute('aria-labelledby', 'projectModalTitle');
    } else {
        projectModal.removeAttribute('aria-labelledby');
    }

    lastFocusedCard = card;
    projectOverlay.hidden = false;
    document.body.style.overflow = 'hidden';

    // Next frame, so the opacity/scale transition has a starting value to run from
    requestAnimationFrame(() => projectOverlay.classList.add('open'));
    projectModalClose.focus();
}

function closeProject() {
    if (projectOverlay.hidden) return;

    projectOverlay.classList.remove('open');
    document.body.style.overflow = '';

    if (lastFocusedCard) {
        lastFocusedCard.focus();
        lastFocusedCard = null;
    }

    // Wait out the fade before hiding, but don't leave it open if the
    // transition never fires (reduced motion, background tab)
    setTimeout(() => {
        if (!projectOverlay.classList.contains('open')) projectOverlay.hidden = true;
    }, 250);
}

if (projectOverlay) {
    document.querySelectorAll('.project').forEach(card => {
        card.addEventListener('click', function (event) {
            // Let the Visit / GitHub links do their own thing
            if (event.target.closest('a')) return;
            if (!desktopQuery.matches) return;
            openProject(card);
        });

        card.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            if (event.target !== card || !desktopQuery.matches) return;
            event.preventDefault();
            openProject(card);
        });
    });

    projectModalClose.addEventListener('click', closeProject);

    // Click anywhere on the backdrop, but not on the modal itself
    projectOverlay.addEventListener('click', function (event) {
        if (event.target === projectOverlay) closeProject();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeProject();
    });

    // Cards aren't clickable below 1200px, so don't advertise them as focusable
    function syncProjectFocusability() {
        document.querySelectorAll('.projects-container .project').forEach(card => {
            if (desktopQuery.matches) {
                card.setAttribute('tabindex', '0');
            } else {
                card.removeAttribute('tabindex');
            }
        });

        if (!desktopQuery.matches) closeProject();
    }

    syncProjectFocusability();
    desktopQuery.addEventListener('change', syncProjectFocusability);
}


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
