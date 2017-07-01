import {
    StackNavigator,
} from 'react-navigation';

import Home from './components/home.js'

const App = StackNavigator({
    Home: { screen: Home }
    //Profile: { screen: testingRN },
});