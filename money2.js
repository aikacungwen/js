// Jumlah episode
var totalEpisodes = 86;

// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs');

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Buat tab-episode secara dinamis
var mergedEpisodeUrl = 'https://play.1ac.site/p/money2-6164.html'; // Ganti "100k" dengan "money2"

var mergedTab = document.createElement('a');
mergedTab.setAttribute('href', mergedEpisodeUrl);
mergedTab.textContent = 'Episodes [61-64]';

// Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
if (currentPageUrl.includes('/money2-6164.html')) { // Ganti "/100k-" dengan "/money2-"
    mergedTab.classList.add('active');
}

// Tambahkan tab gabungan ke dalam container
tabsContainer.appendChild(mergedTab);

// Buat tab-episode untuk episode 65 dan seterusnya
for (var i = 65; i <= totalEpisodes; i++) {
    var episodeUrl = 'https://play.1ac.site/p/money2-' + i + '.html'; // Ganti "100k" dengan "money2"

    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);
    tab.textContent = ' ' + i;

    // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes('/money2-' + i + '.html')) { // Ganti "/100k-" dengan "/money2-"
        tab.classList.add('active');
    }

    tabsContainer.appendChild(tab);
}
