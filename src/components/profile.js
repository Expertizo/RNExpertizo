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
    ActivityIndicator,
    ListView,
    Text,
    View
} from 'react-native';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                console.log('responseJson.movies************');
                console.log(responseJson.movies);
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static navigationOptions = {
        title: 'Welcome to Profile',
    };

    render() {
        const { navigate, goBack } = this.props.navigation;
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Profile!
                </Text>
                <Button
                                title="Back to Home"
                                onPress={() =>
                                goBack()
                            }
                                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                    />
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

//AppRegistry.registerComponent('testingRN', () => testingRN);
