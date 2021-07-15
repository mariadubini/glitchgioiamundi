AFRAME.registerComponent('zoomin', {       
  
  init: function () {      
  
       
    let zoominfunc=()=>{
      this.el.setAttribute("light", true);
  };
  this.el.addEventListener('click',zoominfunc);
}

});