// Initialize EmailJS with your User ID
(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const project = document.getElementById("project").value.trim();
    const responseMessage = document.getElementById("response-message");

    // Simple validation for empty fields
    if (!name || !email || !project) {
        responseMessage.innerHTML = "<p>Please fill in all fields.</p>";
        responseMessage.style.color = "red";
        return;
    }

    // Validate email format using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        responseMessage.innerHTML = "<p>Please enter a valid email address.</p>";
        responseMessage.style.color = "red";
        return;
    }

    // Display loading message while email is being sent
    responseMessage.innerHTML = "<p>Sending message...</p>";
    responseMessage.style.color = "blue";

    // EmailJS service and template IDs
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        project: project
    }).then(function (response) {
        responseMessage.innerHTML = "<p>Message sent successfully!</p>";
        responseMessage.style.color = "green";
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("contact-form").reset(); // Reset form
    }, function (error) {
        responseMessage.innerHTML = "<p>Failed to send message. Please try again later.</p>";
        responseMessage.style.color = "red";
        console.log("FAILED...", error);
    });
});
