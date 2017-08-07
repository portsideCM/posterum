import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import mainStyles from './stylesheets/mainstyles.js';
var Icon = require('react-native-vector-icons/FontAwesome');

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
                <TouchableHighlight onPress={() => {console.log("Logging in to facebook.");}}>
                    <View>
                        <Icon.Button onPress={() => {
                            if(!this.context.isLoggedIn){
                                this.context.login()
                            }else{
                                this.context.logout()
                            }

                        }}
                        color={"#ffffff"}
                        backgroundColor={"#3b5998"} name={"facebook"}  size={20} borderRadius={100}>
                            <Text style={mainStyles.whitetext}>Login to Facebook</Text>
                        </Icon.Button>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
