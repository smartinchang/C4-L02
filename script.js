function speak() {
	message = document.getElementById("text").value;
	var msg = new SpeechSynthesisUtterance(message);
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[0];
	window.speechSynthesis.speak(msg);
}

function speak() {
	message = document.getElementById("text").value;
	var msg = new SpeechSynthesisUtterance(message);
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[0];
}