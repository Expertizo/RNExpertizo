///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// * @flow
// */
//
import React, { Component } from 'react';
import Home from './src/components/home.js';
import Profile from './src/components/profile.js';
import {
  AppRegistry,
  StyleSheet,
  Button,
  navigate,
  Text,
  View
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';


const testingRN = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile }
});

AppRegistry.registerComponent('testingRN', () => testingRN);
