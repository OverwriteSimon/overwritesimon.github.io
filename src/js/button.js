let allow_clicks = false;

console.log("3:52PM");

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

document.querySelector("#press-here")
      .addEventListener('click', (evt) => {
           if (allow_clicks){
               console.log("Click detected: redirecting.")
               window.location="https://www.engineroomboxing.com/"
           }            
      })   