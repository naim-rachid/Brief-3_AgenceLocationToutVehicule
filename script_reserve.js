var listeCarburantPourCitadine;
var listeCarburantPourCompact;
var listeCarburantPourUtilitaire;
var listeCarburantPourEnginChantier;
var nbrJoursReservation = document.querySelector("#nbr_jours_reservation");
var dureeReservation = document.querySelector('#duree_reservation');
// Les pourcentage de boite à vitesse
const pourcentageAutomatique = 0.19; // +19%
const pourcentageManuelle = 0;
// Les pourcentages des carburants
var pourcentageElectrique = 0.05; // +5%
var pourcentageHybride = 0.09;
var pourcentageEssence = 0.14;
var pourcentageDiesel = 0.21;
// Les tarifs de véhicules
const tarifMoto = 10;
const tarifCitadine = 12;
const tarifCompact = 14;
const traifBerline = 16;
const tarifUtilitaire = 20;
const tarifEnginChantier = 900;
const tarifCamion = 250;
// Variables globales utilitaires
var pourcentageBoiteVitesseSelectionne;
var tarif;
var pourcentageCarburantSelectionne;
var resultEstimPrix = 0;
var resultEstimationPrixH3 = document.querySelector("#result_estimation_prix h3");

var liste_carburant = document.querySelector('#liste_carburant');
var liste_carburant_pour_moto = document.querySelector('#liste_carburant_pour_moto');
const SECTION_LIST_BOITE_VITESSE = document.querySelector("#liste_boite_vitesse");
//---
const INPUT_RADIO_CHOISIR_MOTO_AUTRE = document.querySelectorAll('input[name="choisir_moto_ou_autre"]');
for (let inputradiochoisirmotoautreElement of INPUT_RADIO_CHOISIR_MOTO_AUTRE) {
    resultEstimationPrixH3.innerHTML = "";
    resultEstimPrix = 0;
    inputradiochoisirmotoautreElement.addEventListener('change', function () {
        console.log("INPUT_RADIO_CHOISIR_MOTO_AUTRE = ", INPUT_RADIO_CHOISIR_MOTO_AUTRE);
        if (inputradiochoisirmotoautreElement.checked && inputradiochoisirmotoautreElement.value == "m") {
            console.log("m");
            liste_carburant.style.display = 'flex';
            liste_carburant_pour_moto.style.display = 'flex';
            pourcentageBoiteVitesseSelectionne = 0;
            tarif = tarifMoto;
        } else {
            console.log("a");
            SECTION_LIST_BOITE_VITESSE.style.display = 'flex';
        }
    });
}

const seclectElmtBoiteVitesse = document.querySelector('#boite_vitesse');
seclectElmtBoiteVitesse.addEventListener('change', function () {
    resultEstimPrix = 0;
    resultEstimationPrixH3.innerHTML = "";

    // Les élément du bloc liste_carburant
    liste_carburant = document.querySelector('#liste_carburant');
    liste_carburant_pour_moto = document.querySelector('#liste_carburant_pour_moto');

    // Les éléments du bloc liste_vehicule
    var liste_vehicule = document.querySelector('#liste_vehicule');
    var liste_vehicule_pour_manuelle = document.querySelector('#liste_vehicule_pour_manuelle');
    var liste_vehicule_pour_automatique = document.querySelector('#liste_vehicule_pour_automatique');
    // Le bloc de 'saisir le nombre de jours de réservation'
    blocEstimationPrix = document.querySelector("#bloc_estimation_prix");

    let valeurSelectionnee = seclectElmtBoiteVitesse.options[seclectElmtBoiteVitesse.selectedIndex].value;
    let textSelectionnee = seclectElmtBoiteVitesse.options[seclectElmtBoiteVitesse.selectedIndex].text;
    if (valeurSelectionnee == "moto") // Afficher seulement le bloc de la liste carburant pour moto
    {
        pourcentageBoiteVitesseSelectionne = 0;
        tarif = tarifMoto;
        console.log("boite à vitesse choisie = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        liste_carburant_pour_moto.style.display = 'flex';

        nbrJoursReservation.style.display = 'flex';
        //
        liste_vehicule.style.display = 'none';
        liste_vehicule_pour_manuelle.style.display = 'none';
        liste_vehicule_pour_automatique.style.display = 'none';
        //
        if (listeCarburantPourCitadine != null) {
            listeCarburantPourCitadine.style.display = 'none';
            listeCarburantPourCompact.style.display = 'none';
            listeCarburantPourUtilitaire.style.display = 'none';
            listeCarburantPourEnginChantier.style.display = 'none';
        }
        if (listeCarburantPourBerline != null) {
            listeCarburantPourBerline.style.display = 'none';
            //
            listeCarburantPourCamion.style.display = 'none';
        }
        //
        dureeReservation.value = null;
        nbrJours = 0;
        console.log("dureeReservation.value = ", dureeReservation.value);
        // console.log("listeCarburantPourCitadine.style.display = ", listeCarburantPourCitadine.style.display);
    }
    else if (valeurSelectionnee == "manuelle") // Afficher seulement le bloc de la liste vehicule pour manuelle
    {
        pourcentageBoiteVitesseSelectionne = pourcentageManuelle;
        console.log("boite à vitesse choisie = ", valeurSelectionnee);
        liste_vehicule.style.display = 'block';
        liste_vehicule_pour_manuelle.style.display = 'flex';
        //
        liste_carburant.style.display = 'none';
        liste_carburant_pour_moto.style.display = 'none';
        //
        liste_vehicule_pour_automatique.style.display = 'none';
    }
    else if (valeurSelectionnee == "automatique") {
        pourcentageBoiteVitesseSelectionne = pourcentageAutomatique;
        console.log("boite à vitesse choisie = ", valeurSelectionnee);
        liste_vehicule.style.display = 'block';
        liste_vehicule_pour_automatique.style.display = 'flex';
        //
        liste_carburant.style.display = 'none';
        liste_carburant_pour_moto.style.display = 'none';
        //
        liste_vehicule_pour_manuelle.style.display = 'none';
    }
    else {
        liste_carburant_pour_moto.style.display = 'none';
        liste_carburant.style.display = 'none';
        //
        nbrJoursReservation.style.display = 'none';
        //
        blocEstimationPrix.style.display = 'none';
        // estimationPrix.style.display = 'none';
        //
        liste_vehicule.style.display = 'none';
        liste_vehicule_pour_manuelle.style.display = 'none';
        liste_vehicule_pour_automatique.style.display = 'none';
        //
        dureeReservation.value = null;
        console.log("dureeReservation.value = ", dureeReservation.value);
    }
});

//---
const seclectElmtType_vehicule_m = document.querySelector('#type_vehicule_m');
seclectElmtType_vehicule_m.addEventListener('change', function () {
    resultEstimPrix = 0;
    resultEstimationPrixH3.innerHTML = "";
    dureeReservation.value = null;

    // Les élément du bloc liste_carburant
    let liste_carburant = document.querySelector('#liste_carburant');
    // Les élément du bloc de 'liste des véhicules manuelle' pour Citadine
    listeCarburantPourCitadine = document.querySelector("#liste_carburant_pour_citadine");
    // Les élément du bloc de 'liste des véhicules manuelle' pour Compact
    listeCarburantPourCompact = document.querySelector("#liste_carburant_pour_compact");
    // Les élément du bloc de 'liste des véhicules manuelle' pour Utilitaire
    listeCarburantPourUtilitaire = document.querySelector("#liste_carburant_pour_utilitaire");
    // Les élément du bloc de 'liste des véhicules manuelle' pour Engin de Chantier
    listeCarburantPourEnginChantier = document.querySelector("#liste_carburant_pour_engin_chantier");
    // Le bloc de 'saisir le nombre de jours de réservation'
    nbrJoursReservation = document.querySelector("#nbr_jours_reservation");

    let valeurSelectionnee = seclectElmtType_vehicule_m.options[seclectElmtType_vehicule_m.selectedIndex].value;
    let textSelectionnee = seclectElmtType_vehicule_m.options[seclectElmtType_vehicule_m.selectedIndex].text;

    if (valeurSelectionnee == "citadine") {
        tarif = tarifCitadine;
        console.log("Type de véhicule manuelle choisie - text = ", textSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourCitadine.style.display = 'flex';
        //
        nbrJoursReservation.style.display = 'flex';
        //
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
        listeCarburantPourEnginChantier.style.display = 'none';
    }
    else if (valeurSelectionnee == "compact") {
        tarif = tarifCompact;
        console.log("Type de véhicule manuelle choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourCompact.style.display = 'flex';
        //
        nbrJoursReservation.style.display = 'flex';
        //
        listeCarburantPourCitadine.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
        listeCarburantPourEnginChantier.style.display = 'none';
    }
    else if (valeurSelectionnee == "utilitaire") {
        tarif = tarifUtilitaire;
        console.log("Type de véhicule manuelle choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourUtilitaire.style.display = 'flex';
        //
        nbrJoursReservation.style.display = 'flex';
        //
        listeCarburantPourCitadine.style.display = 'none';
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourEnginChantier.style.display = 'none';
    }
    else if (valeurSelectionnee == "engin_chantier") {
        tarif = tarifEnginChantier;
        console.log("Type de véhicule manuelle choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourEnginChantier.style.display = 'flex';
        //
        nbrJoursReservation.style.display = 'flex';
        //
        listeCarburantPourCitadine.style.display = 'none';
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
    }
    else {
        listeCarburantPourEnginChantier.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourCitadine.style.display = 'none';
        liste_carburant.style.display = 'none';
        //
        nbrJoursReservation.style.display = 'none';
    }
});

//---
var listeCarburantPourBerline;
var listeCarburantPourCamion;
const seclectElmtTypeVehiculeAuto = document.querySelector('#type_vehicule_auto');
seclectElmtTypeVehiculeAuto.addEventListener('change', function () {
    resultEstimPrix = 0;
    resultEstimationPrixH3.innerHTML = "";
    dureeReservation.value = null;
    console.log("la ligne 215 - dureeReservation.value = ", dureeReservation.value);

    // Les élément du bloc liste_carburant
    let liste_carburant = document.querySelector('#liste_carburant');
    // Les élément du bloc de 'liste des véhicules automatique' pour Berline
    listeCarburantPourBerline = document.querySelector("#liste_carburant_pour_berline");
    // Les élément du bloc de 'liste des véhicules automatique' pour Camion
    listeCarburantPourCamion = document.querySelector("#liste_carburant_pour_camion");
    // Le bloc de 'saisir le nombre de jours de réservation'
    nbrJoursReservation = document.querySelector("#nbr_jours_reservation");

    let valeurSelectionnee = seclectElmtTypeVehiculeAuto.options[seclectElmtTypeVehiculeAuto.selectedIndex].value;

    if (valeurSelectionnee == "berline") {
        tarif = traifBerline;
        console.log("Type de véhicule auto choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourBerline.style.display = 'flex';
        //
        nbrJoursReservation.style.display = 'flex';
        //
        listeCarburantPourCamion.style.display = 'none';
    }
    else if (valeurSelectionnee == "camion") {
        tarif = tarifCamion;
        console.log("Type de véhicule auto choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourCamion.style.display = 'flex';
        //
        nbrJoursReservation.style.display = 'flex';
        //
        listeCarburantPourBerline.style.display = 'none';
    }
    else {
        console.log("Type de véhicule auto choisie - valeur = ", valeurSelectionnee);
        listeCarburantPourCamion.style.display = 'none';
        listeCarburantPourBerline.style.display = 'none';
        liste_carburant.style.display = 'none';
        //
        nbrJoursReservation.style.display = 'none';
    }
});

// ---------------- Traitement sur carburants ----------------------
// Pour Moto
const seclectElmtCarburantMoto = document.querySelector("#carburant_moto");

seclectElmtCarburantMoto.addEventListener('change', function () {
    let valeurSelectionne = seclectElmtCarburantMoto.options[seclectElmtCarburantMoto.selectedIndex].value;
    console.log("valeurSelectionne = ", valeurSelectionne);
    resultEstimationPrixH3.innerHTML = "";

    if (valeurSelectionne == "electrique") {
        pourcentageCarburantSelectionne = pourcentageElectrique;
        nbrJoursReservation.style.display = 'flex';
    }
    else if (valeurSelectionne == "essence") {
        pourcentageCarburantSelectionne = pourcentageEssence;
        nbrJoursReservation.style.display = 'flex';
    }
});
// Pour Citadine
const seclectElmtCarburantCitadine = document.querySelector("#carburant_citadine");
seclectElmtCarburantCitadine.addEventListener('change', function () {
    let valeurSelectionne = seclectElmtCarburantCitadine.options[seclectElmtCarburantCitadine.selectedIndex].value;

    if (valeurSelectionne == "electrique") {
        pourcentageCarburantSelectionne = pourcentageElectrique;
    }
    else if (valeurSelectionne == "hybride") {
        pourcentageCarburantSelectionne = pourcentageHybride;
    }
    else if (valeurSelectionne == "essence") {
        pourcentageCarburantSelectionne = pourcentageEssence;
    }
    else if (valeurSelectionne == "diesel") {
        pourcentageCarburantSelectionne = pourcentageDiesel;
    }
});
// Pour Compact
const seclectElmtCarburantCompact = document.querySelector("#carburant_compact");
seclectElmtCarburantCompact.addEventListener('change', function () {
    let valeurSelectionne = seclectElmtCarburantCompact.options[seclectElmtCarburantCompact.selectedIndex].value;

    if (valeurSelectionne == "hybride") {
        pourcentageCarburantSelectionne = pourcentageHybride;
    }
    else if (valeurSelectionne == "essence") {
        pourcentageCarburantSelectionne = pourcentageEssence;
    }
    else if (valeurSelectionne == "diesel") {
        pourcentageCarburantSelectionne = pourcentageDiesel;
    }
});
// Pour Utilitaire
const seclectElmtCarburantUtilitaire = document.querySelector("#carburant_utilitaire");
let valeurSelectionneUtilitaire = seclectElmtCarburantUtilitaire.options[seclectElmtCarburantUtilitaire.selectedIndex].value;
if (valeurSelectionneUtilitaire == "diesel") {
    pourcentageCarburantSelectionne = pourcentageDiesel;
}
// Pour Engin de Chantier
const seclectElmtCarburantEnginChantier = document.querySelector("#engin_chantier");
seclectElmtCarburantEnginChantier.addEventListener('change', function () {
    let valeurSelectionne = seclectElmtCarburantEnginChantier.options[seclectElmtCarburantEnginChantier.selectedIndex].value;

    if (valeurSelectionne == "essence") {
        pourcentageCarburantSelectionne = pourcentageEssence;
    }
    else if (valeurSelectionne == "diesel") {
        pourcentageCarburantSelectionne = pourcentageDiesel;
    }
});
// Pour Berline
const seclectElmtCarburantBerline = document.querySelector("#carburant_berline");
seclectElmtCarburantBerline.addEventListener('change', function () {
    let valeurSelectionne = seclectElmtCarburantBerline.options[seclectElmtCarburantBerline.selectedIndex].value;

    if (valeurSelectionne == "hybride") {
        pourcentageCarburantSelectionne = pourcentageHybride;
    }
    else if (valeurSelectionne == "essence") {
        pourcentageCarburantSelectionne = pourcentageEssence;
    }
    else if (valeurSelectionne == "diesel") {
        pourcentageCarburantSelectionne = pourcentageDiesel;
    }
});
// Pour Camion
const seclectElmtCarburantCamion = document.querySelector("#carburant_camion");
let valeurSelectionneCamion = seclectElmtCarburantCamion.options[seclectElmtCarburantCamion.selectedIndex].value;
if (valeurSelectionneCamion == "diesel") {
    pourcentageCarburantSelectionne = pourcentageDiesel;
}
// Le problème : tu dois ajouter un choix vide au chaque élément de carburant pour que le "pourcentageCarburantSelectionne"
// ne prend pas forcément la dernière valeur comme ici dans la ligne 350
console.log("--> Ligne 353 : pourcentageCarburantSelectionne = ", pourcentageCarburantSelectionne);

var blocEstimationPrix = document.querySelector("#bloc_estimation_prix");
var nbrJours = 0;
dureeReservation.addEventListener('change', function () {
    // console.log("dureeReservation = ", dureeReservation);
    if (dureeReservation.value != null) {
        console.log("dureeReservation dans le bloc blocEstimationPrix = ", dureeReservation.value);
        nbrJours = Number(dureeReservation.value);
        console.log("nbrJours = ", nbrJours);

        blocEstimationPrix.style.display = 'block';
        blocEstimationPrix.style.textAlign = 'center';
        //
        // estimationPrix.style.display = 'block';
        console.log("blocEstimationPrix.style.display = ", blocEstimationPrix.style.display);
    }
});
console.log("--> entrant dans ligne 371 -- resultEstimPrix = ", resultEstimPrix);

const estimationPrix = document.querySelector("#estimation_prix");

estimationPrix.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("type tarif = ", typeof tarif);
    console.log("tarif = ", tarif);
    console.log("type pourcentageCarburantSelectionne = ", typeof pourcentageCarburantSelectionne);
    console.log("pourcentageCarburantSelectionne = ", pourcentageCarburantSelectionne);
    console.log("pourcentageBoiteVitesseSelectionne = ", pourcentageBoiteVitesseSelectionne);
    console.log("type nbrJours = ", typeof nbrJours);
    console.log("nbrJours = ", nbrJours);

    resultEstimPrix = (tarif + (tarif * pourcentageBoiteVitesseSelectionne) + (tarif * pourcentageCarburantSelectionne)) * nbrJours;
    console.log("resultEstimPrixMoto = ", resultEstimPrix);
    resultEstimationPrixH3.innerHTML = "<b> L'estimation du prix : " + resultEstimPrix + " £</b>";
});