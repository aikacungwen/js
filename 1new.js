// Jumlah episode
        var totalEpisodes = 1;

        // Tangkap elemen kontainer tab
        var tabsContainer = document.querySelector('.tab-container .tabs tbody');

        // Mendapatkan URL halaman saat ini
        var currentPageUrl = window.location.href.toLowerCase(); // Ubah ke huruf kecil

        // Buat baris baru
        var row = document.createElement('tr');

        // Array untuk menyimpan link episode
        var episodeLinks = [];

        // Membuat link untuk setiap episode
        for (var i = 1; i <= totalEpisodes; i++) {
            var episodeUrl = 'https://play.1ac.site/p/al-' + i + '.html';
            episodeLinks.push(episodeUrl);

            var tab = document.createElement('a');
            tab.setAttribute('href', episodeUrl);
            tab.textContent = i;

            // Jika URL halaman saat ini terkandung dalam URL tab, atur tab sebagai aktif
            if (currentPageUrl.includes('/al-' + i + '.html')) {
                tab.classList.add('active');
            }

            var cell = document.createElement('td');
            cell.appendChild(tab);

            row.appendChild(cell);

            // Jika sudah mencapai batas kolom, tambahkan baris baru
            if (i % 7 === 0 || i === totalEpisodes) {
                tabsContainer.appendChild(row);
                row = document.createElement('tr'); // Baris baru
            }
        }

        // Indeks episode terbaru
        var latestEpisodeIndex = 9999; // Misalnya episode terbaru adalah index 23 dalam array

        // Buat tab-episode secara dinamis
        row = document.createElement('tr');
        var counter = 0;
        episodeLinks.forEach(function(episodeUrl, index) {
            var tab = document.createElement('a');
            tab.setAttribute('href', episodeUrl);

            // Jika URL halaman saat ini terkandung dalam URL tab, atur tab sebagai aktif
            if (currentPageUrl.includes(episodeUrl.toLowerCase())) {
                tab.classList.add('active');
            }

            // Tambahkan teks nomor episode
            var episodeNumber = document.createElement('span');
            episodeNumber.textContent = index + 1;
            tab.appendChild(episodeNumber);

            var cell = document.createElement('td');
            cell.appendChild(tab);
            row.appendChild(cell);
            counter++;

            // Jika ini adalah episode terbaru, tambahkan label "baru" dengan gaya yang ditentukan
            if (index === latestEpisodeIndex) {
                var newLabel = document.createElement('span');
                newLabel.textContent = 'baru';
                newLabel.classList.add('new-label');
                tab.appendChild(newLabel);
            }

            // Setelah setiap 7 tab, buat baris baru
            if (counter % 7 === 0 || index === episodeLinks.length - 1) {
                tabsContainer.appendChild(row);
                row = document.createElement('tr');
            }
        }); 
