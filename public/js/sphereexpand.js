 AFRAME.registerComponent('sphereexpand', {
  schema: {
      spheresource: {type: 'string'}},
    
   init: function () {
     
      console.log("sphereexpandison");

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");
      let data = this.data;

      let sphereloader = () => {
      console.log("whynot");
      sky.setAttribute("src", data.spheresource);
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
    }

      this.el.addEventListener('click', sphereloader);
        
   }});
  

