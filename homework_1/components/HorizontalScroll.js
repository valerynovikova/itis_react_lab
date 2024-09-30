import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const HorizontalScroll = () => {
    const items = [
        {
            image: require('../assets/images/image1.jpg'),
            title: 'Проект 1',
            description: 'Описание проекта 1',
        },
    ];

    return (
        <ScrollView horizontal style={styles.scrollView}>
            {items.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#0d336a',
    },
    item: {
        padding: 15,
        marginRight: 10,
        backgroundColor: '#0e0a0a',
        borderRadius: 5,
        shadowColor: '#150d0d',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    image: {
        width: 10,
        height: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
});

export default HorizontalScroll;