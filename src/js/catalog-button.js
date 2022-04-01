const crossFadeDuration=".5f"
const particleSystem = document.getElementById('particle-system');


let allow_clicks = false;
const bok = document.getElementById("click-here")
let items = ["Cone.glb","cube.glb","cyl.glb","ico.glb","torus.glb"];
let index = 0;
const count = items.length;

bok.setAttribute("gltf-model","src/assets/models/Cone.glb");

function LastItem(){
    index = (--index)%count
    if(index==-1) index=count-1;
    console.log(index);
    let model = "src/assets/models/"+items[index];
    console.log("Set Model To: "+model)
    bok.setAttribute("gltf-model",model);
}

function NextItem(){
      index = (++index)%count
      let model = "src/assets/models/"+items[index];
      console.log("Set Model To: "+model)
      bok.setAttribute("gltf-model",model);
}
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
            console.log("Click Detected. Event Sequence Begins.")
            // Check To confirm if logo is interactable
           if (allow_clicks)
           {
                 console.log("Calling NextItem()");
                 //NextItem();
                 allow_clicks=false;
               
           }            
      })   