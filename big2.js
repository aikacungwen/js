var totalEpisodes = 43; // Ubah total episode menjadi 15

// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs');

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Buat tab-episode secara dinamis
for (var i = 12; i <= totalEpisodes; i++) {
    var episodeUrl = i === 14 ? 'https://www.aikacungwen.eu.org/p/big2-14_6.html' : 'https://aikacungwen30.blogspot.com/p/big2-' + i + '.html';

    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);
    tab.textContent = ' ' + i;

    // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes('/big2-' + i + '.html')) {
        tab.classList.add('active');
    }

    tabsContainer.appendChild(tab);
}
