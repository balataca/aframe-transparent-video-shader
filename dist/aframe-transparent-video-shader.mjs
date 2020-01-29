AFRAME.registerShader("transparent-video",{schema:{src:{type:"map"}},init:function(e){var r=new THREE.VideoTexture(e.src);r.minFilter=THREE.LinearFilter,r.format=THREE.RGBAFormat,this.material=new THREE.MeshLambertMaterial({map:r})}});
//# sourceMappingURL=aframe-transparent-video-shader.mjs.map
