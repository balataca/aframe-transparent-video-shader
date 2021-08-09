!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){AFRAME.registerShader("transparent-video",{schema:{src:{type:"map"}},init:function(e){var n=new THREE.VideoTexture(e.src);n.format=THREE.RGBAFormat,e.transparent=!0,this.material=new THREE.MeshBasicMaterial({map:n,transparent:!0})}})});
//# sourceMappingURL=aframe-transparent-video-shader.umd.js.map
