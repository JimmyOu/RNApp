



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import assign from 'object-assign';

class PageControl extends Component {

    static propTypes = {
        numberOfPages: PropTypes.number.isRequired,
        currentPage: PropTypes.number,
        hidesForSinglePage: PropTypes.bool,
        pageIndicatorTintColor: PropTypes.string,
        currentPageIndicatorTintColor: PropTypes.string,
        indicatorSize: PropTypes.object,
        indicatorStyle: PropTypes.object,
        currentIndicatorStyle: PropTypes.object,
        onPageIndicatorPress: PropTypes.fun
    };

    static defaultProps = {
        numberOfPages: 0,
        currentPage: 0,
        hidesForSinglePage: false,
        pageIndicatorTintColor: 'gray',
        currentPageIndicatorTintColor: 'white',
        indicatorSize: { width: 8, height: 8 },
        indicatorStyle: {},
        currentIndicatorStyle: {},
        onPageIndicatorPress: function () { }
    }

    onPageIndicatorPress(index: number) {
        this.props.onPageIndicatorPress(index);
    }

    render() {
        var { style, ...props } = this.props;

        var defaultStyle = {
            height: this.props.indicatorSize.height
        };

        var indicatorItemStyle = {
            width: this.props.indicatorSize.width,
            height: this.props.indicatorSize.height,
            borderRadius: this.props.indicatorSize.height / 2,
            marginLeft: 5,
            marginRight: 5
        };

        var indicatorStyle = assign({}, indicatorItemStyle, this.props.indicatorStyle, {
            backgroundColor: this.props.pageIndicatorTintColor
        });

        var currentIndicatorStyle = assign({}, indicatorItemStyle, this.props.currentIndicatorStyle, {
            backgroundColor: this.props.currentPageIndicatorTintColor
        });

        var pages = [];
        for (var i = 0; i < this.props.numberOfPages; i++) {
            pages.push(i);
        }

        return (
            this.props.hidesForSinglePage && pages.length <= 1 ? null : <View style={[styles.container, defaultStyle, style]}>
                {pages.map((el, i) => <TouchableWithoutFeedback key={i} onPress={this.onPageIndicatorPress.bind(this, i)}>
                    <View style={i == this.props.currentPage ? currentIndicatorStyle : indicatorStyle} />
                </TouchableWithoutFeedback>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default PageControl;
