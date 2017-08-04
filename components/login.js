import React, {Component} from "react";
import {View} from "react-native";

const FBSDK = require("react-native-fbsdk");
const {
  LoginButton
} = FBSDK;

export default class Login extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["public_profile"]}
                    onLoginFinish={
                        (error, result) => {
                            if (error) {
                                alert(error);
                            }
                            else if (result.isCancelled) {
                                alert("Cancelled");
                            }
                            else {
                                alert("Login was successful with permissions: " + result.grantedPermissions);
                            }
                        }
                    }
                    onLogoutFinish={() => alert("User logged out")}/>
            </View>
        )
    }
}
