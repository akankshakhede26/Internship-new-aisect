// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate fields
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all the fields.");

        return;
    }

    // Confirmation alert
    alert(
        "Thank you, " + name +
        "! Your message has been submitted successfully."
    );

    // Clear form
    contactForm.reset();

});


// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    // Change button icon
     
    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});