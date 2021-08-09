AFRAME.registerShader("transparent-video",{schema:{src:{type:"map"}},init:function(a){const e=new THREE.VideoTexture(a.src);e.format=THREE.RGBAFormat,a.transparent=!0,this.material=new THREE.MeshBasicMaterial({map:e,transparent:!0})}});
//# sourceMappingURL=aframe-transparent-video-shader.modern.js.map
