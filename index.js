AFRAME.registerShader('transparent-video', {
  schema: {
    src: { type: 'map' },
  },

  init: function (data) {
    const videoTexture = new THREE.VideoTexture(data.src);
    videoTexture.format = THREE.RGBAFormat;

    this.material = new THREE.MeshBasicMaterial({
      map: videoTexture, transparent: true,
    });
    
    this.el.components.material.data.transparent = true;
  },
});
