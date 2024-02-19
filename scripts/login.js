// LOGIN FORM
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validateLogin();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.login-error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.login-error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
function validateLogin() {
    const emailValue1 = document.getElementById("email1").value.trim();
    const passwordValue1 = document.getElementById("password1").value.trim();

    if (emailValue1 === '') {
        setError(email1, 'Email is required');
        return;
    }
    if (passwordValue1 === '') {
        setError(password1, "Password is not available")
    }
    let userData = JSON.parse(localStorage.getItem("usersData")) || [];
    if (passwordValue1 !== userData.password) {
        setError(password1, "incorrect Password ")
    }
    const user = userData.find(u => u.email === emailValue1 && u.password === passwordValue1);
    if (user) {
        window.location.href = "blog.html";
    } else {
        const errorMessage = document.getElementById("login-error2");
        errorMessage.textContent = "Invalid email or password";
    }
}