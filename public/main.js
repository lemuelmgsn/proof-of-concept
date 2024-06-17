document.addEventListener('DOMContentLoaded', () => {

    // Open popup
    
    document.querySelectorAll('.openPopup').forEach(button => {
        button.addEventListener('click', () => {
            let popupId = button.getAttribute('data-popup-id')
            document.getElementById(popupId).classList.add('active')
            button.closest('#infographic').document.classList.add('zoom')
        });
    });

    // Close popup
    
    document.querySelectorAll('.closePopupButton').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.mobilePopup').classList.remove('active')
        });
    });
});
