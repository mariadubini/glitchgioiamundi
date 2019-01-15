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
  
// Simple example function: 
let multiplierfunction = (x, y) => {
  return x * y;   // The function returns the product of p1 and p2
}

multiplierfunction(3, 5);
console.log(multiplierfunction(3, 5));
