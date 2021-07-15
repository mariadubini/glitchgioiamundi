AFRAME.registerComponent('zoomin', {       
  
  init: function () {      
  
       
    let zoominfunc=()=>{
      this.el.setAttribute("shadow", true);
  };
  this.el.addEventListener('click',zoominfunc);
}

});