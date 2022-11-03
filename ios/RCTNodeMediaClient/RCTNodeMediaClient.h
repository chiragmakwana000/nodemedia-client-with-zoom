//
//  RCTNodeMediaClient.h
//  RCTNodeMediaClient
//
//  Created by Chirag Makwana & Dhaval Goswami on 2022/11/03.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
@interface RCTNodeMediaClient : NSObject<RCTBridgeModule>

@property (class, nonatomic, copy) NSString *license;

@end
