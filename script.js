/**
 * AgriConnect — Mobile Navigation & Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navCloseBtn = document.getElementById('navCloseBtn');
    const navMenu = document.getElementById('navMenu');
    const navBackdrop = document.getElementById('navBackdrop');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // Toggle Mobile Navigation Menu
    function openMobileMenu() {
        navMenu.classList.add('open');
        navBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
        hamburgerBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMobileMenu() {
        navMenu.classList.remove('open');
        navBackdrop.classList.remove('show');
        document.body.style.overflow = '';
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', closeMobileMenu);
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu on Esc key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
            
            // Highlight active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Header Background Elevation on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth section link active state tracking on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll(`.nav-links a[href*=${sectionId}]`).forEach(el => el.classList.add('active'));
            } else {
                document.querySelectorAll(`.nav-links a[href*=${sectionId}]`).forEach(el => el.classList.remove('active'));
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
});
