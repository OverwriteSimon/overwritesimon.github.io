AFRAME.registerComponent('markerhandler', {

    init: function() {
        const bokMarker = document.querySelector("#marker");
        const aEntity = document.querySelector("#bok_model");
        console.log("Here");
        console.log(bokMarker);
        
        // every click, we make our model grow in size :)
        bokMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});
