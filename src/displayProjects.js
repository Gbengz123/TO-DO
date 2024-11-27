import { navigate } from ".";
import { createProjectCard, tasksPageLoad } from "./tasksPage";
import { createTaskCard, showTaskDetail } from "./inbox";

function displayProject(projectName){
    const asideProjectSection = document.querySelector('.project-section')

    // Create the button element
    const button = document.createElement('button');
    button.className = 'project side-nav';
    button.id = projectName;

    // Create the first <span> element
    const span1 = document.createElement('span');
    span1.textContent = '#';

    // Create the second <span> element
    const span2 = document.createElement('span');
    span2.textContent = projectName;

    // Create the <div> for "num-task"
    const numTask = document.createElement('div');
    numTask.className = 'num-task';
    numTask.textContent = '2';

    button.addEventListener('click', navigate)
    
    button.appendChild(span1)
    button.appendChild(span2)
    button.appendChild(numTask)

    asideProjectSection.appendChild(button)

    // for displaying projects in the dropdown menu
    const dropdown = document.querySelector('#dropdown')

    // Create a new option element
    const option = document.createElement("option");
    // Set the value attribute
    option.value = projectName;
    // Set the text content
    option.textContent = projectName;
    
    dropdown.appendChild(option)

    // For displaying on taskpage
    const taskSection = document.querySelector('#Tasks-section')

    if (taskSection){
        tasksPageLoad()
    }   
}

function displayTask(project, title, priority){
    // display on task page
    const projectCard = document.querySelector(`#${project}-card`)
    if (projectCard){
        const taskCard = createTaskCard(title)
        projectCard.querySelector('.task-container').appendChild(taskCard)
    }

    showTaskDetail()
}

export {displayProject, displayTask}