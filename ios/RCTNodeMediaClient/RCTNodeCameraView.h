//
//  RCTNodeCameraView.h
//  
//
//  Created by Chirag Makwana & Dhaval Goswami on 2022/11/03.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <NodeMediaClient/NodeMediaClient.h>
#import <React/RCTView.h>

@interface RCTNodeCameraView : UIView <NodePublisherDelegate>
@property (strong, nonatomic) NSString *outputUrl;
@property (nonatomic) BOOL autopreview;
@property (strong,nonatomic) NSDictionary *camera;
@property (strong,nonatomic) NSDictionary *audio;
@property (strong,nonatomic) NSDictionary *video;
@property (nonatomic) BOOL denoise;
@property (nonatomic) NSInteger smoothSkinLevel;
@property (strong, nonatomic) NSString *cryptoKey;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;
@property (nonatomic) NSInteger zoomScale;

@property (nonatomic) BOOL flashEnable;

-(int)startprev;
-(int)stopprev;
-(int)start;
-(int)stop;
-(int)switchCamera;


@end
