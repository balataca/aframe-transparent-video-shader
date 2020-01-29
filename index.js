AFRAME.registerShader('transparent-video', {
  schema: {
    src: { type: 'map' }
  },
  init: function (data) {
    const videoTexture = new THREE.VideoTexture(data.src)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.format = THREE.RGBAFormat

    this.material = new THREE.MeshLambertMaterial({
      map: videoTexture
    })  
  }
})
