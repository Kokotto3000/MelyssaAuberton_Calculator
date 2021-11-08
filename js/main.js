const FORM= document.querySelector("form");
const inputs= FORM.elements;

const RESULT= document.querySelector("h2 span");

FORM.addEventListener("submit", e=> {
    e.preventDefault();
    // console.log("Calculer");
    // console.log(inputs["brut"].value);
    RESULT.innerText= inputs["brut"].value;
});

// refaire une organisation avec eventmanager, vérifs sur les inputs, calcul, affichage