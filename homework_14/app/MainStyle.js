import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff', // Белый фон
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd', // Светло-серый бордюр
        borderRadius: 10,
        shadowColor: '#000', // Тень
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, // Для Android
    },
    button: {
        backgroundColor: '#007BFF', // Синий цвет кнопки
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        margin: 10,
        shadowColor: '#000', // Тень для кнопки
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 2, // Для Android
    },
    buttonText: {
        color: '#ffffff', // Белый текст
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;
