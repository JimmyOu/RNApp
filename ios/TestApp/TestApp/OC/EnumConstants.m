//
//  EnumConstants.m
//  TestApp
//
//  Created by JimmyOu on 2019/3/8.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "EnumConstants.h"

typedef NS_ENUM(NSInteger, UIStatusBarAnimation) {
    UIStatusBarAnimationNone,
    UIStatusBarAnimationFade,
    UIStatusBarAnimationSlide,
};

@implementation EnumConstants

RCT_EXPORT_MODULE();

/*
 JS使用
 onPressForEnum() {
 let enumConstants = NativeModules.EnumConstants;
 alert(enumConstants.statusBarAnimationFade);
 }
 */

- (NSDictionary *)constantsToExport
{
    return @{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),
              @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
              @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide) };
};

@end
