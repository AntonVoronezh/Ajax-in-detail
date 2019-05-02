const resultBlock = document.querySelector('#result');
const Button = document.querySelector('#click');

Button.addEventListener('click', request);

function request() {
	console.log('request');
}

$.ajax('https://repetitora.net/api/JS/Images', {
    success: function(data) {
        // console.log('i get request', data);
        data.forEach(el => {
            const img = document.createElement('img');
            img.src = el.thumbnail;
            resultBlock.appendChild(img);
        });
    }
});