import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ScrollViewExample from './components/ScrollViewExample'; // Импорт компонента ScrollView
import GridExample from './components/GridExample';           // Импорт компонента Grid
import ListExample from './components/ListExample';           // Импорт компонента List

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollViewExample />
            <GridExample />
            <ListExample />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
});

export default App;
