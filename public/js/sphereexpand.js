 AFRAME.registerComponent('sphereexpand', {

    
   init: function () {
     
     console.log("sphereexpandison");

    this.el.addEventListener('click', function () {

    
      
      var homeworldelements = document.querySelectorAll(".homeworld");
      
      
      
      homeworldelements.forEach((homeworldelement) => {
                                 homeworldelement.setAttribute("visible", false)})

        
                                
    })
   }});
  