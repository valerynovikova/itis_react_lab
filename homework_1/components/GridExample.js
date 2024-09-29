import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GridExample = () => {
    return (
        <View style={styles.gridContainer}>
            <View style={styles.item}>
                <Image
                    source={{ require: './assets/images/image1.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.itemText}>Изображение 1. Инновационные технологии в строительстве</Text>
            </View>
            <View style={styles.item}>
                <Image
                    source={{ require: './assets/images/image2.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.itemText}>Изображение 2. Устойчивый дизайн: будущее архитектуры</Text>
            </View>
            <View style={styles.item}>
                <Image
                    source={{ require: './assets/images/image3.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.itemText}>Изображение 3. Культовые здания современности</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },
    item: {
        width: '30%',
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 70,
    },
    itemText: {
        textAlign: 'center',
    },
});

export default GridExample;
