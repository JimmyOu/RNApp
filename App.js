/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PieChart from './PieChart';


type Props = {};
export default class App extends Component<Props> {
    state = {
        data: [
            { value: 12, color: "#2196F3" },
            { value: 12, color: "#8BC34A" },
            { value: 8, color: "#f44336" },
            { value: 4, color: "#FF9800" }
        ] };

    randomize = () => {
        const { data } = this.state;
        this.setState({
            data: data.map(slice => ({
                value: Math.random() + 0.1,
                color: slice.color
            }))
        }); };
    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <PieChart
                    style={styles.chart}
                    strokeColor={'white'}
                    strokeWidth={4}
                    data={data}
                />
                <Button
                    title = 'press to randomize'
                    onPress={this.randomize}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({ container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }, chart: {
        width: 300,
        height: 300,
        marginBottom: 20
    } });
