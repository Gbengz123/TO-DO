import './style.css';
import {inboxPageLoad} from './inbox';
import {tasksPageLoad} from './tasksPage';
import projectPageLoad from './projectPage';
import { addProject, addTask } from './storage';
import {displayProject} from './displayProjects';

const navButtons = document.querySelectorAll('.side-nav')
let currentPage = inboxPageLoad()
let nextPage = ''
const projectsData = JSON.parse(localStorage.getItem('projectsData'))

// for button navigation
navButtons.forEach((button) => {
    button.addEventListener('click', navigate)
})

// load projects from storage to DOM
projectsData.projects.forEach(project => displayProject(project.name))


const formModal = document.querySelector('#modalDialog');
const formClosebtn = document.querySelector('#closeModal');
const newTaskBtn = document.querySelector('.newTaskBtn');

const projectModal = document.querySelector('#project-dialog')
const projectModalCloseBtn = document.querySelector('#close-prjct-Modal')
const submitPrjctBtn = document.querySelector('#submit-project-button')
const addProjctBtn = document.querySelector('#add-project-button')

newTaskBtn.addEventListener('click', () => {
    formModal.showModal()
})
formClosebtn.addEventListener('click', () => {
    formModal.close()
})

addProjctBtn.addEventListener('click', () => {
    projectModal.showModal()
})
projectModalCloseBtn.addEventListener('click', () => {
    projectModal.close()
})

submitPrjctBtn.addEventListener('click', addProject)

const form = document.querySelector('#addTaskForm')
form.addEventListener('submit', addTask)

function navigate(e){
    nextPage = (e.target.classList.contains('project')) ? 'project' : e.target.id
        console.log(nextPage)

        if (nextPage === currentPage) return

        if (nextPage === 'Inbox') {currentPage = inboxPageLoad()} 
        if (nextPage === 'Tasks') {currentPage = tasksPageLoad()}
        if (nextPage === 'project') {currentPage = projectPageLoad(e.target.id)}
}
export {projectModal, formModal, navigate}

