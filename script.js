const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form")
const emailMessage = document.getElementById("email-message")
const passwordMessage = document.getElementById("password-message")
const emailDiv = document.getElementById("email-block")
const passwordDiv = document.getElementById("password-block")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (email.value === "" || email.value === null) {
        emailMessage.removeAttribute("hidden");
        toggleClass(emailMessage, "error", "success");
        emailMessage.innerText = "Invalid email"
    } else if (!email.value.includes("@") || !email.value.includes(".") ) {
        emailMessage.removeAttribute("hidden");
        toggleClass(emailMessage, "error", "success");
        emailMessage.innerText = "Check your email"
    } else {
        emailMessage.removeAttribute("hidden");
        toggleClass(emailMessage, "success", "error");
        emailMessage.innerText = "Email is correct"
    };

    if (password.value === "" || password.value === null) {
        passwordMessage.removeAttribute("hidden");
        toggleClass(passwordMessage, "error", "success");
        passwordMessage.innerText = "Invalid password"
    } else if (password.value.length < 6) {
        passwordMessage.removeAttribute("hidden");
        toggleClass(passwordMessage, "error", "success");
        passwordMessage.innerText = "Password should be more then 6 characters"
    } else {
        passwordMessage.removeAttribute("hidden");
        toggleClass(passwordMessage, "success", "error");
        passwordMessage.innerText = "Password is correct"
    };
})

const toggleClass = (el, addClass, removeClass) => {
    el.classList.add(addClass)
    el.classList.remove(removeClass);
}