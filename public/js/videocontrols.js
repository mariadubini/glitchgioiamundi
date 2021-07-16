AFRAME.registerComponent('videoplayer', {
  
      init: function () {
        
        let videosource = document.querySelector('#videoclip');

        let videoplay = () => {
        videosource.play();        
        }
        
        this.el.addEventListener('click', videoplay);

      }});

AFRAME.registerComponent('videostopper', {
  
      init: function () {
        
        let videosource = document.querySelector('#videoclip');

        let videostop = () => {
        videosource.stop();        
        }
        
        this.el.addEventListener('click', videostop);

      }});