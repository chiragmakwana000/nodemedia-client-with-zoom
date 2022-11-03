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

## 3.NodeCameraView Permission

### Android
Open YOURPROJECTFOLDER/android/app/src/main/AndroidManifest.xml, Add

```  
<uses-feature android:name="android.hardware.camera"/>
<uses-feature android:name="android.hardware.camera.autofocus"/>

<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.FLASHLIGHT"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### iOS
Open YOURPROJECTFOLDER/ios/QLive/Info.plist , Add:
```
<key>NSCameraUsageDescription</key>
<string>YOURPROJECTNAME requires access to your phone’s camera.</string>
<key>NSMicrophoneUsageDescription</key>
<string>YOURPROJECTNAME requires access to your phone’s Microphone.</string>
````

## 4.Example

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


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA,PermissionsAndroid.PERMISSIONS.RECORD_AUDIO],
      {
        title: "Cool Photo App Camera And Microphone Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

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

 <Button title="request permissions" onPress={requestCameraPermission} />
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

## Demo project
![img](https://raw.githubusercontent.com/NodeMedia/iShow-RN/master/1519740855033.gif)
https://github.com/NodeMedia/iShow-RN
