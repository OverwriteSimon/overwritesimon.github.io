let audio = new Audio(".//audio/jackpot.wav")


element = document.getElementById("bok-particles");


let particlesFlow=true;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function particleSequence() {
  delay(9000).then(() => {
    particlesFlow = true;
    console.log("Playing Audio");
    //audio.play();
    element.setAttribute("particle-system",'enabled',particlesFlow);
  });

  delay(16000).then(() => {
    particlesFlow = false;
    element.setAttribute("particle-system",'enabled',particlesFlow);
    console.log("Pause Audio");
    //audio.pause();
  });
}

particleSequence();

setInterval(() => {
  particleSequence();
}, 20000);