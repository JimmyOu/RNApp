//
//  PieChartManager.h
//  TextRN
//
//  Created by JimmyOu on 2019/2/22.
//  Copyright © 2019 JimmyOu. All rights reserved.

import Foundation

@objc(PieChartManager)//类对objective-c公开
class PieChartManager: RCTViewManager {
  override func view() -> UIView! {
    return PieChartView(frame: .zero)
  }
}

/*
 原生视图都需要被一个RCTViewManager的子类来创建和管理。
 这些管理器在功能上有些类似“视图控制器”，但它们本质上都是单例 - React Native只会为每个管理器创建一个实例。
 建原生的视图并提供给RCTUIManager，RCTUIManager则会反过来委托它们在需要的时候去设置和更新视图的属性。RCTViewManager还会代理视图的所有委托，并给JavaScript发回对应的事件。
 
 */
