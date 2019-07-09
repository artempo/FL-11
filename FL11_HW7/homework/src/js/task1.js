// Your code goes here
var a = prompt ('email');
if (a == '') {
	alert("Canceled")
} else if (a.length <= 6) {
	alert("I don't know any emails having name length less than 6 symbols")
} else if (a == "user@gmail.com") {
	var b = prompt ("password");
	if (b == '' || b === null) {
		alert("Canceled")
	}
	else if (b !== "UserPass") {
		alert ("Wrong password");
	}
		else {
		var c = confirm('Do you want to change your password?')
		if (c === null) {
			alert("You have failed the change")
		} else {
			b = prompt ("old password");
			if (b == '' || b === null) {
				alert("Canceled")
			}
			else if (b !== "UserPass") {
				alert ("Wrong password")
			}
			else {
				var d = prompt ("new password");
				if (a.length <= 5) {
					alert("It’s too short password. Sorry.")
				} else {
					var e = prompt('enter new password again')
					if (e !== d) {
						alert("You wrote the wrong password.")
					} else {
						alert("You have successfully changed your password.")
					}
				}
			} 
		}
	}
} else if (a == "admin@gmail.com") {
	var b = prompt ("password");
	if (b == '' || b === null) {
		alert("Canceled")
	}
	else if (b !== "AdminPass") {
		alert ("Wrong password")
	}
	else {
		c = confirm('Do you want to change your password?')
		if (c === null) {
			alert("You have failed the change")
		} else {
			b = prompt ("old password");
			if (b == '' || b === null) {
				alert("Canceled")
			}
			else if (b !== "AdminPass") {
				alert ("Wrong password")
			}
			else {
				d = prompt ("new password");
				if (a.length <= 5) {
					alert("It’s too short password. Sorry.")
				} else {
					e = prompt('enter new password again')
					if (e !== d) {
						alert("You wrote the wrong password.")
					} else {
						alert("You have successfully changed your password.")
					}
				}
			} 
		}
	}
} 

else {
	alert ("I don’t know you")
}