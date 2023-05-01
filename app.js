const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const button = document.getElementById("form")






function checkPassword() {
    if (password === confirmPassword) {
        alert("Passwords match!")
        console.log(password)
    } else {
        alert("passwords do not match!")
        console.log(confirmPassword)
    }
}




button.addEventListener("click", checkPassword())