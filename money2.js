// Jumlah episode
var totalEpisodes = 100;

// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs');

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Buat tab-episode secara dinamis
for (var i = 61; i <= totalEpisodes; i++) {
    var episodeUrl = 'https://play.1ac.site/p/money2-' + i + '.html'; // Ganti "100k" dengan "money2"

    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);
    
    if (i === 61) {
        tab.textContent = '[61-64]';
        tab.classList.add('active'); // Set kelas active untuk episode [61-64]
    } else {
        tab.textContent = ' ' + i;
        // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
        if (currentPageUrl.includes('/money2-' + i + '.html')) { // Ganti "/100k-" dengan "/money2-"
            tab.classList.add('active');
        }
    }

    tabsContainer.appendChild(tab);
}
