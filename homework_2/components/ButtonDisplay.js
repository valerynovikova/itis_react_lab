import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ButtonDisplay = () => {
    const [inputValue, setInputValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                secureTextEntry={!showPassword}
            />
            <Button
                style={styles.button}
                title={showPassword ? 'Скрыть' : 'Показать'}
                onPress={togglePasswordVisibility}
            >
                <Text style={styles.buttonText}>{showPassword ? 'Скрыть' : 'Показать'}</Text>
            </Button>
            {showPassword && <Text style={styles.visibleValue}>{inputValue}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 150,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#4285F4',
        padding: 70,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    visibleValue: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default ButtonDisplay;