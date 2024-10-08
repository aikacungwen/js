// Jumlah episode
    var totalEpisodes = 171;

    // Tangkap elemen tabs
    var tabsContainer = document.querySelector('.tabs');

    // Mendapatkan URL halaman saat ini
    var currentPageUrl = window.location.href;

    // Buat tab-episode secara dinamis
    for (var i = 109; i <= totalEpisodes; i++) {
        var episodeUrl = 'https://aikacungwen30.blogspot.com/p/100k-' + i + '.html';

        var tab = document.createElement('a');
        tab.setAttribute('href', episodeUrl);
        tab.textContent = ' ' + i;

        // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
        if (currentPageUrl.includes('/100k-' + i + '.html')) {
            tab.classList.add('active');
        }

        tabsContainer.appendChild(tab);
    }
