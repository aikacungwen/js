// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs');

// Array yang berisi link untuk setiap episode
var episodeLinks = [
    'https://play.1ac.site/p/al-1.html',
    'https://play.1ac.site/p/al-2.html',
    'https://play.1ac.site/p/al-3.html',
    'https://play.1ac.site/p/al-4.html',
    'https://play.1ac.site/p/al-5.html',
    'https://play.1ac.site/p/al-6.html'
    'https://play.1ac.site/p/al-7.html',
    'https://play.1ac.site/p/al-8.html',
    'https://play.1ac.site/p/al-9.html',
    'https://play.1ac.site/p/al-10.html',
    'https://play.1ac.site/p/al-11.html',
    'https://play.1ac.site/p/al-12.html'
];

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Buat tab-episode secara dinamis
for (var i = 1; i <= episodeLinks.length; i++) {
    var episodeUrl = episodeLinks[i - 1];

    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);
    tab.textContent = ' ' + i;

    // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
    if (currentPageUrl === episodeUrl) {
        tab.classList.add('active');
    }

    tabsContainer.appendChild(tab);
}
