// UI
const resultBlock = document.querySelector('#result');
const tasksBlock = document.querySelector('#tasks');
const pageNumber = document.querySelector('#number');
const TasksButton = document.querySelector('#tasks-click');
const ImagesButton = document.querySelector('#click');

// Button.addEventListener('click', () => {
// 	getImages(pageNumber.value, onDataReceived);
// });

ImagesButton.addEventListener('click', () => {
    const promise = getImages(pageNumber.value);
    
    promise.then(onImagesReceived);
});

function onImagesReceived(images) {
    images.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        resultBlock.appendChild(img);
    });
};

TasksButton.addEventListener('click', () => {
    const promise = getTasks();
    
    promise.then(onTasksReceived);
});

function onTasksReceived(tasks) {
    tasks.forEach(el => {
        const li = document.createElement('li');
        li.src = el.thumbnail;
        tasksBlock.appendChild(li);
    });
};
