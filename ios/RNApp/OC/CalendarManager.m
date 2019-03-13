//
//  CalendarManager.m
//  TextRN
//
//  Created by JimmyOu on 2019/2/22.
//  Copyright © 2019 JimmyOu. All rights reserved.
//
/*
 
 string (NSString)
 number (NSInteger, float, double, CGFloat, NSNumber)
 boolean (BOOL, NSNumber)
 array (NSArray) 包含本列表中任意类型
 object (NSDictionary) 包含string类型的键和本列表中任意类型的值
 function (RCTResponseSenderBlock)
 */
#import "CalendarManager.h"
#import <Foundation/Foundation.h>
#import "NativeCallJS.h"
@implementation CalendarManager
//React Native在一个独立的串行GCD队列中调用原生模块的方法.原生模块可以指定自己在主队列中执行，如果是一个耗时操作，可以自定义队列
- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE();//RCT_EXPORT_MODULE('模块名') //可参略

RCT_EXPORT_METHOD(addEventOne:(NSString *)name) {
    RCTLogInfo(@"addEventOne接收传过来的NSString+NSString: %@", name);
}

RCT_EXPORT_METHOD(addEventTwo:(NSString *)name dic:(NSDictionary *)dic) {
    RCTLogInfo(@"addEventTwo接收传过来的NSString+dictionary: %@ %@", name, dic);
}
RCT_EXPORT_METHOD(addEventThree:(NSString *)name date:(NSInteger)number) {
    RCTLogInfo(@"addEventThree接收传过来的NSString+dictionary: %@ %ld", name,number);
//    NSDateFormatter *formatter = [[NSDateFormatter alloc] init] ;
//        [formatter setDateFormat:@"yyyy-MM-dd"];
//    RCTLogInfo(@"接收传过来的NSString+NSDictionary: %@ %@", name, [formatter stringFromDate:date]);
}

RCT_EXPORT_METHOD(testCallbackEventOne:(NSString *)name callback:(RCTResponseSenderBlock)callBack) {
    RCTLogInfo(@"%@",name);
    NSArray *events = @[@"1",@"2",@"3",@"4"];
    callBack(@[[NSNull null], events]);
}

RCT_REMAP_METHOD(testCallbackEventTwo,
                 params1:(NSString *)params1
                 params2:(NSDictionary *)params2
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                 ) {
    RCTLogInfo(@"prams1 = %@, params2 = %@",params1, params2);
    NSArray *events =@[@"one ",@"two ",@"three"];//准备回调回去的数据
    if (events) {
        resolve(events);
    } else {
        NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
        reject(@"1000", @"There were no events", error);
    }
}

RCT_EXPORT_METHOD(postNotification) {
    [NativeCallJS postNotiToReactNative:@"message from Native" args:@{@"name":@"Jimmy",@"age":@(20)}];
}


//原生导出一些常量，在JavaScript端随时都可以访问。传递一些静态数据console.log(CalendarManager.firstDayOfTheWeek);
- (NSDictionary *)constantsToExport
{
    return @{ @"firstDayOfTheWeek": @"Monday" };
}





@end
