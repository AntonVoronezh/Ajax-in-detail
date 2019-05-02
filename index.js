const resultBlock = document.querySelector('#result');
const pageNumber = document.querySelector('#number');
const Button = document.querySelector('#click');

Button.addEventListener('click', () => {
	makeRequest();
});

