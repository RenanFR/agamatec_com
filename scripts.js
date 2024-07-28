document.addEventListener('DOMContentLoaded', function() {
	const menuIcon = document.getElementById('menu-icon');
	const menu = document.getElementById('menu');
	const menuBackground = document.createElement('div');
	menuBackground.id = 'menu-background';

	document.body.appendChild(menuBackground);

	menuIcon.addEventListener('click', function() {
		menu.classList.toggle('open');
		menuBackground.classList.toggle('visible');
	});

	menuBackground.addEventListener('click', function() {
		menu.classList.remove('open');
		menuBackground.classList.remove('visible');
	});

	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape') {
			menu.classList.remove('open');
			menuBackground.classList.remove('visible');
		}
	});
});
