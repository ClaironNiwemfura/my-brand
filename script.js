// function toggleMenu(){
// const menu=document.querySelector(".menu-links");
// const icon = document.querySelector(".hamburger-icon")
// menu.classlist.toggle("open");
// icon.classlist.toggle("open")
// }

// window.onload= function () {
//     const menu_btn =document.querySelector('.hamburger')
//     const mobile_menu= document.querySelector('.mobile-nav')
//     menu_btn.addEventListener('click', function() {
//         menu_btn.classList.toggle('is-active');
//         mobile_menu.classList.toggle('is-active')
//     })
// }

const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password= document.getElementById("password");
const password2= document.getElementById("password2");

form.addEventListener ('submit', e=>{
    e.preventDefault();
    validateInputs();
});

const setError =(element,message)=>{
    const inputControl= element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText =message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess= element =>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error')

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}
const mailformat =(e) =>{
    const emailRegex = /\w+@\w+.\w+/;
    return emailRegex.test(String(e).toLowerCase())
}
// const isValidEmail = emailRegex.test(email);
const validateInputs=()=>{
    const usernameValue =username.value.trim()
    const emailValue =email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    localStorage.setItem("username",usernameValue);
    localStorage.setItem("Email",emailValue );
    localStorage.setItem("Password",passwordValue);
    localStorage.setItem("Password",password2Value);
    
    if (usernameValue === ''){
        setError(username,'username is required')
    } else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'email is required')
    }else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if (passwordValue ===''){
        setError(password,'password is required');
    }else if (passwordValue.length <8 ){
        setError(password,'password must be atleast 8 character.')
    }else{
        setSuccess(password);
    }
    if(password2Value ===''){
        setError(password2,'please confirm your password');
    }else if (password2Value !== passwordValue){
      setError(password2,"passwords doesn't match")
    }else{
        setSuccess(password2)
    } 
}