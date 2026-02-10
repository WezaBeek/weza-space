/**
 * Weza Technologies - Premium Feedback System v6.0 (Final Stable)
 * Local Audio Assets + Natural Cursor + UI Polish
 */

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('toast-overlay')) return;

    const modalHTML = `
    <div id="toast-overlay" class="toast-overlay">
        <div class="toast-box">
            <span id="toast-icon" class="toast-icon" style="font-size: 5rem; display: block; margin-bottom: 20px;"></span>
            <h2 id="toast-message" class="toast-message" style="font-size: 2rem; color: #FFC857;"></h2>
            <p id="toast-submessage" class="toast-submessage" style="font-size: 1.2rem; opacity: 0.8; margin-top: 10px;"></p>
            <button class="toast-btn" onclick="closeToast()" style="margin-top: 30px; padding: 15px 40px; font-size: 1.1rem; background: #FFC857; border: none; border-radius: 50px; cursor: pointer; color: #020617; font-weight: bold;">متابعة المهمة (Continue)</button>
        </div>
    </div>
    <div id="screen-flash" style="position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:9998; opacity:0; transition: opacity 0.3s; background: white;"></div>
    <canvas id="confetti-canvas"></canvas>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
});

/**
 * Play Audio from Local OGG Files
 * Files: bravo ya luly.ogg, wrong answer.ogg
 */
function playLocalAudio(type) {
    const file = type === 'success' ? window.location.pathname.includes('/pages/') ? '../assets/audio/bravo_ya_luly.ogg' : 'assets/audio/bravo_ya_luly.ogg' : window.location.pathname.includes('/pages/') ? '../assets/audio/wrong_answer.ogg' : 'assets/audio/wrong_answer.ogg';
    const audio = new Audio(file);
    audio.play().catch(e => console.error("Audio play failed:", e));
}

window.check = function (isCorrect) {
    const overlay = document.getElementById('toast-overlay');
    const icon = document.getElementById('toast-icon');
    const msg = document.getElementById('toast-message');
    const sub = document.getElementById('toast-submessage');
    const flash = document.getElementById('screen-flash');
    const container = document.querySelector('.container') || document.body;

    if (isCorrect) {
        // Success: برافو يا لولي
        icon.textContent = "🌟";
        msg.textContent = "برافو يا لولي!";
        sub.textContent = "أداء ممتاز يا مهندسة! | Excellent Job!";

        if (flash) {
            flash.style.backgroundColor = "rgba(0, 242, 255, 0.4)";
            flash.style.opacity = "1";
            setTimeout(() => flash.style.opacity = "0", 300);
        }
        if (typeof fireConfetti === "function") fireConfetti();
        playLocalAudio('success');

    } else {
        // Failure: إجابة خاطئة | The answer is wrong
        icon.textContent = "⚠️";
        msg.textContent = "إجابة خاطئة";
        sub.textContent = "The answer is wrong";

        if (flash) {
            flash.style.backgroundColor = "rgba(239, 68, 68, 0.4)";
            flash.style.opacity = "1";
            setTimeout(() => flash.style.opacity = "0", 300);
        }
        container.classList.add('shake-screen');
        setTimeout(() => container.classList.remove('shake-screen'), 500);
        playLocalAudio('fail');
    }

    overlay.classList.add('active');
};

window.closeToast = function () {
    document.getElementById('toast-overlay').classList.remove('active');
};

// Simple Confetti Engine
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const colors = ['#00f2ff', '#7000ff', '#FFC857', '#ffffff'];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - 20,
            c: colors[Math.floor(Math.random() * 4)],
            r: Math.random() * 6 + 2,
            v: Math.random() * 5 + 2
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let live = false;
        particles.forEach(p => {
            p.y += p.v;
            if (p.y < canvas.height) live = true;
            ctx.fillStyle = p.c;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill();
        });
        if (live) requestAnimationFrame(draw);
    }
    draw();
}

// Global text-to-speech for lessons (English)
window.speak = function (text) {
    const synth = window.speechSynthesis;
    synth.cancel();
    const m = new SpeechSynthesisUtterance(text);
    m.lang = 'en-US';
    m.rate = 0.9;
    synth.speak(m);
}

// Final Launch System (Lesson 10 Graduation)
window.launch = function () {
    const cert = document.getElementById('certificate');
    if (cert) {
        cert.style.display = 'block';
        if (typeof fireConfetti === "function") fireConfetti();
        playLocalAudio('success');
        cert.scrollIntoView({ behavior: 'smooth' });
    }
}
