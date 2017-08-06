import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome');

/**
  Example FBLoginView class
  Please note:
  - this is not meant to be a full example but highlights what you have access to
  - If you use a touchable component, you will need to set the onPress event like below
**/
export default class FBLoginView extends Component {
    static contextTypes = {
        isLoggedIn: React.PropTypes.bool,
        login: React.PropTypes.func,
        logout: React.PropTypes.func,
        props: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={[]}>
                <TouchableHighlight onPress={() => {console.log("Loggin in to facebook.");}}>
                    <View>
                        <Icon.Button onPress={() => {
                            if(!this.context.isLoggedIn){
                                this.context.login()
                            }else{
                                this.context.logout()
                            }

                        }}
                        color={"#000000"}
                        backgroundColor={"#3b5998"} name={"facebook"}  size={20} borderRadius={100}>
                            <Text color={"#000000"}>Login to Facebook</Text>
                        </Icon.Button>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
