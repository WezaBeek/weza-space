import '../css/weza-core.css';

// Import Templates
import arTemplate from '../templates/ar.html?raw';
import enTemplate from '../templates/en.html?raw';
import roadmapAr from '../templates/roadmap-ar.html?raw';
import roadmapEn from '../templates/roadmap-en.html?raw';
import masterPlanAr from '../templates/master-plan-ar.html?raw';
import masterPlanEn from '../templates/master-plan-en.html?raw';
import mapAr from '../templates/map-ar.html?raw';
import mapEn from '../templates/map-en.html?raw';
import teamAr from '../templates/team-ar.html?raw';
import teamEn from '../templates/team-en.html?raw';

/**
 * Core Navigation & Language Logic
 */
window.setLanguage = function (view) {
    const app = document.getElementById('app');
    if (!app) return;

    // Smooth transition effect
    app.style.opacity = '0';

    setTimeout(() => {
        // Reset Scroll
        window.scrollTo(0, 0);

        // Language & Content Routing
        switch (view) {
            case 'ar':
                app.innerHTML = arTemplate;
                setDocumentMeta('ar', 'rtl');
                break;
            case 'en':
                app.innerHTML = enTemplate;
                setDocumentMeta('en', 'ltr');
                break;
            case 'roadmap-ar':
                app.innerHTML = roadmapAr;
                setDocumentMeta('ar', 'rtl');
                break;
            case 'roadmap-en':
                app.innerHTML = roadmapEn;
                setDocumentMeta('en', 'ltr');
                break;
            case 'master-ar':
                app.innerHTML = masterPlanAr;
                setDocumentMeta('ar', 'rtl');
                break;
            case 'master-en':
                app.innerHTML = masterPlanEn;
                setDocumentMeta('en', 'ltr');
                break;
            case 'map-ar':
                app.innerHTML = mapAr;
                setDocumentMeta('ar', 'rtl');
                break;
            case 'map-en':
                app.innerHTML = mapEn;
                setDocumentMeta('en', 'ltr');
                break;
            case 'team-ar':
                app.innerHTML = teamAr;
                setDocumentMeta('ar', 'rtl');
                break;
            case 'team-en':
                app.innerHTML = teamEn;
                setDocumentMeta('en', 'ltr');
                break;
            default:
                app.innerHTML = arTemplate;
                setDocumentMeta('ar', 'rtl');
        }

        updateDate(view);
        updateNavActiveButtons(view);
        app.style.opacity = '1';

        // Re-initialize animations after content swap
        initScrollAnimations();
        initWatermarkParallax();
    }, 200);
};

function updateNavActiveButtons(view) {
    const isEn = view.includes('en');
    const btnAr = document.getElementById('btn-ar');
    const btnEn = document.getElementById('btn-en');

    if (btnAr && btnEn) {
        btnAr.classList.toggle('active', !isEn);
        btnEn.classList.toggle('active', isEn);
    }

    const btnTeam = document.getElementById('btn-team');
    if (btnTeam) {
        btnTeam.innerText = isEn ? 'Meet the Team' : 'فريق العمل';
    }

    // Robust check for both IDs to handle potential cache mismatches
    const btnMenu = document.getElementById('btn-menu-link') || document.getElementById('btn-menu-original');
    if (btnMenu) {
        console.log('Updating menu button text to:', isEn ? 'Price List' : 'قائمة الأسعار'); // Debug
        btnMenu.innerText = isEn ? 'Price List' : 'قائمة الأسعار';

        // Ensure the link is correct even if onclick is stale
        btnMenu.onclick = function () {
            window.location.href = isEn ? '/Menu_English_2026.html' : '/Menu_Final_2026.html';
        };
    }
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const steps = document.querySelectorAll('.journey-step');
    steps.forEach(step => observer.observe(step));
}

function initWatermarkParallax() {
    const modalContent = document.querySelector('.modal-content');
    const watermark = document.querySelector('.modal-watermark');

    if (!modalContent || !watermark) return;

    // Reset transform to initial state
    watermark.style.transform = 'translate(-50%, -50%) scale(1)';

    modalContent.addEventListener('scroll', () => {
        const scrollTop = modalContent.scrollTop;

        // Parallax Effect:
        // Move down slightly (0.6x scroll speed) so it stays in view longer but moves up relative to viewport
        // Scale moves from 1.0 -> 1.2 as you scroll down
        const moveFactor = scrollTop * 0.6;
        const scaleFactor = 1 + (scrollTop * 0.0005);

        watermark.style.transform = `translate(-50%, calc(-50% + ${moveFactor}px)) scale(${scaleFactor})`;
    });
}

function setDocumentMeta(lang, dir) {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
}

/**
 * Modal Controls
 */
window.openMenu = function () {
    const modal = document.getElementById('menuModal');
    if (modal) modal.style.display = 'block';
};

window.closeMenu = function () {
    const modal = document.getElementById('menuModal');
    if (modal) modal.style.display = 'none';
};

// Global click handler for modal
window.onclick = function (event) {
    const modal = document.getElementById('menuModal');
    if (event.target == modal) {
        closeMenu();
    }
};

/**
 * Data Helpers
 */
function updateDate(view) {
    const dateDisplay = document.getElementById(view.includes('ar') ? 'dateDisplayAr' : 'dateDisplayEn');
    if (!dateDisplay) return;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locale = view.includes('ar') ? 'ar-EG' : 'en-GB';
    const prefix = view.includes('ar') ? 'تاريخ التحديث: ' : 'Last Update: ';

    dateDisplay.innerText = prefix + new Date().toLocaleDateString(locale, dateOptions);
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Basic transition CSS inject
    const style = document.createElement('style');
    style.innerHTML = `#app { transition: opacity 0.3s ease-in-out; }`;
    document.head.appendChild(style);

    window.setLanguage('ar');
});
