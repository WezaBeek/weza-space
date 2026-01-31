/**
 * Weza Mom - Professional Optimized Script
 * Version: 1.0.0
 * Author: Weza.Space
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Constants & Elements ---
    const ELEMENTS = {
        checkbox: document.getElementById('checkbox'),
        toggleIcon: document.getElementById('toggleIcon'),
        starsContainer: document.getElementById('stars-container'),
        cloudsContainer: document.getElementById('clouds-container'),
        audio: document.getElementById('duaAudio'),
        audioBtn: document.getElementById('audioBtn'),
        playIcon: document.getElementById('playIcon'),
        playText: document.getElementById('playText'),
        volumeSlider: document.getElementById('volumeSlider'),
        volumeIcon: document.getElementById('volumeIcon'),
        counterBtn: document.getElementById('counterBtn'),
        counterDisplay: document.getElementById('counterDisplay')
    };

    const THEMES = {
        DAY: 'day',
        NIGHT: 'night'
    };

    // --- Theme Management ---
    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (ELEMENTS.checkbox) ELEMENTS.checkbox.checked = (theme === THEMES.DAY);
        if (ELEMENTS.toggleIcon) {
            ELEMENTS.toggleIcon.className = theme === THEMES.NIGHT ? 'fas fa-sun toggle-icon' : 'fas fa-moon toggle-icon';
        }

        generateStars();
        theme === THEMES.DAY ? generateClouds() : clearClouds();
    }

    if (ELEMENTS.checkbox) {
        ELEMENTS.checkbox.addEventListener('change', () => {
            applyTheme(ELEMENTS.checkbox.checked ? THEMES.DAY : THEMES.NIGHT);
        });
    }

    // --- Animation Generators ---
    function generateStars() {
        if (!ELEMENTS.starsContainer) return;
        ELEMENTS.starsContainer.innerHTML = '';
        const starCount = 60;

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // 40% chance for a highlighted star (Sky Blue)
            if (Math.random() > 0.6) star.classList.add('sky-blue');

            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3 + 2;
            const floatDuration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            Object.assign(star.style, {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `twinkle ${duration}s ease-in-out ${delay}s infinite, floatStar ${floatDuration}s ease-in-out ${delay}s infinite`
            });

            fragment.appendChild(star);
        }
        ELEMENTS.starsContainer.appendChild(fragment);
    }

    function generateClouds() {
        if (!ELEMENTS.cloudsContainer) return;
        ELEMENTS.cloudsContainer.innerHTML = '';
        const cloudCount = 8;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < cloudCount; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';

            const width = Math.random() * 400 + 300;
            const duration = Math.random() * 30 + 50;

            Object.assign(cloud.style, {
                width: `${width}px`,
                height: `${width * 0.5}px`,
                top: `${Math.random() * 80}%`,
                left: '-500px',
                animationDuration: `${duration}s`,
                animationDelay: `${Math.random() * -60}s`
            });

            fragment.appendChild(cloud);
        }
        ELEMENTS.cloudsContainer.appendChild(fragment);
    }

    function clearClouds() {
        if (ELEMENTS.cloudsContainer) ELEMENTS.cloudsContainer.innerHTML = '';
    }

    // --- Audio Control ---
    let isAudioPlaying = false;

    if (ELEMENTS.audio && ELEMENTS.volumeSlider) {
        ELEMENTS.audio.volume = ELEMENTS.volumeSlider.value; // Set initial volume

        // User interaction unlock
        const unlockAudio = () => {
            ELEMENTS.audio.play().then(() => {
                ELEMENTS.audio.pause();
                ['click', 'touchstart', 'keydown'].forEach(e => window.removeEventListener(e, unlockAudio));
            }).catch(() => { });
        };
        ['click', 'touchstart', 'keydown'].forEach(e => window.addEventListener(e, unlockAudio, { once: true }));

        ELEMENTS.audio.addEventListener('ended', () => updateAudioUI(false));

        // Volume Input
        ELEMENTS.volumeSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            ELEMENTS.audio.volume = val;
            updateVolumeIcon(val);
        });
    }

    if (ELEMENTS.audioBtn) {
        ELEMENTS.audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleAudio();
        });
    }

    function toggleAudio() {
        if (!ELEMENTS.audio) return;

        if (ELEMENTS.audio.paused) {
            ELEMENTS.audio.play()
                .then(() => updateAudioUI(true))
                .catch(err => console.error("Playback failed", err));
        } else {
            ELEMENTS.audio.pause();
            updateAudioUI(false);
        }
    }

    function updateAudioUI(playing) {
        isAudioPlaying = playing;
        if (ELEMENTS.playIcon) ELEMENTS.playIcon.className = playing ? 'fas fa-pause' : 'fas fa-play';
        if (ELEMENTS.playText) ELEMENTS.playText.innerText = playing ? "إيقاف الدعاء" : "استمع للدعاء";
    }

    function updateVolumeIcon(val) {
        if (!ELEMENTS.volumeIcon) return;
        if (val == 0) ELEMENTS.volumeIcon.className = 'fas fa-volume-mute';
        else if (val < 0.5) ELEMENTS.volumeIcon.className = 'fas fa-volume-down';
        else ELEMENTS.volumeIcon.className = 'fas fa-volume-up';
    }

    // --- Counter Logic ---
    if (ELEMENTS.counterBtn) {
        let count = parseInt(localStorage.getItem('duaCount')) || 1294;
        const updateDisplay = () => {
            if (ELEMENTS.counterDisplay) ELEMENTS.counterDisplay.innerText = count.toLocaleString('en-US');
        };
        updateDisplay();

        ELEMENTS.counterBtn.addEventListener('click', () => {
            count++;
            localStorage.setItem('duaCount', count);
            updateDisplay();

            // Success State
            const btn = ELEMENTS.counterBtn;
            const originalText = btn.innerHTML;

            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            btn.style.color = 'white';
            btn.innerHTML = 'أمين، ولكم بالمثل 🤍';
            btn.disabled = true;

            setTimeout(() => {
                btn.style.background = '';
                btn.style.color = '';
                btn.innerHTML = `قُل آمين <span id="counterDisplay" class="counter-badge">${count.toLocaleString('en-US')}</span>`;
                // Re-bind display element reference after innerHTML replacement
                ELEMENTS.counterDisplay = document.getElementById('counterDisplay');
                btn.disabled = false;
            }, 3000);
        });
    }

    // --- Initialization ---
    applyTheme(localStorage.getItem('theme') || THEMES.NIGHT);
});
