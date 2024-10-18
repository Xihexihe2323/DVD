const dvdLogo = document.getElementById('dvdLogo');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let posX = Math.random() * (screenWidth - 100); // Mulai di dalam batas layar
let posY = Math.random() * (screenHeight - 50); // Mulai di dalam batas layar
let deltaX = 2; // Kecepatan horizontal
let deltaY = 2; // Kecepatan vertikal

function moveLogo() {
    posX += deltaX;
    posY += deltaY;

    // Menghitung batas untuk pantulan
    const logoWidth = 100; // Lebar logo
    const logoHeight = 50; // Tinggi logo
    const buffer = 5; // Jarak dari tepi layar untuk pantulan

    // Jika logo mencapai tepi, ubah arah
    if (posX <= buffer || posX >= screenWidth - logoWidth - buffer) {
        deltaX = -deltaX;
    }
    if (posY <= buffer || posY >= screenHeight - logoHeight - buffer) {
        deltaY = -deltaY;
    }

    dvdLogo.style.left = posX + 'px';
    dvdLogo.style.top = posY + 'px';

    requestAnimationFrame(moveLogo);
}

// Mulai animasi
moveLogo();
