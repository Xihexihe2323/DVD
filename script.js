const dvdLogo = document.getElementById('dvdLogo');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let posX = Math.random() * (screenWidth - 100);
let posY = Math.random() * (screenHeight - 50);
let deltaX = 2; // Kecepatan horizontal
let deltaY = 2; // Kecepatan vertikal

function moveLogo() {
    posX += deltaX;
    posY += deltaY;

    // Menghitung batas untuk mantul
    const logoWidth = 100; // Lebar logo
    const logoHeight = 50; // Tinggi logo

    // Jika logo mencapai tepi, ubah arah
    if (posX <= 0 || posX >= screenWidth - logoWidth) {
        deltaX = -deltaX;
    }
    if (posY <= 0 || posY >= screenHeight - logoHeight) {
        deltaY = -deltaY;
    }

    dvdLogo.style.left = posX + 'px';
    dvdLogo.style.top = posY + 'px';

    requestAnimationFrame(moveLogo);
}

// Mulai animasi
moveLogo();
