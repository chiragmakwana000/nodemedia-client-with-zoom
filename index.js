//
//  index.js
//
//  Created by Chirag Makwana & Dhaval Goswami on 2022/11/03.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//
import NodeCameraView from './NodeCameraModule';
import NodePlayerView from './NodePlayerModule';
import { NativeModules } from 'react-native';
module.exports = { NodeCameraView, NodePlayerView, NodeMediaClient: NativeModules.NodeMediaClient };