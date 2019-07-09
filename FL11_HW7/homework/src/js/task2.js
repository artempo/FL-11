// Your code goes here

if (confirm('Do you want to play a game?')) {
	var x = Math.floor(Math.random() * 9);
	var y = prompt('Choose a roulette pocket number from 0 to 8 Attempts left: 3 Total prize: 0$ Possible prize on current attempts:100$');
        
	if (y == x) {
		alert("Your prize is 100$")
	} 
		else {
			y = prompt('Choose a roulette pocket number from 0 to 8 Attempts left: 2 Total prize: 0$ Possible prize on current attempts:50$');
			if (y == x) {
				alert("Your prize is 50$")
			} else {
				y = prompt('Choose a roulette pocket number from 0 to 8 Attempts left: 1 Total prize: 0$ Possible prize on current attempts:25$');
				if (y == x) {
				alert("Your prize is 25$")
				} else {
					alert("Thank you for your participation. Your prize is: … $")
					confirm('Do you want to play again?')
				}
			}
		}
	
} else {
	alert('You did not become a billionaire, but can.')
}