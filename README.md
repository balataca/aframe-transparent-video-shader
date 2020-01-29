# Aframe Transparent Video Shader

This is a shader to display videos with transparency (Alpha Channel) such as WebM.

## Demo
---
https://rare-chicken.glitch.me/

## Browser Installation
---

1. Install by declaring this [script](./dist/aframe-transparent-video-shader.umd.js) after aframe

```
<head>
  <title>My Scene</title>
  <script src="https://aframe.io/releases/1.0.3/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-transparent-video-shader@1.0.1/dist/aframe-transparent-video-shader.umd.js"></script>
</head>
```

## NPM Installation
---

1. Install the package:
```
npm i aframe-transparent-video-shader
```

2. Import after aframe:
```
import 'aframe'
import 'aframe-transparent-video-shader'
```

## Usage
---

1. Create a video element into `a-assets` tag and declare an id.

2. Create an entity and assign a `material="shader: transparent-video; src: #videoId"` attribute

```
<html>
  <head>
    <title>My Scene</title>
    <script src="https://aframe.io/releases/1.0.3/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-transparent-video-shader@1.0.1/dist/aframe-transparent-video-shader.umd.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <video id="videoId" src="https://video-src-url" muted autoplay loop="true"></video>
      </a-assets>
      
      <a-entity
        material="shader: transparent-video; src: #videoId"
        geometry="primitive: plane;
                  width: 1;
                  height: 1.8"
        position="0 1 -2">
      </a-entity>
    </a-scene>
  </body>
</html>
```