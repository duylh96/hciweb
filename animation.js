
alert("welcome to my website!")
$('#play-video').on('click', function(ev) {
	$(this).hide();
	$("#video")[0].src += "?rel=0&autoplay=1";
});