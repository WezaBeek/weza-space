document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const checkbox = document.getElementById('checkbox');
    const toggleIcon = document.getElementById('toggleIcon');
    const starsContainer = document.getElementById('stars-container');
    const cloudsContainer = document.getElementById('clouds-container');

    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (checkbox) checkbox.checked = (theme === 'day');

        if (toggleIcon) {
            toggleIcon.className = theme === 'night' ? 'fas fa-sun toggle-icon' : 'fas fa-moon toggle-icon';
        }

        // Both modes get stars (Day Sparkles / Night Stars)
        generateStars();

        if (theme === 'day') {
            generateClouds();
        } else {
            if (cloudsContainer) cloudsContainer.innerHTML = '';
        }
    }

    if (checkbox) {
        checkbox.addEventListener('change', () => {
            const nextTheme = checkbox.checked ? 'day' : 'night';
            applyTheme(nextTheme);
        });
    }

    // Initial Load
    const savedTheme = localStorage.getItem('theme') || 'night';
    applyTheme(savedTheme);

    // --- Night Mode: Twinkling Stars ---
    function generateStars() {
        if (!starsContainer) return;
        starsContainer.innerHTML = '';
        const starCount = 60;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 5;
            star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
            starsContainer.appendChild(star);
        }
    }

    // --- Day Mode: Floating Clouds (New Feature) ---
    function generateClouds() {
        if (!cloudsContainer) return;
        cloudsContainer.innerHTML = '';
        const cloudCount = 5;
        for (let i = 0; i < cloudCount; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            const width = Math.random() * 300 + 200;
            const height = width * 0.4;
            const top = Math.random() * 60; // Keep clouds in top area
            const delay = Math.random() * -30; // Random starting positions
            const duration = Math.random() * 40 + 60; // Very slow movement

            cloud.style.width = `${width}px`;
            cloud.style.height = `${height}px`;
            cloud.style.top = `${top}%`;
            cloud.style.left = `-400px`;
            cloud.style.setProperty('--duration', `${duration}s`);
            cloud.style.animationDelay = `${delay}s`;

            cloudsContainer.appendChild(cloud);
        }
    }

    // --- Audio Player Logic ---
    const audio = document.getElementById('duaAudio');
    const audioBtn = document.getElementById('audioBtn');
    const playIcon = document.getElementById('playIcon');
    const playText = document.getElementById('playText');

    let audioStarted = false;

    if (audio) {
        audio.volume = 0.8;
        const startAudio = () => {
            if (audioStarted) return;
            audio.play().then(() => {
                audioStarted = true;
                updateAudioUI(true);
                ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(evt => {
                    window.removeEventListener(evt, startAudio);
                });
            }).catch(() => { });
        };

        ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(evt => {
            window.addEventListener(evt, startAudio, { once: false });
        });

        audio.addEventListener('ended', () => {
            updateAudioUI(false);
            audio.currentTime = 0;
            audioStarted = false;
        });
    }

    if (audioBtn) {
        audioBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleAudio();
        });
    }

    function toggleAudio() {
        if (!audio) return;
        if (audio.paused) {
            audio.play().then(() => {
                updateAudioUI(true);
                audioStarted = true;
            });
        } else {
            audio.pause();
            updateAudioUI(false);
        }
    }

    function updateAudioUI(isPlaying) {
        if (!playIcon || !playText) return;
        playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
        playText.innerText = isPlaying ? "إيقاف الدعاء" : "استمع للدعاء";
    }

    // --- Counter Logic ---
    const counterBtn = document.getElementById('counterBtn');
    const counterDisplay = document.getElementById('counterDisplay');

    let count = parseInt(localStorage.getItem('duaCount')) || 1294;
    if (counterDisplay) counterDisplay.innerText = count.toLocaleString('en-US');

    if (counterBtn) {
        counterBtn.addEventListener('click', () => {
            count++;
            localStorage.setItem('duaCount', count);
            if (counterDisplay) counterDisplay.innerText = count.toLocaleString('en-US');

            counterBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            counterBtn.style.color = 'white';
            counterBtn.innerHTML = 'أمين، ولكم بالمثل، جزاكم الله خيرا . 🤍';
            counterBtn.disabled = true;

            setTimeout(() => {
                counterBtn.style.background = '';
                counterBtn.style.color = '';
                counterBtn.innerHTML = `قُل آمين <span id="counterDisplay" class="counter-badge">${count.toLocaleString('en-US')}</span>`;
                counterBtn.disabled = false;
            }, 3000);
        });
    }
});
