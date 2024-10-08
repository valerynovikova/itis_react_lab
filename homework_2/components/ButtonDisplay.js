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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    button: {
        backgroundColor: '#4285F4',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    visibleValue: {
        fontSize: 16,
        marginTop: 10,
        color: '#333',
    },
});

export default ButtonDisplay;