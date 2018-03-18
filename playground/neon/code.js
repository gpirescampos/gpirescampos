window.onload = function () {

	var textHolder = document.getElementsByTagName('div')[0];
	var text = textHolder.innerHTML;
	var chars = text.length;
	var newText = '';
	var i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	textHolder.innerHTML = newText;

	var letters = document.getElementsByTagName('i'),
		flickers = [5, 7, 9, 11, 13, 15, 17],
		randomLetter,
		flickerNumber,
		counter;

	function randomFromInterval(from, to) {
		return Math.floor(Math.random() * (to - from + 1) + from);
	}

	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}

	function flicker() {
		counter += 1;

		if (counter === flickerNumber) {
			return;
		}

		setTimeout(function () {
			if (hasClass(randomLetter, 'off')) {
				randomLetter.className = '';
			} else {
				randomLetter.className = 'off';
			}

			flicker();
		}, 30);
	}

	(function loop() {
		var rand = randomFromInterval(500, 3000);

		randomLetter = randomFromInterval(0, chars);
		randomLetter = letters[randomLetter];

		flickerNumber = randomFromInterval(0, chars);
		flickerNumber = flickers[flickerNumber];

		setTimeout(function () {
			counter = 0;
			flicker();
			loop();
		}, rand);
	}());

}