//
//  BridgeHandle.m
//  TextRN
//
//  Created by JimmyOu on 2019/2/24.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "BridgeHandle.h"
#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>

@interface BridgeAPI()

@property (strong, nonatomic) RCTBridge *RNbridge;

@end
@implementation BridgeAPI

+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    static BridgeAPI *instance ;
    dispatch_once(&onceToken, ^{
        instance = [[self alloc] init];
    });
    
    return instance;
}

- (void)invalid {
    [self.RNbridge invalidate];
    self.RNbridge = nil;
}
- (RCTBridge *)bridge {
    if (self.RNbridge && [self.RNbridge isValid]) {
        return self.RNbridge;
    } else {
        self.RNbridge = [[RCTBridge alloc] initWithDelegate:[[BridgeHandle alloc] init] launchOptions:nil];
    }
    return self.RNbridge;
}






@end
@implementation BridgeHandle

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
    NSURL *jsCodeLocation;
    
    
    
//#ifdef DEBUG
//        jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//#else
    jsCodeLocation = [CodePush bundleURL];
//#endif
    return jsCodeLocation;
}

@end
