import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const PasswordInput = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.inputValue}>{inputValue}</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                secureTextEntry
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
    },
    input: {
        borderWidth: 2,
        borderColor: '#4A90E2',
        padding: 15,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    inputValue: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
        fontWeight: 'bold',
    },
    infoText: {
        marginTop: 10,
        fontSize: 14,
        color: '#4A90E2',
    },
});

export default PasswordInput;