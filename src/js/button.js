 const crossFadeDuration=".5f"
 const particleSystem = document.getElementById('particle-system');


 let allow_clicks = false;
 const bok = document.getElementById("briefcase")
console.log("line 7")

//bok.setAttribute("gltf-model","src/assets/models/Cone.glb")


//if the marker is found in the a-scene component, allow clicks
 document.querySelector("#scene")
       .addEventListener('markerFound', (evt) => {
                 console.log("Enabling Click Events")
                allow_clicks = true
       })

//if the marker is lost in the a-scene component, disallow clicks
 document.querySelector("#scene")
       .addEventListener('markerLost', (evt) => {
                 console.log("Disabling Click Events")
                 allow_clicks = false
       }) 

//if the briefcase is  clicked
 document.querySelector("#briefcase")
       .addEventListener('click', (evt) => {
            if (allow_clicks)
            {
                   allow_clicks=false;
                bok.setAttribute("animation-mixer",{clip:"RiseAndOpen",crossFadeDuration:crossFadeDuration})
                setTimeout(() => {
                      particleSystem.components['particle-system'].startParticles();
                   }, 200)

                   //after 2500 ms, stop particles and return to rotation animation
                setTimeout(() => {
                      allow_clicks=true;
                         //bok.setAttribute("animation-mixer",{clip:"Rotation",crossFadeDuration:crossFadeDuration})
                         particleSystem.components['particle-system'].stopParticles();
                }, 2500);

                //after 3000 ms, go to website
                setTimeout(() => {
                   window.location.replace("https://www.bankofoklahoma.com/");
             }, 3000);
            }            
       })   