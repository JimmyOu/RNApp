import React from 'react';
import PropTypes from 'prop-types';
import {
    ColorPropType,
    StyleSheet,
    ViewPropTypes,
    requireNativeComponent,
    processColor
} from 'react-native'

export default class PieChart extends React.Component {
    static propTypes = {
      data: PropTypes.arrayOf(
          PropTypes.shape({
              value: PropTypes.number,
              color: ColorPropType
          }).isRequired,
      ),
        strokeWidth: PropTypes.number,
        strokeColor: ColorPropType,
        ...ViewPropTypes
    };

    static defaultProps = {
      data: [],
      strokeWidth: 0,
      strokeColor: 'transparent'
    };

    render() {
        const { style, data, ...rest } = this.props;
        const processedData = data.map(item => ({
            value: item.value,
            color: processColor(item.color)
        }));
        return (
            <NativePieChart
                {...rest}
                style={[styles.container, style]}
                data={processedData}
            />
        );
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: 'transparent'
   }
});

const NativePieChart = requireNativeComponent('PieChart', PieChart)
// Native的底层框架可以检查原生属性和包装类的属性是否一致，来减少出现问题的可能
