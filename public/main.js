// let closeButtons = document.querySelectorAll('.closePopupButton');
// let popoverButtons = document.querySelectorAll('.popoverButton');
// let targetId = button.getAttribute('popovertarget');
// let popover = document.getElementById(targetId);

// document.addEventListener('DOMContentLoaded', function () {

//     closeButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             if (popover) {
//                 popover.classList.add('closedPopup');
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', () => {

    // Open popup
    document.querySelectorAll('.openPopup').forEach(button => {
        button.addEventListener('click', () => {
            let popupId = button.getAttribute('data-popup-id');
            document.getElementById(popupId).classList.add('active');
        });
    });

    // Close popup
    document.querySelectorAll('.closePopupButton').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.mobilePopup').classList.remove('active');
        });
    });
});