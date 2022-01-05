var i = 0; // point de départ
var images = [];
var time = 3000; // 3 seconds

// Liste des Images
images[0] = 'home_images/moto_home.png';
images[1] = 'home_images/compact_home.jpg';
images[2] = 'home_images/citadin_home.jpg';
images[3] = 'home_images/berline_home.jpg';
images[4] = 'home_images/utilitaire_home.jpg';
images[5] = 'home_images/camion_home.jpg';
images[6] = 'home_images/engin-chantier_home.jpg';

// Changer Image
function changeImg() {
    document.querySelector("#slide").src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;