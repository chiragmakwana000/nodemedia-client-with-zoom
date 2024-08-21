# nodemedia-client-with-zoom

[![npm](https://img.shields.io/npm/v/nodemedia-client-with-zoom.svg)](https://www.npmjs.com/package/nodemedia-client-with-zoom)
[![npm](https://img.shields.io/npm/dm/nodemedia-client-with-zoom.svg)](https://www.npmjs.com/package/nodemedia-client-with-zoom)  
This project is the react-native packaging of NodeMediaClient-Android and NodeMediaClient-iOS SDK.
Complete live publish and play functions, providing the exact same API call. You can publish two platforms just by developing one set of programs.  
[README](https://github.com/chiragmakwana000/nodemedia-client-with-zoom/blob/master/README.md)

## 1.install

yarn add nodemedia-client-with-zoom

## 2.Install dependencies

cd ios  
pod install

iOS Setup
To use react-native-nodemediaclient in your iOS project, add the following line to your Podfile:

pod 'NodeMediaClient', :path => '../node_modules/nodemedia-client-with-zoom/NodeMediaClient'

## 3.Example

```
import {  NodeCameraWithZoom } from 'nodemedia-client-with-zoom';

 const cameraProps = { cameraId: 1, cameraFrontMirror: true };
  const audioProps = { bitrate: 32000, profile: 1, samplerate: 48000 };
  const videoProps = {
    fps: 30,
    preset: 4,
    profile: 1,
    bitrate: 900000,
    videoFrontMirror: true,
  };

  return (
    <NodeCameraWithZoom
      outputUrl="rtmp://192.168.0.10/live/stream"
      cameraProps={cameraProps}
      audioProps={audioProps}
      videoProps={videoProps}
      style={{ height: 400 }} // Adjust style as needed
    />
  );


```

## Demo project

![img](https://github.com/chiragmakwana000/nodemedia-client-with-zoom/blob/master/example.gif)
