//
//  ViewController.m
//  TestApp
//
//  Created by JimmyOu on 2019/2/25.
//  Copyright © 2019 JimmyOu. All rights reserved.
//

#import "ViewController.h"
#import "RNViewController.h"
#import "BridgeHandle.h"

@interface ViewController ()

@end

@implementation ViewController
- (IBAction)click:(id)sender {
    RNViewController *vc = [[RNViewController alloc] init];
    vc.moduleName = @"App";
    [self.navigationController pushViewController:vc animated:YES];
}
- (IBAction)clickRN2:(id)sender {
    RNViewController *vc = [[RNViewController alloc] init];
    vc.moduleName = @"App2";
    [self.navigationController pushViewController:vc animated:YES];
}
- (IBAction)invalid:(id)sender {
    [[BridgeAPI sharedInstance] invalid];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}



@end
