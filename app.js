const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const subButton = document.getElementById("submit-button")
const giveUp = document.getElementById("give-up")
const hint = document.getElementById("hint")
const vault = document.getElementById("vault")
const body = document.querySelector("body")



function checkPassword() {
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!")
        password.style.border = "1px solid red"
        confirmPassword.style.border = "1px solid red"
    }
    else {
        if (vault.value == 68) {
            body.style.backgroundImage = "url(images/money.jpg)"
            body.innerHTML = ""
            body.style.backgroundSize = "cover"
        } else {
            alert("WRONG!")
        }
    }
}

function reveal() {
    hint.style.color = "black";
}




subButton.addEventListener("click", checkPassword)
giveUp.addEventListener("click", reveal)