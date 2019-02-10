// JS by Dan Høegh
// UCN MMD 2018

// Wait for the HTML document to be loaded before we start doing stuff
window.onload = function (){

	var getPlayerName = "";
	while (getPlayerName == "") {
		getPlayerName = prompt('What is your name?');
	}

	if (getPlayerName.toLowerCase() == 'dan') {

		write('Hey! It\'s Dan! Ok, you win.');
		write('Game over');

	} else {

		write('Welcome ' + getPlayerName + ' nice to see you!');

		var getItem = "";
		while (getItem == "") {

			getItem = prompt(getPlayerName + ', you have something in your pocket, what is it? (single word please)');
			if (getItem.indexOf(' ') != -1) {
				getItem = "";
			}

		}

		write('You take your ' + getItem + ' from your pocket and look at it with a distrusting gaze.');

		var getDestroy = confirm('You get the urge to destroy your ' + getItem + ', do want to do it?');
		if (getDestroy) {

			write('You throw your ' + getItem + ' at a nearby wall and watch it pass right through it! Something\'s not right here!?');
			write('Cthulhu emerges from the shadows as your blood freezes and your sanity leaves for a long vacation.');
			write('How a simple ' + getItem + ' ended the sweet life of ' + getPlayerName + '.');

		} else {

			write('You shrug and put your ' + getItem + ' back into your pocket.');
			write('Life continues and you win the lottery the following day.');
			
		}
	}
}

// Just a function to make output easy, nevermind this
function write(text){
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = outputDiv.innerHTML + '<p>' + text + '</p>';
}
