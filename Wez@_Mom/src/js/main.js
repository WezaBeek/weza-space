document.addEventListener('DOMContentLoaded', () => {
    // --- Stars Background Logic ---
    const starsContainer = document.getElementById('stars-container');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random size
        const size = Math.random() * 2 + 1;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random animation delay and duration for twinkling
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;

        starsContainer.appendChild(star);
    }

    // --- Audio Player Logic ---
    const audio = document.getElementById('duaAudio');
    const audioBtn = document.getElementById('audioBtn');
    const playIcon = document.getElementById('playIcon');
    const playText = document.getElementById('playText');
    const originalText = "استمع للدعاء";
    const playingText = "إيقاف الدعاء";

    if (audio) {
        audio.volume = 0.8;

        // Play once on open (Requires user gesture in some browsers, but we try)
        // Many browsers block autoplay. If blocked, it will play on first click.
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                updateAudioUI(true);
            }).catch(error => {
                console.log("Autoplay blocked. Waiting for user interaction.");
            });
        }

        audio.addEventListener('ended', () => {
            updateAudioUI(false);
            audio.currentTime = 0;
        });
    }

    if (audioBtn && audio) {
        audioBtn.addEventListener('click', toggleAudio);
    }

    function toggleAudio() {
        if (audio.paused) {
            audio.play().then(() => {
                updateAudioUI(true);
            }).catch(error => {
                console.error("Audio playback failed:", error);
            });
        } else {
            audio.pause();
            updateAudioUI(false);
        }
    }

    function updateAudioUI(isPlaying) {
        if (isPlaying) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            playText.innerText = playingText;
            audioBtn.style.background = 'rgba(212, 175, 55, 0.25)';
            audioBtn.style.borderColor = '#d4af37';
        } else {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            playText.innerText = originalText;
            audioBtn.style.background = '';
            audioBtn.style.borderColor = '';
        }
    }

    // --- Counter Logic ---
    const counterBtn = document.getElementById('counterBtn');
    const counterDisplay = document.getElementById('counterDisplay');

    let count = parseInt(localStorage.getItem('duaCount')) || 1241;
    if (counterDisplay) counterDisplay.innerText = count.toLocaleString('en-US');

    if (counterBtn) {
        counterBtn.addEventListener('click', () => {
            count++;
            localStorage.setItem('duaCount', count);
            if (counterDisplay) counterDisplay.innerText = count.toLocaleString('en-US');

            // Interaction feedback
            const originalContent = counterBtn.innerHTML;
            counterBtn.innerHTML = 'جزاكم الله خيراً <i class="fas fa-check" style="margin-right: 8px;"></i>';
            counterBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                counterBtn.innerHTML = `قُل آمين <span id="counterDisplay" class="counter-badge">${count.toLocaleString('en-US')}</span>`;
                counterBtn.style.pointerEvents = 'auto';
            }, 1500);
        });
    }
});
