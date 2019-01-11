 AFRAME.registerComponent('sphereexpand', {

    
   init: function () {
     
     console.log("sphereexpandison");

    this.el.addEventListener('click', function () {

    
      
      var homeworldelements = document.querySelectorAll(".baseworld");
          for (var i = 0; i < homeworldels.length; i++) {
            homeworldels[i].setAttribute("visible", false);}
      
    })
   }});