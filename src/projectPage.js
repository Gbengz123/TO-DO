import { createHeadnSection, createTaskCard, showTaskDetail } from "./inbox"

function projectPageLoad(e){
    // creates head and section of the page
    createHeadnSection(e.target.id);

    const section = document.querySelector('section')

    // Dynamically create 5 task cards on the page
    for (let i = 0; i < 2; i++) {
        const taskCard = createTaskCard(); // Get the created task card
        section.appendChild(taskCard);
    }

    showTaskDetail()

    return 'Home'
}

export default projectPageLoad