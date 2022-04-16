document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let solde, somme, printout, confirmer, warning;
    solde = 1000;
    printout = document.querySelector("div p");
    warning = document.querySelector("div");
    somme = parseInt(prompt("Faites votre retrait"));

    if (somme >= 20 && somme <= 100) {
        solde = solde - somme;
        confirmer = confirm(" Confirmer votre retrait ");
        if (confirmer) {
            printout.innerHTML = ` Votre retrait est de : ${somme} € 
                                   <br> Votre Nouveau solde est de : ${solde} €`;
            warning.classList.add("success");
        } else {
            printout.innerText = ` Opération annulé `;
            warning.classList.add("warning");
        }
    } else if (!somme) {
        alert("veuillez saisir des chiffres");
        document.location.reload();
    } else {
        alert("veuillez saisir une somme entre 20 et 100 €");
        document.location.reload();
    }
});