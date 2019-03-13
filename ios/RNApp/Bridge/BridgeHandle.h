//
//  BridgeHandle.h
//  TextRN
//
//  Created by JimmyOu on 2019/2/24.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import <React/RCTBridgeDelegate.h>
#import <React/RCTBridge.h>


NS_ASSUME_NONNULL_BEGIN

@interface BridgeAPI : NSObject

+ (instancetype)sharedInstance;

- (RCTBridge *)bridge;
- (void)invalid;


@end
@interface BridgeHandle : NSObject<RCTBridgeDelegate>


@end

NS_ASSUME_NONNULL_END
