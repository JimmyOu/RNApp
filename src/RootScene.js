


import React, { Component } from 'react';
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import color from './widget/color';
import images from './widget/images';
import TabBarItem from './widget/TabBarItem';

import HomeScene from './scene/Home/HomeScene';
import OrderScene from './scene/Order/OrderScene';
import NearByScene from './scene/NearBy/NearByScene';
import MineScene from './scene/Mine/MineScene';
import CodePushManager from '../page/CodePushManager';


import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

const lightContentScenes = ['Home', 'Mine'];


const HomeScreen = createStackNavigator(
    {
        Home: {
            screen: HomeScene,
        },
        GroupPurchase: {
            screen: GroupPurchaseScene
        },
        Web: {
            screen: WebScene
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTintColor:color.theme,
            headerBackTitle:null,
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={images.tabBar.ic_home_normal}
                    selectedImage={images.tabBar.ic_home_selected}
                />
            ),
        }
    },
);

const NearByScreen = createStackNavigator(
    {
        NearBy: {
            screen: NearByScene,
        },
        GroupPurchase: {
            screen: GroupPurchaseScene
        },
    },
    {
        initialRouteName: 'NearBy',
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={images.tabBar.ic_Nearby_normal}
                    selectedImage={images.tabBar.ic_Nearby_selected}
                />
            ),

        }
    },
);


const OrderScreen = createStackNavigator(
    {
        Order: {
            screen: OrderScene,
        }
    },
    {
        initialRouteName: 'Order',
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={images.tabBar.ic_Order_normal}
                    selectedImage={images.tabBar.ic_Order_selected}
                />
            )
        }
    },
);

const MineScreen = createStackNavigator(
    {
        Mine: {
            screen: MineScene,
        },
        CodePush: {
            screen: CodePushManager,
        }
    },
    {
        initialRouteName: 'Mine',
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={images.tabBar.ic_Mine_normal}
                    selectedImage={images.tabBar.ic_Mine_selected}
                />
            )
        }
    },
);

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        // NearBy: NearByScreen,
        Order: OrderScreen,
        Mine: MineScreen,
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        tabBarOptions:{
            style: {
                backgroundColor: color.white,
            },
            showLabel: true,
            showIcon: true,
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
        }
    }
);
const RootScene = createAppContainer(TabNavigator);

export default RootScene;
