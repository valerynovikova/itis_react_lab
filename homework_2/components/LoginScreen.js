import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (!username || !password) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        if (password.length < 6) {
            setError('Пароль должен быть не менее 6 символов');
            return;
        }

        if (username === 'user' && password === 'password') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Неверный логин или пароль');
        }
    };

    return (
        <View style={styles.container}>
            {isLoggedIn ? (
                <Text style={styles.welcome}>Добро пожаловать!</Text>
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        placeholder="Логин"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                        placeholder="Пароль"
                    />
                    <Button
                        style={styles.button}
                        title="Войти"
                        onPress={handleLogin}
                        disabled={!username || !password}
                    />
                    {error && <Text style={styles.error}>{error}</Text>}
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',

        padding: 15,
        marginBottom: 10,
        width: '70%',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#4285F4',
        padding: 15,
        borderRadius: 10,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    error: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LoginScreen;
