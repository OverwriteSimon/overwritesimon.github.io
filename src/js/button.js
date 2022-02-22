const crossFadeDuration=".5f"
const particleSystem = document.getElementById('particle-system');


let allow_clicks = false;
const bok = document.getElementById("click-here")


//bok.setAttribute("gltf-model","src/assets/models/Cone.glb")


//This allows clicks when the camera detects the marker
document.querySelector("#scene")
      .addEventListener('markerFound', (evt) => {
                console.log("Enabling Click Events")
               allow_clicks = true
      })

//This disables clicks when the camera detects the marker
document.querySelector("#scene")
      .addEventListener('markerLost', (evt) => {
                console.log("Disabling Click Events")
                allow_clicks = false
      }) 

      

//Bok Event Sequence Begins here
document.querySelector("#click-here")
      .addEventListener('click', (evt) => {
            // Check To confirm if logo is interactable
           if (allow_clicks)
           {
                  //disable clicks, then play the RiseAndOpen animation clip
                  allow_clicks=false;
                  bok.setAttribute("animation-mixer",{clip:"RiseAndOpen",crossFadeDuration:crossFadeDuration,startFrame:0})
               //after 200ms, activate the money particles
               setTimeout(() => {
                     particleSystem.components['particle-system'].startParticles();
                  }, 200);

                  //after 2.5 seconds, stop the particles, and return to Rotation Animation
               setTimeout(() => {
                     allow_clicks=true;
                        bok.setAttribute("animation-mixer",{clip:"Rotation",crossFadeDuration:crossFadeDuration,startFrame:0})
                        particleSystem.components['particle-system'].stopParticles();
               }, 2500);
           }            
      })   