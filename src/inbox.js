function inboxPageLoad(){
    // creates head and section of the page
    createHeadnSection('Inbox');

    const section = document.querySelector('section')

    // Dynamically create 5 task cards on the page
    for (let i = 0; i < 5; i++) {
        const taskCard = createTaskCard(); // Get the created task card
        section.appendChild(taskCard);
    }

    showTaskDetail()

    return 'Inbox'
}

// function to create head and section
function createHeadnSection(heading){
    const main = document.querySelector('main')
    main.replaceChildren()

    // Create the header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = heading;
    header.appendChild(h1);
    main.appendChild(header);

    // Create the section to hold task cards
    const section = document.createElement('section');
    section.id = `${heading}-section`
    main.appendChild(section);
}

// Function to create a task card
function createTaskCard() {

    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    const taskCardHead = document.createElement('div');
    taskCardHead.classList.add('task-card-head');
    const h2 = document.createElement('h2');
    h2.textContent = 'Task title';
    taskCardHead.appendChild(h2);

    const taskCardIcons = document.createElement('div');
    taskCardIcons.classList.add('task-card-icons');

    const priorityIcon = document.createElement('div')
    priorityIcon.classList.add('priority-icon')
    
    // Add task card icons (SVGs)
    const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg1.setAttribute('fill', '#000000');
    svg1.setAttribute('viewBox', '0 0 32 32');
    svg1.innerHTML = '<path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM22.386 10.146l-9.388 9.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415 0s-0.391 1.023 0 1.414l4.95 4.95c0.39 0.39 1.024 0.39 1.415 0 0.045-0.045 0.084-0.094 0.119-0.145l9.962-10.024c0.39-0.39 0.39-1.024 0-1.415s-1.024-0.39-1.415 0z"></path>';
    
    const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg2.setAttribute('fill', '#000000');
    svg2.setAttribute('viewBox', '-2.94 0 31.716 31.716');
    svg2.innerHTML = '<g transform="translate(-355.957 -579)"><path d="M376.515,610.716H361.231a2.361,2.361,0,0,1-2.358-2.359V584.1a1,1,0,0,1,2,0v24.255a.36.36,0,0,0,.358.359h15.284a.36.36,0,0,0,.358-.359V584.1a1,1,0,0,1,2,0v24.255A2.361,2.361,0,0,1,376.515,610.716Z"></path><path d="M365.457,604.917a1,1,0,0,1-1-1v-14a1,1,0,0,1,2,0v14A1,1,0,0,1,365.457,604.917Z"></path><path d="M372.29,604.917a1,1,0,0,1-1-1v-14a1,1,0,0,1,2,0v14A1,1,0,0,1,372.29,604.917Z"></path><path d="M380.79,585.1H356.957a1,1,0,0,1,0-2H380.79a1,1,0,0,1,0,2Z"></path><path d="M372.79,581h-7.917a1,1,0,1,1,0-2h7.917a1,1,0,0,1,0,2Z"></path></g>';
    
    taskCardIcons.appendChild(priorityIcon)
    taskCardIcons.appendChild(svg1);
    taskCardIcons.appendChild(svg2);
    taskCardHead.appendChild(taskCardIcons);
    taskCard.appendChild(taskCardHead);

    const taskCardDetails = document.createElement('div');
    taskCardDetails.classList.add('task-card-details');
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam corrupti soluta quam ipsum, illum doloremque iste nostrum blanditiis excepturi eum dolores fugiat deleniti fuga et consequatur aperiam perspiciatis amet reprehenderit.';
    taskCardDetails.appendChild(p);
    taskCard.appendChild(taskCardDetails);

    return taskCard;
}

// enables you to view task card details when clicked
function showTaskDetail(){
    const taskCards = document.querySelectorAll('.task-card')

    taskCards.forEach((card) => {
        card.addEventListener('click', () => {
            const details = card.querySelector('.task-card-details')

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block'; // Show the details
            } 
            else {
                details.style.display = 'none'; // Hide the details
            }
        })
    })
}


export {inboxPageLoad, createTaskCard, createHeadnSection, showTaskDetail}