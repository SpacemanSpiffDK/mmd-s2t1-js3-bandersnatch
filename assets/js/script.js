// JS by Dan Høegh
// UCN MMD 2020

let playerName = "";
while (playerName == "") {
	playerName = prompt('What is your name?');
}

if (playerName.toLowerCase() == 'dan') {

	write('Hey! It\'s Dan! Ok, you win.');
	write('Game over');

} else {

	write('Welcome ' + playerName + ', nice to see you!');

	let pocketItem = "";
	while (pocketItem == "") {

		pocketItem = prompt(playerName + ', you have something in your pocket, what is it? (single word please)');
		pocketItem = pocketItem.toLowerCase();
		if (pocketItem.indexOf(' ') != -1) {
			pocketItem = "";
		}

	}

	write('You take your ' + pocketItem + ' from your pocket and look at it with a distrusting gaze.');

	var getDestroy = confirm('You get the urge to destroy your ' + pocketItem + ', do want to do it?');
	if (getDestroy) {

		write('You throw your ' + pocketItem + ' at a nearby wall and watch it pass right through it! Something\'s not right here!?');
		write('Cthulhu emerges from the shadows as your blood freezes and your sanity leaves for a long vacation.');
		write('How a simple ' + pocketItem + ' ended the sweet life of ' + playerName + '.');

	} else {

		write('You shrug and put your ' + pocketItem + ' back into your pocket.');
		write('Life continues and you win the lottery the following day.');

	}
}

// Just a function to make output easy, nevermind this
function write(text) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = outputDiv.innerHTML + '<p>' + text + '</p>';
}
