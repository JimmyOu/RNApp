/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import App2 from './App2';
import RootScene from './src/RootScene';
AppRegistry.registerComponent('App', () => App);
AppRegistry.registerComponent('App2', () => App2);
AppRegistry.registerComponent('Meituan', ()=> RootScene);
