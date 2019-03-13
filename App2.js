import React, {Component} from 'react';
import codePush from 'react-native-code-push';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

var CalendarManger = NativeModules.CalendarManager;
var nativeBridge = NativeModules.NativeCallJS;
var EnumConstants = NativeModules.EnumConstants;

const NativeModule = new NativeEventEmitter(nativeBridge);

export default class App2 extends Component {
    didclickBtn = () => {
        CalendarManger.addEventOne('姜欧');
        CalendarManger.addEventTwo('JimmyOu', {job: 'programmer'});
        CalendarManger.addEventThree('JimmyOu', 19910730);
    };
    didTestBlock = () => {
        CalendarManger.testCallbackEventOne('js --》native', (error, events) => {
            if (error) {
                console.error(error);
            } else {
                alert(events);
            }
        });
    };

    didTestPromise = async () => {
        try {
            const events = await CalendarManger.testCallbackEventTwo('jimmy', {'job': 'developer', 'age': 19});
            alert(events);
        } catch (e) {
            console.error(e);
        }
    };

    testNativeToRN = () => {
        CalendarManger.postNotification();
    };
    testNativeEnum = () => {
        alert(EnumConstants.statusBarAnimationFade);
    };

    componentDidMount() {
        //添加监听
        this.subscription = NativeModule.addListener('SpotifyHelper', (data) => this._getNotice(data));
    }

    _getNotice(body) {
        alert(JSON.stringify(body))
    }

    componentWillUnmount() {
        //删除监听
        this.subscription.remove();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.didclickBtn} title='testMethod'/>
                <Button onPress={this.didTestBlock} title='testCallBack'/>
                <Button onPress={this.didTestPromise} title='testPromise'/>
                <Button onPress={this.testNativeToRN} title='testNativeToRN'/>
                <Button onPress={this.testNativeEnum} title='testNativeEnum'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
