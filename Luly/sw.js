const CACHE_NAME = 'weza-luly-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/css/style.css',
    './assets/js/feedback.js',
    './assets/audio/bravo ya luly.ogg',
    './assets/audio/wrong answer.ogg',
    './pages/lesson1.html',
    './pages/lesson2.html',
    './pages/lesson3.html',
    './pages/lesson4.html',
    './pages/lesson5.html',
    './pages/lesson6.html',
    './pages/lesson7.html',
    './pages/lesson8.html',
    './pages/lesson9.html',
    './pages/lesson10.html',
    './pages/prompt_mastery.html',
    './pages/ai_giants.html',
    './pages/perfection_loop.html'
];

// Install Event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Caching assets for offline use...');
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request);
        })
    );
});
