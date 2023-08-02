AFRAME.registerShader('transparent-video', {
  schema: {
    src: { type: 'map' },
  },

  applyWebmShader: function(videoEl) {
    const videoTexture = new THREE.VideoTexture(videoEl);

    videoTexture.format = THREE.RGBAFormat;

    this.material = new THREE.MeshBasicMaterial({
      map: videoTexture, transparent: true,
    });
  },
  
  applyHEVCShader: function(videoEl) {
    const videoTexture = new THREE.VideoTexture(videoEl);
    const alphaTexture = new THREE.VideoTexture(videoEl);

    videoTexture.format = THREE.RGBAFormat;
    alphaTexture.format = THREE.AlphaFormat;
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D videoTexture;
        uniform sampler2D alphaTexture;

        void main() {
          vec4 videoColor = texture2D(videoTexture, vUv);
          vec4 alphaColor = texture2D(alphaTexture, vUv);

          gl_FragColor = vec4(videoColor.rgb, alphaColor.a);
        }
      `,
      uniforms: {
        videoTexture: { type: 't', value: videoTexture },
        alphaTexture: { type: 't', value: alphaTexture }
      },
      transparent: true
    });
  },
  
  init: function (data) {
    const videoEl = data.src;
    const videoUrl = new URL(videoEl.currentSrc);
    const splitedUrl = videoUrl.pathname.split('.');
    const videoType = splitedUrl[splitedUrl.length - 1]?.toLowerCase();

    data.transparent = true;
  
    if (videoType === 'webm') {
      this.applyWebmShader(videoEl);
    } else {
      this.applyHEVCShader(videoEl);
    }
  },
});