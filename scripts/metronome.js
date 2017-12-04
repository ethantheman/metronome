$(document).ready(function(){
	var $slider = $('.slider');
	var $tempo = $('#tempo');
	var $click = $('#click')[0];
	var $play = $('#play');
	var $pause = $('#pause');
	var t = 600; // initial value = 100bpm = 1 beat per 600 ms
	var playing = false;
	var start;

	$tempo.text($slider.val() + ' bpm');

	$slider.on('input', function() {
		console.log(this.value);
		$tempo.text(this.value + ' bpm');
		t = 60000 / this.value;
	});

	$play.on('click', function(){
		if(!playing){
			console.log('playing');
			start = setInterval(function() { 
				click.play();
			}, t);
			playing = true;
		}
		
	});

	$pause.on('click', function(){
		if(playing) {
			console.log('pausing');
			clearInterval(start);
			playing = false;
		}
	});

});