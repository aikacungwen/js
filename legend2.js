// Jumlah episode
    var totalEpisodes = 55;

    // Tangkap elemen tabs
    var tabsContainer = document.querySelector('.tabs');

    // Mendapatkan URL halaman saat ini
    var currentPageUrl = window.location.href;

    // Buat tab-episode secara dinamis
    for (var i = 23; i <= totalEpisodes; i++) {
        var episodeUrl = 'https://aikacungwen30.blogspot.com/p/legend2-' + i + '.html';

        var tab = document.createElement('a');
        tab.setAttribute('href', episodeUrl);
        tab.textContent = ' ' + i;

        // Jika URL halaman saat ini cocok dengan URL tab, atur tab sebagai aktif
        if (currentPageUrl.includes('/legend2-' + i + '.html')) {
            tab.classList.add('active');
        }

        tabsContainer.appendChild(tab);
    } 
