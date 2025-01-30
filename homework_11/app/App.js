import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigation/TabNavigator';

const linking = {
    prefixes: ['exp://'],
    config: {
        screens: {
            Tab1: 'tab1',
            Tab2: 'tab2',
            Tab3: 'tab3',
        },
    },
};

export default function App() {
    return (
        <NavigationContainer linking={linking}>
            <TabNavigator />
        </NavigationContainer>
    );
}

