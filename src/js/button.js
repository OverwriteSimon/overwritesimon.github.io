const crossFadeDuration=".5f"
const particleSystem = document.getElementById('particle-system');


let allow_clicks = false;
const bok = document.getElementById("click-here")


bok.setAttribute("gltf-model","src/assets/models/Cone.glb")
function NextItem(){

}


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
                 NextItem();
           }            
      })   