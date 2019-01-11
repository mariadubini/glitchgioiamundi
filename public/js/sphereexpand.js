 AFRAME.registerComponent('sphereexpand', {

    
   init: function () {
     
      console.log("sphereexpandison");

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#skysphere");


    this.el.addEventListener('click', function () {

      sky.setAttribute("src", "#bordeauxtheater");
      
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})

                                   
    })
   }});
  