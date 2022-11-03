# nodemedia-client-with-zoom
[![npm](https://img.shields.io/npm/v/nodemedia-client-with-zoom.svg)](https://www.npmjs.com/package/nodemedia-client-with-zoom)
[![npm](https://img.shields.io/npm/dm/nodemedia-client-with-zoom.svg)](https://www.npmjs.com/package/nodemedia-client-with-zoom)  
该项目是NodeMediaClient-Android与NodeMediaClient-iOS SDK的react-native封装。  
具备完整的直播播放与发布功能，提供完全一样的API调用。使您只需开发一套程序即可发布两个平台。

## 1.安装
yarn add nodemedia-client-with-zoom

## 2.安装依赖
cd ios  
pod install

## 3.NodeCameraView 权限
### Android
```  
    <uses-feature android:name="android.hardware.camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus"/>

    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.FLASHLIGHT"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### iOS
Project -> Info

```
Privacy - Camera Usage Description
Privacy - Microphone Usage Description
```

## 4.例子

### NodePlayerView

```
import {  NodePlayerView } from 'nodemedia-client-with-zoom';

......

<NodePlayerView 
  style={{ height: 200 }}
  ref={(vp) => { this.vp = vp }}
  inputUrl={"rtmp://192.168.0.10/live/stream"}
  scaleMode={"ScaleAspectFit"}
  bufferTime={300}
  maxBufferTime={1000}
  autoplay={true}
/>
```


### NodeCameraView
```
import {  NodeCameraView } from 'nodemedia-client-with-zoom';

......

<NodeCameraView 
  style={{ height: 400 }}
  ref={(vb) => { this.vb = vb }}
  outputUrl = {"rtmp://192.168.0.10/live/stream"}
  camera={{ cameraId: 1, cameraFrontMirror: true }}
  audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
  video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
  autopreview={true}
/>

<Button
  onPress={() => {
    if (this.state.isPublish) {
      this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
      this.vb.stop();
    } else {
      this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
      this.vb.start();
    }
  }}
  title={this.state.publishBtnTitle}
  color="#841584"
/>
```
## Demo 项目
![img](https://raw.githubusercontent.com/NodeMedia/iShow-RN/master/1519740855033.gif)
https://github.com/NodeMedia/iShow-RN
