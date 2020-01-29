
AFRAME.registerShader('transparent-video', {
  schema: {
    src: { type: 'map' },
    transparent: { default: true, is: 'uniform' }
  },
  init: function (data) {
    const videoTexture = new THREE.VideoTexture(data.src)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.format = THREE.RGBAFormat

    this.material = new THREE.MeshLambertMaterial({
      map: videoTexture
    })
  },
  update: function (data) {
    this.material.src = data.src
    this.material.transparent = data.transparent
  }
})