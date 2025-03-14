// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// Background Music Control
const music = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');

// Play music after user interaction
document.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    }
});

muteButton.addEventListener('click', () => {
    if (music.muted) {
        music.muted = false;
        muteButton.textContent = '🔇 Mute';
    } else {
        music.muted = true;
        muteButton.textContent = '🔈 Unmute';
    }
});

// Heart Animation on Click
document.addEventListener('click', (event) => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${event.clientX - 10}px`;
    heart.style.top = `${event.clientY - 10}px`;
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Confetti Effect on Page Load
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
});

// Countdown Timer
const countdown = () => {
    const anniversaryDate = new Date('March 19, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = anniversaryDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<p>Happy Anniversary, My Love! ❤️</p>";
    }
};

const interval = setInterval(countdown, 1000);