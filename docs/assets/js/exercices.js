document.addEventListener("DOMContentLoaded", function () {
  const selectedColorInput = document.getElementById("selected-color"); // definie le id de changement de couleur
  const changeColorButton = document.getElementById("change-color-button"); // definie le boutton qui change
  const body = document.body;

  changeColorButton.addEventListener("click", function () { // lorsque que l'on clique la fonction se lance
      const selectedColor = selectedColorInput.value; // changement de valeur
      body.style.backgroundColor = selectedColor; // on affecte la couleur de fond en la nouvelle rentrer ultérieurement
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const newItemInput = document.getElementById("new-item");// on va chercher les id dans le doc 
  const addButton = document.getElementById("add-button");// ***
  const itemList = document.getElementById("item-list");// ***

  addButton.addEventListener("click", function () {
      const newItemText = newItemInput.value; // on change la valeur

      if (newItemText.trim() !== "") {
          const newItem = document.createElement("li"); // on crée des nouvelles balises li
          newItem.textContent = newItemText; // attribution nouvelle valeur

          itemList.appendChild(newItem); // on ajoute apres le parent

          newItemInput.value = ""; // quand on veut réecrire on efface le texte d'avant
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const numero1Input = document.getElementById("numero1");// definir les variables
  const numero2Input = document.getElementById("numero2"); //definir les variables
  const calculerButton = document.getElementById("Calculer"); //definir les variables
  const resultParagraph = document.getElementById("resultat"); //definir les variables

  calculerButton.addEventListener("click", function () {
      const num1 = parseFloat(numero1Input.value);// on ajoute les valeurs mise a une constante
      const num2 = parseFloat(numero2Input.value);// on ajoute les valeurs mise a une constante

      if (!isNaN(num1) && !isNaN(num2)) {
          const sum = num1 + num2; // on dit que la constante sum est la somme de la constante numero1 + numero2
          resultParagraph.textContent = "Résultat : " + sum; // sum est le resultat de num1 + num2
          numero1Input.value = "";// ensuite je supprime les nombres mis pour que ce soit plus rapide a la prochaine saisie
          numero2Input.value = "";//
      } else {
          alert("Veuillez entrer des nombres valides."); // message erreur si ce n'est pas un nombre
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageSelector = document.getElementById("image-selector");
    const displayedImage = document.getElementById("displayed-image");

    imageSelector.addEventListener("change", function () {
        const selectedImage = imageSelector.value;
        displayedImage.src = selectedImage;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elementASurvoler = document.getElementById("element-a-survoler"); // on recupere l'id dans le html

    elementASurvoler.addEventListener("mouseover", function () { // on utilise mouseover
        alert("Votre pc explose dans 3.....2.....1 BOOOOOM"); // et on affiche l'alerte que l'on veut
    });
});


function updateDigitalClock() {
    const digitalClock = document.getElementById("HorlogeNum");
    const currentTime = new Date();
    const heures = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const secondes = currentTime.getSeconds().toString().padStart(2, '0');

    digitalClock.textContent = `${heures}:${minutes}:${secondes}`;
}

// Mettre à jour l'horloge toutes les secondes
setInterval(updateDigitalClock, 1000);

// Appeler la fonction une fois au chargement de la page pour afficher l'heure actuelle
updateDigitalClock();

