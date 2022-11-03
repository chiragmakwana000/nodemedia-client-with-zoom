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

## 3.Example

```
import {  NodeCameraView } from 'nodemedia-client-with-zoom';
let _prevPinch = 1;
const ZOOM_F = Platform.OS === 'ios' ? 0.5 : 0.009;


  const [zoom, setZoom] = useState(0.0);

 <ZoomView
        onPinchStart={() => {
          _prevPinch = 1;
        }}
        onPinchEnd={() => {
          _prevPinch = 1;
        }}
        onPinchProgress={p => {
          let p2 = p - _prevPinch;
          if (p2 > 0 && p2 > ZOOM_F) {
            _prevPinch = p;
            setZoom(Math.min(zoom + ZOOM_F, Platform.OS === 'ios' ? 100 : 1));
          } else if (p2 < 0 && p2 < -ZOOM_F) {
            _prevPinch = p;
            setZoom(Math.max(zoom - ZOOM_F, 0));
          }
        }}>

<NodeCameraView
  zoomScale={zoom}
  autopreview={true}
  smoothSkinLevel={3}
  style={{ height: 400 }}
  ref={(vb) => { this.vb = vb }}
  outputUrl = {"rtmp://192.168.0.10/live/stream"}
  camera={{ cameraId: 1, cameraFrontMirror: true }}
  audio={{bitrate: 32000, profile: 1, samplerate: 48000}}
  video={{
           fps: 30,
           preset: 4,
           profile: 1,
           bitrate: 900000,
           videoFrontMirror: true,
          }}
  />
 </ZoomView>


 // use this as component


 import React from 'react';
import { View } from 'react-native';
import {
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';
export default class ZoomView extends React.Component {
  onGesturePinch = ({ nativeEvent }) => {
    this.props.onPinchProgress(nativeEvent.scale);
  }
  onPinchHandlerStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      this.props.onPinchEnd();
    }
    else if (event.nativeEvent.oldState === State.BEGAN && event.nativeEvent.state === State.ACTIVE) {
      this.props.onPinchStart();
    }
  };
  render() {
    return (
      <PinchGestureHandler
        onGestureEvent={this.onGesturePinch}
        onHandlerStateChange={this.onPinchHandlerStateChange}
      >
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </PinchGestureHandler>
    );
  }
}
ZoomView.defaultProps = {
  onPinchProgress: (p) => { },
  onPinchStart: () => { },
  onPinchEnd: () => { }
}
```

## Demo project
![img](https://github.com/chiragmakwana000/nodemedia-client-with-zoom/blob/master/example.gif)
https://github.com/chiragmakwana000/nodemedia-client-with-zoom/blob/master/example.gif