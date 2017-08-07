import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from './components/FBLoginView.js';
import styles from './components/stylesheets/mainstyles.js';

import Login from './components/routes/login/login.js';

export default class Posterum extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{id:"login"}}
                renderScene={this.renderScene}
            />
        );
    }

    renderScene(route, navigator){
        switch(route.id){
            case "login":
                return (<Login/>);
        }
    }
}

AppRegistry.registerComponent('posterum', () => Posterum);
