/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screens/login/LoginScreen'
import {name as appName} from './app.json';
import DatabindingScreen from '../HelloReactNative/screens/databinding/DatabindingScreen'
import EmojiScreen from '../HelloReactNative/screens/emoji/EmojiScreen'

AppRegistry.registerComponent(appName, () => EmojiScreen);
