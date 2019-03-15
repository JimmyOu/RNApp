//
//  CalendarManager.h
//  TextRN
//
//  Created by JimmyOu on 2019/2/22.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "React/RCTViewManager.h"
//让模块接口暴露给JavaScript
@interface RCT_EXTERN_MODULE(PieChartManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(data, NSArray)
RCT_EXPORT_VIEW_PROPERTY(strokeColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(strokeWidth, CGFloat)

//RCT_EXPORT_VIEW_PROPERTY(onClickBanner, RCTBubblingEventBlock);
@end
