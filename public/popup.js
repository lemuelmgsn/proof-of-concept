function createPopup(id) {
    // Zoek het popup-element op basis van het doorgegeven id
    let popupNode = document.querySelector(id);
    if (!popupNode) {
        console.error(`Element with id ${id} not found.`);
        return;
    }
    // Zoek het overlay-element binnen de popup
    let overlay = popupNode.querySelector(".overlay");
    if (!overlay) {
        console.error(`Overlay element not found in ${id}.`);
        return;
    }
    // Zoek de close button binnen de popup
    let closeBtn = popupNode.querySelector(".close-btn");
    if (!closeBtn) {
        console.error(`Close button element not found in ${id}.`);
        return;
    }
    // Functie om de popup te openen
    function openPopup() {
        popupNode.classList.add("active");
    }
    // Functie om de popup te sluiten
    function closePopup() {
        popupNode.classList.remove("active");
    }

    // Voeg een click event listener toe aan de overlay om de popup te sluiten
    overlay.addEventListener("click", closePopup);

    // Voeg een click event listener toe aan de close button om de popup te sluiten
    closeBtn.addEventListener("click", closePopup);

    // Retourneer de functie om de popup te openen
    return openPopup;
}

let popup = createPopup("#popup");
if (popup) {
    document.querySelector("#open-popup").addEventListener("click", popup);
} else {
    console.error("Popup initialization failed.");
}


// test met Sanne voor svg

// const recreatieButton = document.querySelector("#recreatie, #bouw, #bakker, #wonen, #industrie");

// function toggleRecreatieInfo() {
//   alert("recreatie info");
// }

// recreatieButton.addEventListener("click", toggleRecreatieInfo);

