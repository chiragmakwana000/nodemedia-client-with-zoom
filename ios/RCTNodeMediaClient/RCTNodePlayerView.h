//
//  RCTNodePlayerView.h
//
//
//  Created by Chirag Makwana & Dhaval Goswami on 2022/11/03.
//  Copyright © 2017年 NodeMedia. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <NodeMediaClient/NodeMediaClient.h>
#import <React/RCTView.h>

@interface RCTNodePlayerView : UIView <NodePlayerDelegate>
@property (strong, nonatomic) NSString *inputUrl;
@property (nonatomic) int bufferTime;
@property (nonatomic) int maxBufferTime;
@property (nonatomic) BOOL autoplay;
@property (nonatomic) BOOL audioEnable;
@property (strong, nonatomic) NSString *scaleMode;
@property (strong, nonatomic) NSString *cryptoKey;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;

-(int)start;
-(int)stop;
-(int)pause;

@end
