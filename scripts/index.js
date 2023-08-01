// ---------------PARTIE POPUP----------------------------
// enregistrement des constiables necessaire à l'evenement
const btnconfirm = document.getElementById("btnconfirm");
const btnclose = document.getElementById("btnclose");
const overlay = document.querySelector(".overlay");

// champ du formulaire et validator
const validator = document.getElementsByClassName("validator");
const myinput = document.getElementsByClassName("myinput");

// definition de l'evenement ouverture de overlay
btnconfirm.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (
    myinput[0].value === "" ||
    myinput[1].value === "" ||
    myinput[2].value === ""
  ) {
    if (myinput[0].value === "") {
      validator[0].textContent = `Veuillez enter votre identité`;
    }
    if (myinput[1].value === "") {
      validator[1].textContent = `Veuillez enter votre adresse email`;
    }
    if (myinput[2].value === "") {
      validator[2].textContent = `Veuillez enter votre message`;
    }
  } else {
    for (let i = 0; i < myinput.length; i++) {
        myinput[i].value = ``;
      validator[i].textContent = ``;
    }
    ouvrirFenetre();
  }
});

function ouvrirFenetre() {
  overlay.style.display = "block";
}

btnclose.addEventListener("click", fermerFenetre);

function fermerFenetre() {
  overlay.style.display = "none";
}

// --------------FIN PARTIE POPUP------------------------
