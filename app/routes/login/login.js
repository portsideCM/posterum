import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from '../components/FBLoginView.js';
import styles from '../components/stylesheets/mainstyles.js';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Posterum
                </Text>
                <FBLogin
                    buttonView={<FBLoginView />}
                    ref={(fbLogin) => { this.fbLogin = fbLogin }}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    permissions={["email","user_friends"]}
                    onLogin={/*Go to the main page*/function(e){console.log(e)}}
                    onLoginFound={function(e){console.log(e)}}
                    onLoginNotFound={function(e){console.log(e)}}
                    onLogout={function(e){console.log(e)}}
                    onCancel={function(e){console.log(e)}}
                    onPermissionsMissing={function(e){console.log(e)}}
                  />
            </View>
        );
    }
}
