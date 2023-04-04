var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(`New speed is ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(`New speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	else
		video.currentTime = video.currentTime + 10;
	console.log(`New location ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	document.querySelector("#mute").textContent = video.muted ? 'Unmute' : 'Mute';
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value * 0.01;
	document.querySelector("#volume").textContent = `${video.volume * 100}%`;
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});




