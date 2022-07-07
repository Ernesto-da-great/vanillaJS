let user = prompt("Please enter your name,", "Ernest");
window.onload = function clock() {
	setInterval(clock, 1000);
//getting data
	let main = new Date();
	let hours =  main.getHours();
	let minutes = main.getMinutes();
	let seconds = main.getSeconds();
	let x;
	let greeting;

//setting AM/PM & greeting
	if (hours >= 0 && hours < 12) {
		x = 'AM';
		greeting = 'Good Morning,'
	} else if (hours >= 12 && hours < 16) {
		x = 'PM';
		greeting = 'Good Afternoon,'
	} else {
		x = 'PM';
		greeting = 'Good Evening,'
	};

//adjustment for hours to 12 hour clock
	function hour12(a) {
		if (a > 12) {
			return a - 12
		} else {
			return a;
		}
	}

//assigning values
	document.getElementById('my-header').innerHTML = `${greeting} ${user}!`;
	document.getElementById('hour').innerHTML = `${hour12(hours)}:`;
	document.getElementById('minutes').innerHTML = `${minutes}:`;
	document.getElementById('seconds').innerHTML = ` ${seconds} ${x}`;
}


$(function () {
	// body...
	$("#add").on('click', function() {
		var inVal = $("input").val();
		if (inVal !== '') {
			var todoItem = $("<li></li>").text(inVal);
			$(todoItem).append("<button class='remove'>X</button>");
			$("#mylist").append(todoItem);
			$("input").val("");
			$(".remove").on("click", function () {
				// body...
				$(this).parent().remove();
			})
		}
	});
});