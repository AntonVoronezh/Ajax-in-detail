// UI
const resultBlock = document.querySelector('#result');
const pageNumber = document.querySelector('#number');
const TasksButton = document.querySelector('#tasks');
const ImagesButton = document.querySelector('#click');

// Button.addEventListener('click', () => {
// 	getImages(pageNumber.value, onDataReceived);
// });

ImagesButton.addEventListener('click', () => {
    const promise = getImages(pageNumber.value);
    
    promise.then(onDataReceived);
});

function onDataReceived(images) {
    images.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        resultBlock.appendChild(img);
    });
};

TasksButton.addEventListener('click', () => {
    const promise = getTasks();
    
    promise.then(onDataReceived);
});
