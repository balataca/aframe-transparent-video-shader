# Aframe Transparent Video Shader

This is a shader to display videos with transparency (Alpha Channel) such as WebM and HEVC H265.

## Demo

https://aframe-transparent-video.glitch.me/

## Browser Installation

1. Install by declaring this [script](./dist/aframe-transparent-video-shader.umd.js) after aframe

```
<head>
  <title>My Scene</title>
  <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-transparent-video-shader@1.0.6/dist/aframe-transparent-video-shader.umd.js"></script>
</head>
```

## NPM Installation

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

1. Create a video element into `a-assets` tag and declare an id.

2. Create an entity and assign a `material="shader: transparent-video; src: #videoId"` attribute

```
<html>
  <head>
    <title>My Scene</title>
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-transparent-video-shader@1.0.6/dist/aframe-transparent-video-shader.umd.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <video
          id="videoId"
          muted
          loop
          playsinline
          webkit-playsinline
        >
          <!-- HEVC video for safari support -->
          <source src="https://video-src-url/video.mov" type="video/mp4;codecs=hvc1">
          <!-- WEBM video for chrome and firefox -->
          <source src="https://video-src-url/video.webm" type="video/webm" />
        </video>
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

## Notes

### Video autoplay

On the latest chrome versions, the autoplay is blocked by default until there is an user interaction.
You can read more [here](https://aframe.io/docs/1.2.0/components/material.html#video-textures).

Some solutions you can use:

* Add a button to play the video:  
You can find a full example [here](https://github.com/aframevr/aframe/blob/master/examples/test/video/index.html).  
Or use the [play-on-click](https://github.com/aframevr/aframe/blob/master/examples/js/play-on-click.js) component.

* Add a `click` event listener to the whole page:
```
document.addEventListener('click', () => {
    video = document.querySelector('video');
    video.play();
});
``` 

### Safari Support

Safari doesn't currently support `webm` videos with transparency, so you will need to add an extra `.mp4` or `.mov` video file with the `HEVC H.265` codec encoded with transparency enabled. See the demo code [here](https://glitch.com/edit/#!/aframe-transparent-video) for an example implementation.