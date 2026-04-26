function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        valid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
    }

    return false;
}