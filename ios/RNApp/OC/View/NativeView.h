//
//  NativeView.h
//  RNApp
//
//  Created by JimmyOu on 2019/3/14.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>
NS_ASSUME_NONNULL_BEGIN

@interface NativeView : UIView

@property (strong, nonatomic) UIColor *backgroudColor;

@property (nonatomic, copy) RCTBubblingEventBlock onCallBack;
//声明block属性名称要以on开头 非常骚气


@end

NS_ASSUME_NONNULL_END
