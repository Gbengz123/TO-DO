import './style.css';
import inboxPageLoad from './inbox';

const InboxBtn = document.querySelector('#InboxBtn')
let currentPage =''

InboxBtn.addEventListener('click', () => {
    
    if (currentPage ==! 'inboxPage') {
        currentPage = inboxPageLoad()
    }
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

