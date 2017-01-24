(function() { 
var result_bg = document.querySelector('.timer');

	// WORK or BREAK
var title = document.getElementById('title'),
	// WORK controller
	working_time = document.getElementById('working_time'),
	working_time_plus = document.getElementById('working_time_plus'),
	working_time_minus = document.getElementById('working_time_minus'),
	result = document.getElementById('result'),
	working_interval,

	// BREAK controller
	breaking_time = document.getElementById('breaking_time'),
	breaking_time_plus = document.getElementById('breaking_time_plus'),
	breaking_time_minus = document.getElementById('breaking_time_minus'),
	break_view = document.getElementById('timer'),
	breaking_interval,

	ok = true; 
	work = true; // WORK or BREAK function

working_TEMP = working_time.innerHTML;
result.innerHTML = working_time.innerHTML;

breaking_TEMP = breaking_time.innerHTML;

// WORK controller PLUS or MINUS
working_time_plus.addEventListener('click', function() {
	if (working_time.innerHTML < 50) {
		working_time.innerHTML -= -1;
		working_TEMP = working_time.innerHTML;
		working_TEMP = parseInt(working_TEMP)*60;
		result.innerHTML = working_time.innerHTML;
	}
});
working_time_minus.addEventListener('click', function() {
	if (working_time.innerHTML - 1 > 0) {
		working_time.innerHTML -= 1;
		working_TEMP = working_time.innerHTML;
		working_TEMP = parseInt(working_TEMP)*60;
		result.innerHTML = working_time.innerHTML;
	}
});

breaking_time_plus.addEventListener('click', function() {
	if (breaking_time.innerHTML < 10) {
		breaking_time.innerHTML -= -1;
		breaking_TEMP = breaking_time.innerHTML;
		breaking_TEMP = parseInt(breaking_TEMP)*60;
	}
});
breaking_time_minus.addEventListener('click', function() {
	if (breaking_time.innerHTML - 1 > 0) {
		breaking_time.innerHTML -= 1;
		breaking_TEMP = breaking_time.innerHTML;
		breaking_TEMP = parseInt(breaking_TEMP)*60;
	}
});



working_TEMP = parseInt(working_TEMP)*60;
breaking_TEMP = parseInt(breaking_TEMP)*60;

pomodoro.addEventListener('click', function (){
	if (work) {
		works();
	} 
	if (!work) {
		breaks();
	}
});                            

// Для запуска таймера
function works() {
	if (ok) {
		ok = false;
		result_bg.style.background = 'lightgreen';
		title.innerHTML = 'work';
		clearInterval(breaking_interval);
		working_interval = setInterval(function() {
			var min = parseInt(working_TEMP/60);
			var sec = working_TEMP - min * 60;

			if (working_TEMP == 0) {
				work = false;
				ok = true;
				working_TEMP = working_time.innerHTML*60;
				breaks();
				clearInterval(working_interval);
			}

			result.innerHTML = min + ' : ' + addZero(sec);
			working_TEMP--;
	}, 1000);
	} else {
		clearInterval(working_interval);
		ok = true;
	}
}

function breaks() {
	if (ok) {
			ok = false;
			result_bg.style.background = 'tomato';
			title.innerHTML = 'break';
			clearInterval(working_interval);
			breaking_interval = setInterval(function() {
				var min = parseInt(breaking_TEMP/60);
				var sec = breaking_TEMP - min * 60;

				if (breaking_TEMP == 0) {
					work = true;
					ok = true;
					breaking_TEMP = breaking_time.innerHTML*60;
					works();
				}

				result.innerHTML = min + ' : ' + addZero(sec);
				breaking_TEMP--;
		}, 1000);
		} else {
			clearInterval(breaking_interval);
			ok = true;
		}
}

// Добавить ноль к секундам
function addZero(i) {
	if (i < 10 && i >= 0) { i = "0" + i } return i;
}


var audio = new Audio('tic.mp3');
	audio.preload = "auto";
	audio.loop = true;
var audioWork = false;

pomodoro.addEventListener('click', function() {
	if(audioWork) { 
		audio.pause();	
		audioWork = false;
	} else {

		audio.play();

		audioWork = true;

	}	
})












})();



	

