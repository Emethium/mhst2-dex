// @generated by expo-yarn-workspaces

import 'expo/build/Expo.fx';
import { activateKeepAwake } from 'expo-keep-awake';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from '../App';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
