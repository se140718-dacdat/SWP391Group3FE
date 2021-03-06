// SHOW POPUP-LOGIN

const loginBtn = document.querySelector('.js-login-btn')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContent = document.querySelector('.js-modal-content')


function showModal() {
    modal.classList.add('display');
}

function closeModal() {
    modal.classList.remove('display');
    loginStatus.classList.remove('display');
    document.getElementById("modal-cover").style.height = '67%';
}

loginBtn.addEventListener('click', showModal)
modalClose.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)

modalContent.addEventListener('click', function(event) {
    event.stopPropagation()
})

// SHOW POPUP-REGISTER
const registerLink = document.querySelector('.js-register-link')
const register = document.querySelector('.js-register')
const registerClose = document.querySelector('.js-register-close')
const registerContent = document.querySelector('.js-register-content')

function showRegister() {
    register.classList.add('display')
    modal.classList.remove('display')
}

function closeRegister() {
    register.classList.remove('display')
}

registerLink.addEventListener('click', showRegister)
registerClose.addEventListener('click', closeRegister)
register.addEventListener('click', closeRegister)
registerContent.addEventListener('click', function(event) {
    event.stopPropagation()
})

// REGISTER STATUS 
const btnRegister = document.querySelector('.js-register')
btnRegister.addEventListener('click', registerForm)

function registerForm() {
    register.classList.remove('display')
    alert('Your form has been submitted!')
    return false;
}

// CHECK LOGIN 
const loginStatus = document.querySelector('.login-status')
const IconX = '<i class="fas fa-times"></i>'
const usernameDemo = 'dacdat'
const pwdDemo = '123456'

function checkLogin() {
    var username = document.forms["js-modal-container"]["username"].value;
    if (username == "") {
        loginStatus.innerHTML = IconX + ' Login failed: Please enter your username or email.';
        loginStatus.classList.add('display');
        document.getElementById("modal-cover").style.height = '69%';
        return false;
    }
    var password = document.forms["js-modal-container"]["pwd"].value;
    if (password == "") {
        loginStatus.innerHTML = IconX + ' Login failed: Please enter your password.';
        loginStatus.classList.add('display');
        document.getElementById("modal-cover").style.height = '69%';
        return false;
    }

    if (username == usernameDemo && password == pwdDemo) {
        // page redirect
    } else {
        loginStatus.innerHTML = IconX + ' Login failed: username or password is incorrect.';
        loginStatus.classList.add('display');
        document.getElementById("modal-cover").style.height = '69%';
        return false;
    }
}