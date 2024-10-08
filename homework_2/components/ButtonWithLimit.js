import React, { useState } from 'react';
import { Button, Text, StyleSheet } from 'react-native';

const ButtonWithLimit = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    return (
        <Button
            style={[styles.button, clickCount >= 3 && styles.disabledButton]}
            title="Press me"
            onPress={handleButtonClick}
            disabled={clickCount >= 3}
        >
            <Text style={styles.buttonText}>Button Text</Text>
        </Button>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#4285F4',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2, // Для Android
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    counterText: {
        marginTop: 10,
        fontSize: 14,
        color: '#333',
    },
});

export default ButtonWithLimit;