// UI
const resultBlock = document.querySelector('#result');
const pageNumber = document.querySelector('#number');
const Button = document.querySelector('#click');

// Button.addEventListener('click', () => {
// 	getImages(pageNumber.value, onDataReceived);
// });

Button.addEventListener('click', () => {
	const promise = getImages(pageNumber.value);
});

function onDataReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        resultBlock.appendChild(img);
    });
};

