//
//  RCTNodeMediaClient.m
//  RCTNodeMediaClient
//
//  Created by Chirag Makwana & Dhaval Goswami on 2022/11/03.
//  Copyright © 2017年 NodeMedia Chen. All rights reserved.
//

#import "RCTNodeMediaClient.h"

@implementation RCTNodeMediaClient

RCT_EXPORT_MODULE(NodeMediaClient);


static NSString *_license = @"";

+ (NSString*)license {
    return _license;
}

+ (void)setLicense:(NSString *)license {
    _license = license;
}

RCT_EXPORT_METHOD(setLicense:(NSString *)license)
{
    _license = license;
}
@end
