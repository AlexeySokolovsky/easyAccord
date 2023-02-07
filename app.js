let btn = document.querySelectorAll('.accordion');
btn.forEach(item => {
	item.addEventListener('click', function () {
		item.classList.toggle('active');
		item.nextElementSibling.classList.toggle('show');
	});
});
