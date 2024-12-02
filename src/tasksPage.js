import { createTaskCard, createHeadnSection, showTaskDetail } from "./inbox";


function tasksPageLoad(){
    createHeadnSection('Tasks')


    const projectsData = JSON.parse(localStorage.getItem('projectsData'))

    const taskSection = document.querySelector('section')
    let projectTask;

    // dynamically load project 
    projectsData.projects.forEach(project => {
        const projectTasks = document.querySelectorAll('.project-tasks')
        // check if is already diaplayed on the screen 
        if (projectTasks){
            projectTask = document.getElementById(`${project.name}-card`)
            if (projectTask){
                 return
             }
        }
        projectTask = createProjectCard(project.name, projectsData)
        taskSection.appendChild(projectTask)
    })

    // Dynamically add tasks to specific project category
    let taskCard
    projectsData.projects.forEach(project => {
        if (project.tasks.length > 0){
            project.tasks.forEach(task => {
                // selects the project it is under
                const projectCard = document.querySelector(`#${task.project}-card`)

                // checks if it already exist
                taskCard = document.getElementById(`${task.title}-task`)
                if (taskCard){
                    return
                }

                // creates and adds to the project
                taskCard = createTaskCard(task.title, task.description);
                projectCard.querySelector('.task-container').appendChild(taskCard)
            })
        }
    })

    const projectTasksHead = document.querySelectorAll('.project-tasks-head')
    
    projectTasksHead.forEach((taskHead) => {
        taskHead.addEventListener('click', () => {
            const detailsContainer = taskHead.nextElementSibling

            if (detailsContainer.style.display === 'none' || detailsContainer.style.display === '') {
                detailsContainer.style.display = 'block'; // Show the details
            } 
            else {
                detailsContainer.style.display = 'none'; // Hide the details
            }
            
            taskHead.style.borderBottom === 'none' || taskHead.style.borderBottom === '' ? taskHead.style.borderBottom = '1px solid #9ca3af' : taskHead.style.borderBottom = 'none'
        })    
    })

    showTaskDetail()

    return 'Tasks'
}

function createProjectCard(projectName, projectsData){
    const projectTask = document.createElement('div')
    projectTask.classList.add('project-tasks')
    projectTask.id = `${projectName}-card`

    const projectTaskHead = document.createElement('div')
    projectTaskHead.classList.add('project-tasks-head')
    // create h1 for project title
    const h2 = document.createElement('h2');
    h2.textContent = `# ${projectName}`;
    projectTaskHead.appendChild(h2);
    // create SVG icon
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z");
    path.setAttribute("fill", "#0F0F0F");
    icon.appendChild(path);
    projectTaskHead.appendChild(icon)
    


    const projectTaskDetails = document.createElement('div')
    projectTaskDetails.classList.add('project-tasks-details')

    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
        
    projectTaskDetails.appendChild(taskContainer)

    const showBtn = document.createElement('button')
    showBtn.classList.add('show-button')
    showBtn.textContent = 'show more...'
    projectTaskDetails.appendChild(showBtn)

    const container = document.createElement('div')
    container.classList.add('tasks-details-container')

    projectTask.appendChild(projectTaskHead)
    container.appendChild(projectTaskDetails)

    projectTask.appendChild(container)

    return projectTask
}

export {tasksPageLoad, createProjectCard}