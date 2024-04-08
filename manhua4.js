// Jumlah episode
var totalEpisodes = 51;

// Tangkap elemen kontainer tab
var tabsContainer = document.querySelector('.tab-container .tabs tbody');

// Mendapatkan URL halaman saat ini
var currentPageUrl = window.location.href.toLowerCase(); // Ubah ke huruf kecil

// Buat baris baru
var row = document.createElement('tr');

// Membuat link untuk setiap episode dan menambahkannya ke dalam tabContainer
for (var i = 1; i <= totalEpisodes; i++) {
    var episodeUrl;
    var tab = document.createElement('a');

    if (i === 7) {
        // Jika episode adalah episode yang dijadikan satu (7-8)
        episodeUrl = 'https://play.1ac.site/p/manhua4-78.html';
        tab.textContent = '7-8';
        i++; // Lewati satu iterasi karena sudah mencakup dua episode
    } else if (i >= 14 && i <= 30 && i % 2 === 0) {
        // Jika episode adalah episode yang dijadikan satu (14-15, 16-17, dst.)
        episodeUrl = 'https://play.1ac.site/p/manhua4-' + i + '.html';
        tab.textContent = i + '-' + (i + 1);
        i++; // Lewati satu iterasi karena sudah mencakup dua episode
    } else {
        // Untuk episode tunggal
        episodeUrl = 'https://play.1ac.site/p/manhua4-' + i + '.html';
        tab.textContent = i;
    }

    // Atur atribut href
    tab.setAttribute('href', episodeUrl);

    // Jika URL halaman saat ini terkandung dalam URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes('/manhua4-' + i + '.html')) {
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
