document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const mailformat = e => {
    const emailRegex = /\w+@\w+\.\w+/;
    return emailRegex.test(String(e).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
        return;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        return;
    } else if (!mailformat(emailValue)) {
        setError(email, 'Provide a valid email address');
        return;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        return;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        return;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        return;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
        return;
    } else {
        setSuccess(password2);
    }
    let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    
    
    for(let user of usersData){
        if (user.username === usernameValue && user.email === emailValue) {
            window.location.href = "login.html";
            return;
        }
        if (user.username === usernameValue) {
            setError(username, 'Username already exists');
            return;
        }
        if (user.email === emailValue) {
            setError(email, 'Email already exists');
            return;
        }
        if (user.username === usernameValue && user.email === emailValue) {
            setError(username, 'Account already exists. Please log in.');
            setError(email, '');
            document.querySelector('.lowerpartsignup p').innerHTML = 'Account already exists. Please <a href="login.html">log in</a>.';
            return;
        }
    }
    const userData = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: password2Value
    };
    usersData.push(userData);
    localStorage.setItem("usersData", JSON.stringify(usersData));
    form.reset();
    alert("Form submitted successfully!");
};



