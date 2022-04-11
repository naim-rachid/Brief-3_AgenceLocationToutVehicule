var i = 0; // point de départ
var images = [];
var alts = [];
var time = 3000; // 3 seconds

// Liste des Images
images[0] = 'home_images/moto_home.png';
alts[0] = 'Moto.png';

images[1] = 'home_images/compact_home.png';
alts[1] = 'compact.png';

images[2] = 'home_images/citadin_home.png';
alts[2] = 'citadin.png';

images[3] = 'home_images/berline_home.png';
alts[3] = 'berline.png';

images[4] = 'home_images/utilitaire_home.png';
alts[4] = 'utilitaire.png';

images[5] = 'home_images/camion_home.png';
alts[5] = 'camion.png';

images[6] = 'home_images/engin-chantier_home.png';
alts[6] = 'engin_chantier.png';

// Changer Image
function changeImg() {
    document.querySelector("#slide").src = images[i];
    document.querySelector("#slide").alt = alts[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;