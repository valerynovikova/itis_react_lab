import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, Modal } from 'react-native';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/TodoStore';

const TodoList = observer(() => {
    const [todo, setTodo] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddTodo = () => {
        if (todo) {
            todoStore.addTodo(todo);
            setTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        Alert.alert(
            "Подтверждение",
            "Точно удалить?",
            [
                {
                    text: "Нет",
                    style: "cancel"
                },
                {
                    text: "Да",
                    onPress: () => todoStore.removeTodo(index)
                }
            ]
        );
    };

    const completedTodos = todoStore.todos.filter(todo => todo.completed);

    return (
        <View>
            <TextInput
                value={todo}
                onChangeText={setTodo}
                placeholder="Введите задание"
            />
            <Button title="Добавить" onPress={handleAddTodo} />
            <Text>Итог: {todoStore.todoCount}</Text>
            <Button title="Посмотреть завершенные задачи" onPress={() => setModalVisible(true)} />

            <FlatList
                data={todoStore.todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                        <TouchableOpacity onPress={() => item.toggle()}>
                            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <Button title="Удалить" onPress={() => handleDeleteTodo(index)} />
                    </View>
                )}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: 300, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                        <Text>Завершенные задачи:</Text>
                        <FlatList
                            data={completedTodos}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Text style={{ textDecorationLine: 'line-through' }}>{item.text}</Text>
                            )}
                        />
                        <Button title="Закрыть" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
});

export default TodoList;
