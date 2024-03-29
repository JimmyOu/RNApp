


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView, InteractionManager } from 'react-native';

// create a component
class WebScene extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: 'white' },
        title: navigation.state.params.title,
    });

    state: {
        source: Object
    }

    constructor(props: Object) {
        super(props)
        this.state = {
            source: {}
        }
        this.props.navigation.setParams({ title: '加载中'})
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref='webView'
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit
                />
            </View>
        );
    }

    onLoadEnd(e: any) {
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({ title: e.nativeEvent.title })
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});

//make this component available to the app
export default WebScene;
