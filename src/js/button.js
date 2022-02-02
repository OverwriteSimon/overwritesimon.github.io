let allow_clicks = false;
document.querySelector("#scene")
      .addEventListener('markerFound', (evt) => {
               allow_clicks = true
      })

document.querySelector("#scene")
      .addEventListener('markerLost', (evt) => {
                allow_clicks = false
      }) 

document.querySelector("#press-here")
      .addEventListener('click', (evt) => {
           if (allow_clicks){
               console.log("Click detected: redirecting.")
               window.location="https://www.engineroomboxing.com/"
           }            
      })   