import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    TextInput,
    View,
    Animated,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            fadeAnim: new Animated.Value(-150)
        }
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration: 500,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state,
        container = {
                position: 'absolute',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#510c65',
                height: 150,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                bottom: fadeAnim
        };
        return (
            <View>

                <View style={styles.containerShadow}>
                </View>
                <Animated.View style={container}>

                    <TextInput placeholder="Email" placeholderTextColor="#ae1e8d" caretHidden={true} style={styles.inputs}></TextInput>
                    <TextInput placeholder="Password" placeholderTextColor="#ae1e8d" caretHidden={true} style={styles.inputs}></TextInput>

                </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerShadow: {
        position: 'absolute',
        bottom: 5,
        width: width,
        backgroundColor: 'darkgray',
        height: 160,
        opacity: 0.3,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    },
    inputs: {
        borderWidth: 1,
        height: 40,
        width: width * 0.8,
        color: '#510c65',
        backgroundColor: 'white',
        borderRadius: 10
    }
});
