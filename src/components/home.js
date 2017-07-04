/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Image,
    Text,
    Dimensions,
    TextInput,
    View
} from 'react-native';
import Login from './login.js'


export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome to Expertizo',
    };
    constructor(props) {
        super(props);
        this.state = {
            openLogin: false
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        var {width} = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <View style={{flex: 5, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Image resizeMode = 'cover' source={require('../resources/img/expertizo_logo.jpg')} style={{width: width * 0.8, height:  width * 0.8}} />
                </View>
                <View style={{flex: 4, flexDirection: 'row', margin: 20, justifyContent: 'space-around', alignItems: 'flex-start'}}>
                    <View style={{height: 40, flex: 1, margin: 10}}>
                        <Button
                        color="#510c65"
                        title="Login"
                        onPress={() =>
                                  this.setState({openLogin: !this.state.openLogin})
                                }
                        />
                    </View>
                    <View style={{height: 40, flex: 1, margin: 10}}>
                    <Button
                        color="#ae1e8d"
                        title="Register"
                        onPress={() =>
                                  navigate('Profile')
                                }
                        />
                    </View>
                </View>
                {this.state.openLogin && <Login />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
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

