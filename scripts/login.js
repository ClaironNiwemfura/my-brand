// LOGIN FORM
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validateLogin();
});

function validateLogin() {
    const emailValue1 = document.getElementById("email1").value.trim();
    const passwordValue1 = document.getElementById("password1").value.trim();

    if (emailValue1 === '') {
        setError(email, 'Email is required');
        return;
    }
    if (passwordValue1 === '') {
        setError(password, "Password is not available")
    }
    let userData = JSON.parse(localStorage.getItem("usersData")) || [];

    const user = userData.find(u => u.email === emailValue1 && u.password === passwordValue1);
    if (user) {
        window.location.href = "blog.html";
    } else {

        const errorMessage = document.getElementById("login-error");
        errorMessage.textContent = "Invalid email or password";
    }
}