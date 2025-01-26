import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import DeepLinking from '../navigation/DeepLinking';

const Index = () => {
    useEffect(() => {
        Linking.getInitialURL().then(async (deepLinkInitialURL) => {
            if (deepLinkInitialURL) {
                await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
            }
        });
    }, []);

    return <AppNavigator />;
};

export default Index;
