import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { todoStore } from '../stores/TodoStore';

const TodoList = observer(() => {
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        if (todo) {
            todoStore.addTodo(todo);
            setTodo('');
        }
    };

    return (
        <View>
            <TextInput
                value={todo}
                onChangeText={setTodo}
                placeholder="Введите задание"
            />
            <Button title="Добавить" onPress={handleAddTodo} />
            <Text>Итог: {todoStore.todoCount}</Text>
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
                        <Button title="Удалить" onPress={() => todoStore.removeTodo(index)} />
                    </View>
                )}
            />
        </View>
    );
});

export default TodoList;