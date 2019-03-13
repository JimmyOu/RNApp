//
//  RNViewController.m
//  TestApp
//
//  Created by JimmyOu on 2019/2/25.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "RNViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import "Bridge/BridgeHandle.h"

@interface RNViewController ()

@end

@implementation RNViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(dismissCurrent) name:@"dimissCurrentRNVCNotification" object:nil];
    [self initRCTRootView];
}
- (void)dismissCurrent {
    [self dismissViewControllerAnimated:YES completion:nil];
}
- (void)initRCTRootView {
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:[[BridgeAPI sharedInstance] bridge] moduleName:self.moduleName initialProperties:nil];
    self.view = rootView;

}
- (void)dealloc {
    NSLog(@"RNViewCOntroller dealloc");
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
