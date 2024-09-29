import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListExample = () => {
    const items = ['Главная', 'Проекты', 'Архитекторы', 'Технологии', 'Галерея'];

    return (
        <View style={styles.listContainer}>
            {items.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
});

export default ListExample;
