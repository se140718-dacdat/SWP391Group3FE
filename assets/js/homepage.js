const loginBtn = document.querySelector('.js-login-btn')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContent = document.querySelector('.js-modal-content')

function showModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

loginBtn.addEventListener('click', showModal)
modalClose.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)

modalContent.addEventListener('click', function(event) {
    event.stopPropagation()
})