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
        padding: 10,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
    },
    inputValue: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default PasswordInput;