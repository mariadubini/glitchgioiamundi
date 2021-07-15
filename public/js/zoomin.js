AFRAME.registerComponent('zoomin', {       
  
  init: function () {      
  
       
    let zoominfunc=()=>{
      this.el.setAttribute("scale= 5 5 5", true);
  };
  this.el.addEventListener('click',zoominfunc);
}

});