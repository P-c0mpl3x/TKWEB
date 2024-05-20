const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const sign = document.querySelector("#sign");
const signup = document.querySelector('#signup')
const signdone = document.querySelector("#signdone");
const checksignin = document.querySelector("#checksignin");


function sign_in() {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
}

function sign_up() {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
}

// Ấn vào btn sign-in
loginBtn.addEventListener('click', () => {
    sign_in();
})

// Ấn vào btn Sign Up
registerBtn.addEventListener('click', function() {
    sign_up();

})

// An vao Đăng kí ngay
sign.addEventListener('click', function() {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
})

let sum = 0;

function validateEmailInput() {
    const emailInput = document.getElementById('Email');
    const checkEmailMessage = document.getElementById('check-email');

    const isValidEmail = /\S+@\S+\.\S+/.test(emailInput.value);
    if (!isValidEmail) {
        checkEmailMessage.style.display = 'block';
        emailInput.classList.add('invalid');
    } else {
        checkEmailMessage.style.display = 'none';
        emailInput.classList.remove('invalid');
        sum++;
    }
}

function validateUsernameInput() {
    const usernameInput = document.getElementById('user');
    const checkUsernameMessage = document.getElementById('check-username');

    if (usernameInput.value.trim() === "") {
        checkUsernameMessage.style.display = 'block';
        usernameInput.classList.add('invalid');
    } else {
        checkUsernameMessage.style.display = 'none';
        usernameInput.classList.remove('invalid');
        sum++;
    }
}

function validatePasswordInput() {
    const passwordInput = document.getElementById('password');
    const checkPasswordMessage = document.getElementById('check-password');

    if (passwordInput.value.trim() === "") {
        checkPasswordMessage.style.display = 'block';
        passwordInput.classList.add('invalid');
    } else {
        checkPasswordMessage.style.display = 'none';
        passwordInput.classList.remove('invalid');
        sum++;
    }
}

function validateUsernameInputSignIn() {
    const usernameInput = document.getElementById('user1');
    const checkUsernameMessage = document.getElementById('check-username1');

    if (usernameInput.value.trim() === "") {
        checkUsernameMessage.style.display = 'block';
        usernameInput.classList.add('invalid');
    } else {
        checkUsernameMessage.style.display = 'none';
        usernameInput.classList.remove('invalid');
        sum++;
    }
}

function validatePasswordInputSignIn() {
    const passwordInput = document.getElementById('password1');
    const checkPasswordMessage = document.getElementById('check-password1');

    if (passwordInput.value.trim() === "") {
        checkPasswordMessage.style.display = 'block';
        passwordInput.classList.add('invalid');
    } else {
        checkPasswordMessage.style.display = 'none';
        passwordInput.classList.remove('invalid');
        sum++;
    }
}


signup.addEventListener('click', function() {
    validateUsernameInput();
    validateEmailInput();
    validatePasswordInput();

    if (sum == 3) {
        sign_in();
        sign.classList.add('hide');
        signdone.style.display = 'block';
    }

});

checksignin.addEventListener('click', function() {
    validateUsernameInputSignIn();
    validatePasswordInputSignIn();
    sign.classList.remove('hide')
    signdone.style.opacity = "0";
})