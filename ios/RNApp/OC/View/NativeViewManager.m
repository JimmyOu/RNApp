//
//  NativeViewManager.m
//  RNApp
//
//  Created by JimmyOu on 2019/3/14.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "NativeViewManager.h"
#import <React/RCTComponent.h>
#import "NativeView.h"

@implementation NativeViewManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onCallBack, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(backgroudColor, UIColor)

- (UIView *)view {
    NativeView *nativeView = [[NativeView alloc] init];
    return nativeView;
}


@end
