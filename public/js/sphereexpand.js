 AFRAME.registerComponent('sphereexpand', {
  schema: {
      spheresource: {type: 'string'}},
    
   init: function () {
     
      console.log("sphereexpandison");

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");
      let data = this.data;


      this.el.addEventListener('click', () => {

        sky.setAttribute("src", data.spheresource);
        homeworldelements.forEach((homeworldelement) => {
        homeworldelement.setAttribute("visible", false)})

                                   
    })
   }});
  
/*
Simple example function: 

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
*/