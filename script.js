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
    if (posX <= 5 || posX >= screenWidth - logoWidth - 5) {
        deltaX = -deltaX;
    }
    if (posY <= 5 || posY >= screenHeight - logoHeight - 5) {
        deltaY = -deltaY;
    }

    // Memastikan logo bisa menyentuh pojok
    if (posX <= 5 && deltaX < 0) {
        deltaX = -deltaX;
        deltaY = (Math.random() < 0.5) ? -deltaY : deltaY; // Ganti arah vertikal secara acak
    }
    if (posY <= 5 && deltaY < 0) {
        deltaY = -deltaY;
        deltaX = (Math.random() < 0.5) ? -deltaX : deltaX; // Ganti arah horizontal secara acak
    }
    if (posX >= screenWidth - logoWidth - 5 && deltaX > 0) {
        deltaX = -deltaX;
        deltaY = (Math.random() < 0.5) ? -deltaY : deltaY; // Ganti arah vertikal secara acak
    }
    if (posY >= screenHeight - logoHeight - 5 && deltaY > 0) {
        deltaY = -deltaY;
        deltaX = (Math.random() < 0.5) ? -deltaX : deltaX; // Ganti arah horizontal secara acak
    }

    dvdLogo.style.left = posX + 'px';
    dvdLogo.style.top = posY + 'px';

    requestAnimationFrame(moveLogo);
}

// Mulai animasi
moveLogo();
