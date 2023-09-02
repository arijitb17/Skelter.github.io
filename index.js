  // Set the date we're counting down to (replace with your desired date)
  var countdownDate = new Date("2023-09-15T00:00:00").getTime();

  // Update the countdown every 1 second
  var countdownInterval = setInterval(function() {
      var currentDate = new Date().getTime();
      var distance = countdownDate - currentDate;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the countdown is over, display a message
      if (distance < 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown").innerHTML = "We're here!";
      }
  }, 1000);
  document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const notifyButton = document.getElementById("notifyButton");
    const confirmationMessage = document.getElementById("confirmationMessage");

    notifyButton.addEventListener("click", function () {
        const userEmail = emailInput.value.trim();

        if (isValidEmail(userEmail)) {
            // You can send the user's email to your backend for processing here
            // Replace the following alert with your backend integration
            alert("Email submitted: " + userEmail);

            // Display a confirmation message and hide the input and button
            emailInput.classList.add("hidden");
            notifyButton.classList.add("hidden");
            confirmationMessage.classList.remove("hidden");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
// JavaScript to update the cart count
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount(count) {
    cartCount = count;
    cartCountElement.textContent = cartCount;
}

// Example usage:
updateCartCount(3); // Update the cart count to 3

// JavaScript to toggle the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
