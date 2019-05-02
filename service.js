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
function getImages(pageNumber, successCalback) {
	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
        success: successCalback
	});
}
