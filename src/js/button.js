let allow_clicks = false;
console.log("4:00PM");
let crossFadeDuration=".5f"

let bok = document.getElementById("click-here")

const particleSystem = document.getElementById('particle-system');
particleSystem.components['particle-system'].startParticles();

document.querySelector("#scene")
      .addEventListener('markerFound', (evt) => {
                console.log("Enabling Click Events")
               allow_clicks = true
      })

document.querySelector("#scene")
      .addEventListener('markerLost', (evt) => {
                console.log("Disabling Click Events")
                allow_clicks = false
      }) 

document.querySelector("#click-here")
      .addEventListener('click', (evt) => {
           if (allow_clicks)
           {
                 allow_clicks=false;
               bok.setAttribute("animation-mixer",{clip:"RiseAndOpen",crossFadeDuration:crossFadeDuration,startFrame:"0"})
               
               setTimeout(() => {
                     allow_clicks=true;
                  bok.setAttribute("animation-mixer",{clip:"Rotation",crossFadeDuration:crossFadeDuration})
               }, 3000);
           }            
      })   