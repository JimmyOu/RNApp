//
//  NativeCallJS.m
//  TextRN
//
//  Created by JimmyOu on 2019/2/22.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "NativeCallJS.h"
#import <React/RCTEventDispatcher.h>
@interface NativeCallJS()

@end
@implementation NativeCallJS
RCT_EXPORT_MODULE();//声明该类是EXPORT_MODULE,那么该类的实例已经创建好了.如果你在其他地方创建这个类的实例(alloc 或 new),会导致,RN不能正确识别该类的实例.
- (NSArray<NSString *> *)supportedEvents {
    return @[@"SpotifyHelper"];
}
- (void)startObserving {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(emitEventInternal:)
                                                 name:@"event-emitted"
                                               object:nil];
}
- (void)stopObserving {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)emitEventInternal:(NSNotification *)notification {
    [self sendEventWithName:@"SpotifyHelper" body:notification.object];
}

+ (void)postNotiToReactNative:(NSString *)type args:(id)args {
    NSMutableDictionary *dic = [NSMutableDictionary dictionary];
    dic[@"type"] = type;
    dic[@"args"] = args;
    [[NSNotificationCenter defaultCenter] postNotificationName:@"event-emitted" object:dic];
}


@end
