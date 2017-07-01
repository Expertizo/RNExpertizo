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


export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome to Expertizo',
    };
    constructor(props) {
        super(props);
        this.state = {
            text: ''
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
                <View style={{flex: 2, justifyContent: 'flex-end', padding: 20}}>
                    <TextInput placeholder="Email" style={{ borderWidth:1, height:40}}></TextInput>
                    <TextInput placeholder="Password" style={{ borderWidth:1, height:40}}></TextInput>
                </View>
                <View style={{flex: 2, flexDirection: 'row', margin: 20, justifyContent: 'space-around', alignItems: 'flex-start'}}>
                    <View style={{height: 40, flex: 1, margin: 10}}>
                        <Button
                        color="#510c65"
                        title="Login"
                        onPress={() =>
                                  navigate('Profile')
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

