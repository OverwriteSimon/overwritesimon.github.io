let allow_clicks = false;
console.log("4:00PM");
let bok = document.getElementById("click-here")

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
               bok.setAttribute("animation-mixer",{clip:"RiseAndOpen"})
               setTimeout(() => {
                     allow_clicks=true;
                  bok.setAttribute("animation-mixer",{clip:"Rotation"})
               }, 2000);
           }            
      })   