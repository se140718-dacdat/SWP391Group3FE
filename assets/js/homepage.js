// SHOW POPUP

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
    // var password = document.forms["js-modal-container"]["pwd"].value;
    // if (username === "dacdat" && password === "123456") {
    //     loginStatus.classList.add('errorMsg')
    //     return true;
    // } else {
    //     return false;
    // }
}

// var login = false;
// if(login)