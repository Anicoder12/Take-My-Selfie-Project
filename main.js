var speechrecognition = window.webkitSpeechRecognition;
var recog = new speechrecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recog.start();
}
recog.onresult = function run(event) {
    console.log(event)
content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = content;
speak();
}

function speak() {
    var synth = window.speechSynthesis;
    data = document.getElementById("textbox").value;
    var utterthis = new SpeechSynthesisUtterance(data);
    synth.speak(utterthis);
    Webcam.attach("#camera");
}
camera=document.getElementById("camera");

Webcam.set({
    width: 350,
    height: 250,
    image_type: 'png',
    png_quality: 90
});