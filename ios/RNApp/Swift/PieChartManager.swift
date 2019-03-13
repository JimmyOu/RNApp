//
//  PieChartManager.h
//  TextRN
//
//  Created by JimmyOu on 2019/2/22.
//  Copyright © 2019 JimmyOu. All rights reserved.

import Foundation

@objc(PieChartManager)
class PieChartManager: RCTViewManager {
  override func view() -> UIView! {
    return PieChartView(frame: .zero)
  }
}
