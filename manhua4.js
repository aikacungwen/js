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
    if (i === 7) {
        // Jika episode adalah 7, tambahkan tombol yang menautkan ke episode 7-8
        episodeUrl = 'https://play.1ac.site/p/manhua4-78.html';
        var tab = document.createElement('a');
        tab.setAttribute('href', episodeUrl);
        tab.textContent = '[7-8]';
    } else if (i === 8) {
        // Jika episode adalah 8, abaikan karena akan disambungkan dengan episode 7
        continue;
    } else {
        // Untuk episode lainnya, tetapkan URL sesuai biasanya
        episodeUrl = 'https://play.1ac.site/p/manhua4-' + i + '.html';
        var tab = document.createElement('a');
        tab.setAttribute('href', episodeUrl);
        tab.textContent = i;
    }

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

// Indeks episode terbaru
var latestEpisodeIndex = 11; // Misalnya episode terbaru adalah index 23 dalam array

// Buat tab-episode secara dinamis dan tambahkan label "baru" jika perlu
row = document.createElement('tr');
var counter = 0;
for (var j = 0; j < episodeLinks.length; j++) {
    var episodeUrl = episodeLinks[j];
    var tab = document.createElement('a');
    tab.setAttribute('href', episodeUrl);

    // Jika URL halaman saat ini terkandung dalam URL tab, atur tab sebagai aktif
    if (currentPageUrl.includes(episodeUrl.toLowerCase())) {
        tab.classList.add('active');
    }

    // Tambahkan teks nomor episode
    var episodeNumber = document.createElement('span');
    episodeNumber.textContent = j + 1;
    tab.appendChild(episodeNumber);

    var cell = document.createElement('td');
    cell.appendChild(tab);
    row.appendChild(cell);
    counter++;

    // Jika ini adalah episode terbaru, tambahkan label "baru" dengan gaya yang ditentukan
    if (j === latestEpisodeIndex) {
        var newLabel = document.createElement('span');
        newLabel.textContent = 'baru';
        newLabel.classList.add('new-label');
        tab.appendChild(newLabel);
    }

    // Setelah setiap 7 tab, buat baris baru
    if (counter % 7 === 0 || j === episodeLinks.length - 1) {
        tabsContainer.appendChild(row);
        row = document.createElement('tr');
    }
}
