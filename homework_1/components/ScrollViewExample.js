import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ScrollViewExample = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.header}>Современная Архитектура: Вдохновение и Инновации</Text>
                <Image
                    source={{ require: './assets/images/favicon.png' }}
                    style={styles.image}
                />
                <Text style={styles.content}>
                    Здесь находится много текста, который можно прокручивать.
                    Добро пожаловать в "Современная Архитектура: Вдохновение и Инновации" — ваше идеальное руководство по удивительным достижениям архитектуры XXI века.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f0f0f0',
    },
    container: {
        padding: 30,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 100,
        marginVertical: 10,
    },
    content: {
        fontSize: 16,
    },
});

export default ScrollViewExample;
