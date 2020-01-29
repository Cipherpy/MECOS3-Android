/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//disable the red warning screens when in the debug build

//npm install babel-plugin-transform-remove-console --save-dev
console.disableYellowBox = true;
console.error = (error) => error.apply;

///////////////////////////////////////////////////////////
AppRegistry.registerComponent(appName, () => App);
