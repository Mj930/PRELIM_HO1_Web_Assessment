// Show Hobbies Alert
function showHobbies() {
    alert("My hobbies include watching movies, coding, and playing baseketball, console and online games!");
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you! Your message has been sent.");
        this.reset();
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
