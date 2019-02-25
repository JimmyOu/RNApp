//
//  NativeCallJS.h
//  TextRN
//
//  Created by JimmyOu on 2019/2/22.
//  Copyright © 2019 JimmyOu. All rights reserved.
// native对RN的通知

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN

@interface NativeCallJS : RCTEventEmitter<RCTBridgeModule>

+ (void)postNotiToReactNative:(NSString *)type args:(id)args;

@end

NS_ASSUME_NONNULL_END
