import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation';
import DeepLinking from './DeepLinking';
import InitStack from '../screens/InitStack';
import AuthMainStack from '../screens/AuthMainStack';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer linking={DeepLinking.linking} ref={Navigation.navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="INIT" component={InitStack} />
            <Stack.Screen name="AUTH_MAIN" component={AuthMainStack} />
            {/* другие стеки */}
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
