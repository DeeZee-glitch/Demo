// script.js

// Function to trigger when the "Make a Wish!" button is clicked
function sendWish() {
    document.getElementById("birthday-message").innerHTML = "Sab Teri Hi Galti H Ahshan!";
    document.getElementById("birthday-message").style.animation = "none"; // Reset animation
    document.getElementById("birthday-message").style.opacity = "1"; // Make it visible instantly after animation
}
