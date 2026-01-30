document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic (Pill Switch) ---
    const checkbox = document.getElementById('checkbox');
    const toggleIcon = document.getElementById('toggleIcon');
    const starsContainer = document.getElementById('stars-container');

    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update Checkbox and Icon inside thumb
        if (checkbox) {
            checkbox.checked = (theme === 'day');
        }

        if (toggleIcon) {
            // Logic: Night mode shows SUN (to switch to day), Day mode shows MOON (to switch to night)
            if (theme === 'night') {
                toggleIcon.className = 'fas fa-sun toggle-icon';
            } else {
                toggleIcon.className = 'fas fa-moon toggle-icon';
            }
        }

        if (theme === 'night') {
            generateStars();
        } else {
            if (starsContainer) starsContainer.innerHTML = '';
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

    // --- Stars Background Logic ---
    function generateStars() {
        if (!starsContainer) return;
        starsContainer.innerHTML = '';
        const starCount = 60;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 3 + 2;
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

    // --- Audio Player Logic & Robust Interaction-Based Autoplay ---
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
                // Remove listeners as soon as audio starts
                ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(evt => {
                    window.removeEventListener(evt, startAudio);
                });
            }).catch(e => {
                // Silently wait for the next user event
            });
        };

        // Standard sequence: Try immediate, then fallback to ANY user action
        ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(evt => {
            window.addEventListener(evt, startAudio, { once: false });
        });

        // Small delay to try initial play after load
        setTimeout(startAudio, 100);

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
        if (isPlaying) {
            playIcon.className = 'fas fa-pause';
            playText.innerText = "إيقاف الدعاء";
        } else {
            playIcon.className = 'fas fa-play';
            playText.innerText = "استمع للدعاء";
        }
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

            // Interaction feedback
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
