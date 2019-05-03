// DAL - data access layer

// function getImages(pageNumber) {
// 	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
// 		success: function(data) {
// 			data.forEach(el => {
// 				const img = document.createElement('img');
// 				img.src = el.thumbnail;
// 				resultBlock.appendChild(img);
// 			});
// 		},
// 	});
// }

// function getImages(pageNumber, successCalback) {
// 	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
// 		success: function(data) {
// 			successCalback(data);
// 		},
// 	});
// }

// function getImages(pageNumber) {
// 	const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
// 	return promise;
// }

// function getImages(pageNumber) {
// 	const promise = fetch(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
// 	return promise.then(response => {
// 		return response.json();
// 	});
// }

function getImages(pageNumber) {
	const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
	return promise.then(response => {
		return response.data;
	});
}

function getTasks() {
	const promise = axios.get(`https://repetitora.net/api/Tasks?widgetId=9988`);
	return promise.then(response => {
		return response.data;
	});
}

function postTasks(title) {
	const promise = axios.post(`https://repetitora.net/api/Tasks`, {
		widgetId: 9988,
		title
	});
	return promise.then(response => {
		return response.data;
	});
}
