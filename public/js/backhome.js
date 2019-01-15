 AFRAME.registerComponent('backhome', {
  schema: {
      homespheresource: {type: 'string'}},
    
   init: function () {
     
      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");
      let data = this.data;

      let gobackhome = () => {
      sky.setAttribute("src", data.homespheresource);
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", true)})
    }

      this.el.addEventListener('click', gobackhome);
        
   }});
  

