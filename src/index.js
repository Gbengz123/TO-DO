import './style.css';
import {inboxPageLoad} from './inbox';
import tasksPageLoad from './tasksPage';

const navButtons = document.querySelectorAll('.side-nav')
let currentPage = ''
let nextPage = ''

navButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        nextPage = e.target.id
        console.log(nextPage)

        if (nextPage === currentPage) return

        if (nextPage === 'Inbox') {currentPage = inboxPageLoad()} 
        if (nextPage === 'Tasks') {currentPage = tasksPageLoad()}
    })
})


const formModal = document.querySelector('#modalDialog');
const formClosebtn = document.querySelector('#closeModal');
const newTaskBtn = document.querySelector('.newTaskBtn');

newTaskBtn.addEventListener('click', () => {
    formModal.showModal()
})

formClosebtn.addEventListener('click', () => {
    formModal.close()
})

