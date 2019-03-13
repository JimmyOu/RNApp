import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, NativeModules,} from 'react-native';

var CalendarManger = NativeModules.CalendarManager;
export default class OrderScene extends Component {

    backToNative = () => {
        CalendarManger.dimissCurrentRNVCNotification();
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Button title={'backToNative'} onPress={this.backToNative}/>
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
