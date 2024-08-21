import React from "react";
import { View } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import { NodeCameraView } from "./NodeCameraModule"; // Import from your package

const ZOOM_F = Platform.OS === "ios" ? 0.5 : 0.009;

const NodeCameraWithZoom = ({
  style,
  outputUrl,
  cameraProps,
  audioProps,
  videoProps,
}) => {
  const [zoom, setZoom] = React.useState(0.0);
  const _prevPinch = React.useRef(1);

  const handleGesturePinch = ({ nativeEvent }) => {
    const p = nativeEvent.scale;
    const p2 = p - _prevPinch.current;

    if (p2 > 0 && p2 > ZOOM_F) {
      _prevPinch.current = p;
      setZoom((prevZoom) =>
        Math.min(prevZoom + ZOOM_F, Platform.OS === "ios" ? 100 : 1)
      );
    } else if (p2 < 0 && p2 < -ZOOM_F) {
      _prevPinch.current = p;
      setZoom((prevZoom) => Math.max(prevZoom - ZOOM_F, 0));
    }
  };

  const handlePinchHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      _prevPinch.current = 1;
    } else if (
      event.nativeEvent.oldState === State.BEGAN &&
      event.nativeEvent.state === State.ACTIVE
    ) {
      _prevPinch.current = 1;
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={handleGesturePinch}
      onHandlerStateChange={handlePinchHandlerStateChange}
    >
      <View style={style}>
        <NodeCameraView
          zoomScale={zoom}
          autopreview={true}
          smoothSkinLevel={3}
          style={{ height: "100%", width: "100%" }}
          outputUrl={outputUrl}
          camera={cameraProps}
          audio={audioProps}
          video={videoProps}
        />
      </View>
    </PinchGestureHandler>
  );
};

NodeCameraWithZoom.defaultProps = {
  outputUrl: "",
  cameraProps: {},
  audioProps: {},
  videoProps: {},
};

export default NodeCameraWithZoom;
