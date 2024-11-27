import { projectModal } from ".";
import displayProject from "./displayProjects";

let projectsData = {
    "projects": [
        // {
        //     "name": "Home",
        //     "display": "false"
        //     "tasks": [
        //         { 
        //             "Title": "", 
        //             "Description": "", 
        //             "priority": "", 
        //             "project" : "", 
        //             "dateAdded" : "",
        //             "dueDate:" : "",
        //             "completed" : false
        //         }
        //     ]
        // }
    ],
}

let allTasksData = {
    "allTasks": [
        { 
            "Title": "Apple", 
            "Description": "Red", 
            "priority": "", 
            "project" : "", 
            "dateAdded" : "",
            "dueDate:" : "",
            "completed" : false
        },
    ]
}

// add projects data to local storage
localStorage.setItem('porjectsData', JSON.stringify(projectsData));

function addProject() {
    // Get the name input from the user
    const projectName = document.getElementById('projectName').value;

    // get porjectsData form local storage
    projectsData = JSON.parse(localStorage.getItem('projectsData'));

    // checks id project already exist to prevent duplicates
    if (projectsData.projects.some((project) => project.name === projectName)){
        alert("Project already exists");

        // Clear the input field after adding
        document.getElementById('projectName').value = "";

        return
    } // some() returns true if at least one element in the array meets the condition.

    if (projectName) {
        // Create a new project object with the input name
        const newProject = {
            name: projectName,
            display: false,
            tasks: [] // You can add tasks here if needed
        };

        // Add the new project to the projects array
        projectsData.projects.push(newProject);

        // Store the updated data back to localStorage
        localStorage.setItem('projectsData', JSON.stringify(projectsData));

        console.log(projectsData)

        // display on DOM
        // displayProject();

        alert(`Project "${projectName}" has been added.`);

        // Clear the input field after adding
        document.getElementById('projectName').value = "";

        //display the project
        displayProject(projectName)

        // close the modal
        projectModal.close()
    } else {
        alert("Please enter a project name.");
    }
}

export {allTasksData, projectsData, addProject}