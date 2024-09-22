// Jumlah episode
var totalEpisodes = 9;

// Tangkap elemen tabs
var tabsContainer = document.querySelector('.tabs');

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href;

// Buat tab-episode secara dinamis
var mergedEpisodeUrl = 'https://aikacungwen30.blogspot.com/p/xi-xing-ji-movie-2024-1-2.html'; // Ganti "100k" dengan "money2"

var mergedTab = document.createElement('a');
mergedTab.setAttribute('href', mergedEpisodeUrl);
mergedTab.textContent = 'Episodes [1-2]';

// Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
if (currentPageUrl.includes('/xi-xing-ji-movie-2024-1-2.html')) { // Ganti "/100k-" dengan "/money2-"
    mergedTab.classList.add('active');
}

// Tambahkan tab gabungan ke dalam container
tabsContainer.appendChild(mergedTab);

// Buat tab-episode untuk episode 65 dan seterusnya
for (var i = 3; i <= totalEpisodes; i++) {
    var episodeUrl = 'https://aikacungwen30.blogspot.com/p/xi-xing-ji-movie-2024-' + i + '.html'; // Ganti "100k" dengan "money2"

    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);
    tab.textContent = ' ' + i;

    // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes('/xi-xing-ji-movie-2024-' + i + '.html')) { // Ganti "/100k-" dengan "/money2-"
        tab.classList.add('active');
    }

    tabsContainer.appendChild(tab);
} 
