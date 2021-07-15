AFRAME.registerComponent('disappear', {       
  
  init: function () {      
  
    let mynumber = 6;
    let mystring= "my component is awesome.";
    console.log (mynumber);
    console.log (mystring);
    
    let disappearfunc=()=>{
      this.el.setAttribute("visible", false);
  };
  this.el.addEventListener('click',disappearfunc);
}

});