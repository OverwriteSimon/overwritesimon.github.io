// const crossFadeDuration=".5f"
// const particleSystem = document.getElementById('particle-system');


// let allow_clicks = false;
// const bok = document.getElementById("click-here")


// //bok.setAttribute("gltf-model","src/assets/models/Cone.glb")



// document.querySelector("#scene")
//       .addEventListener('markerFound', (evt) => {
//                 console.log("Enabling Click Events")
//                allow_clicks = true
//       })

// document.querySelector("#scene")
//       .addEventListener('markerLost', (evt) => {
//                 console.log("Disabling Click Events")
//                 allow_clicks = false
//       }) 

// document.querySelector("#click-here")
//       .addEventListener('click', (evt) => {
//            if (allow_clicks)
//            {
//                   allow_clicks=false;
//                bok.setAttribute("animation-mixer",{clip:"RiseAndOpen",crossFadeDuration:crossFadeDuration,startFrame:0})
//                setTimeout(() => {
//                      particleSystem.components['particle-system'].startParticles();
//                   }, 200);

//                setTimeout(() => {
//                      allow_clicks=true;
//                         bok.setAttribute("animation-mixer",{clip:"Rotation",crossFadeDuration:crossFadeDuration})
//                         particleSystem.components['particle-system'].stopParticles();
//                }, 2500);
//                setTimeout(() => {
//                   window.location.replace("https://www.bankofoklahoma.com/");
//             }, 3000);
//            }            
//       })   