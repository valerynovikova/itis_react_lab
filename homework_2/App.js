import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ButtonWithLimit from './components/ButtonWithLimit';
import PasswordInput from './components/PasswordInput';
import ButtonDisplay from './components/ButtonDisplay';
import LoginScreen from './components/LoginScreen';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ButtonWithLimit />
            <ButtonDisplay />
            <LoginScreen />
            <PasswordInput />
            <View style={styles.boxContainer}>
                <Box width={100} height={100} color="red" />
                <Box width={100} height={100} color="green" />
                <Box width={100} height={100} color="blue" />
            </View>
        </SafeAreaView>
    );
};

export const Box = (props) => (
    <View style={{ width: props.width, height: props.height, backgroundColor: props.color }} />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
});

export default App;