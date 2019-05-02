function makeRequest() {
	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
		success: function(data) {
			data.forEach(el => {
				const img = document.createElement('img');
				img.src = el.thumbnail;
				resultBlock.appendChild(img);
			});
		},
	});
}
