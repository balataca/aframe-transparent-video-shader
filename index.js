AFRAME.registerShader('transparent-video', {
  schema: {
    src: { type: 'map' },
  },

  init: function (data) {
    const videoTexture = new THREE.VideoTexture(data.src);
    const alphaTexture = new THREE.VideoTexture(data.src);

    videoTexture.format = THREE.RGBAFormat;
    alphaTexture.format = THREE.AlphaFormat;
    data.transparent = true;

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
        alphaTexture: { type: 't', value: alphaTexture },
      },
      transparent: true,
    });
  },
});