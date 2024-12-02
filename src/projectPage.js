import { createHeadnSection, createTaskCard, showTaskDetail } from "./inbox"

function projectPageLoad(Project){
    // creates head and section of the page
    createHeadnSection(Project);

    const section = document.querySelector('section')

    let currentProject
    const projectsData = JSON.parse(localStorage.getItem('projectsData'))
    projectsData.projects.forEach(project => {
        if (project.name === Project){
            currentProject = project
            return
        }
    })

    let taskCard
    currentProject.tasks.forEach(task => {
        // checks if it already exist
        taskCard = document.getElementById(`${task.title}-task`)
        if (taskCard){
            return
        }

        taskCard = createTaskCard(task.title, task.description)
        section.appendChild(taskCard)
    })
    
    showTaskDetail()

    return 'Home'
}

export default projectPageLoad