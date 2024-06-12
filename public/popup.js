// function createPopup (id){
//     let popupNode = document.querySelector(id);
//     let overlay = popupNode.querySelector(".overlay");
//     let closeBtn = popupNode.querySelector(".close-btn");
//     function openPopup(){
//         popupNode.classList.add("active")
//     }
//     function closePopup(){
//         popupNode.classList.remove("active")
//     }
//     overlay.addEventlistener("click", closePopup);
//     closeBtn.addEventListener("click", closePopup);
//     return openPopup;
// }

// let popup = createPopup("#popup");
// document.querySelector("#open-popup").addEventListener("click", popup)

function createPopup(id) {
    let popupNode = document.querySelector(id);
    if (!popupNode) {
        console.error(`Element with id ${id} not found.`);
        return;
    }

    let overlay = popupNode.querySelector(".overlay");
    if (!overlay) {
        console.error(`Overlay element not found in ${id}.`);
        return;
    }

    let closeBtn = popupNode.querySelector(".close-btn");
    if (!closeBtn) {
        console.error(`Close button element not found in ${id}.`);
        return;
    }

    function openPopup() {
        popupNode.classList.add("active");
    }

    function closePopup() {
        popupNode.classList.remove("active");
    }

    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);

    return openPopup;
}

let popup = createPopup("#popup");
if (popup) {
    document.querySelector("#open-popup").addEventListener("click", popup);
} else {
    console.error("Popup initialization failed.");
}
