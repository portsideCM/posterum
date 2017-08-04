import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
<<<<<<< HEAD
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from './components/FBLoginView.js';
=======
import Login from './components/login.js';
>>>>>>> f0e107efe7e2d6d9bca2fceb95824ffd5765c269

export default class Posterum extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Posterum
        </Text>
<<<<<<< HEAD
        <FBLogin
            buttonView={<FBLoginView />}
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            permissions={["email","user_friends"]}
            onLogin={function(e){console.log(e)}}
            onLoginFound={function(e){console.log(e)}}
            onLoginNotFound={function(e){console.log(e)}}
            onLogout={function(e){console.log(e)}}
            onCancel={function(e){console.log(e)}}
            onPermissionsMissing={function(e){console.log(e)}}
          />
=======
        <Login />
>>>>>>> f0e107efe7e2d6d9bca2fceb95824ffd5765c269
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('posterum', () => Posterum);
