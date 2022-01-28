let audio = new Audio(".//audio/jackpot.wav")

element = document.getElementById("bok-particles");

AFRAME.registerComponent('buttonclickcomponent', {
    init: function () {
      this.el.addEventListener('click', () => {
        // When the model is clicked, begin animation event
        console.log("CLicked");
        audio.play();
      });
    },
  });


  document.querySelector("#press-here")
        .addEventListener('click', (evt) => {              
            console.log("CLicked");
            audio.play();          
        })   