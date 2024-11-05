import './style.css';

const formModal = document.querySelector('#modalDialog');
const formClosebtn = document.querySelector('#closeModal');
const newTaskBtn = document.querySelector('.newTaskBtn');

newTaskBtn.addEventListener('click', () => {
    formModal.showModal()
})

formClosebtn.addEventListener('click', () => {
    formModal.close()
})

const taskCards = document.querySelectorAll('.task-card')

const taskCardDetail = document.createElement('div');
taskCardDetail.classList.add('task-card-details'); 

const paragraph = document.createElement('p');
paragraph.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam corrupti soluta quam ipsum, illum doloremque iste nostrum blanditiis excepturi eum dolores fugiat deleniti fuga et consequatur aperiam perspiciatis amet reprehenderit.";

taskCardDetail.appendChild(paragraph);

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