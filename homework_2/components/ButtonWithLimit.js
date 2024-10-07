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
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: 'gray',
    },
});

export default ButtonWithLimit;