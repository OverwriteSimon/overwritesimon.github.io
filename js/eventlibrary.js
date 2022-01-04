let audio = new Audio(".//audio/jackpot.wav")



console.log("Hello, World");

element = document.getElementById("bok-particles");
console.log(element);
console.log("Playing Audio");

audio.muted=true;
audio.play();

let particlesFlow=true;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


setInterval(() => {
  
  delay(9000).then(() => {
    particlesFlow = true;
    element.setAttribute("particle-system",'enabled',particlesFlow);
  });

  delay(16000).then(() => {
    particlesFlow = false;
    element.setAttribute("particle-system",'enabled',particlesFlow);
  });

  
}, 20000);