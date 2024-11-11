import { makeAutoObservable } from "mobx"


class Todo {
    text = '';
    completed = false;

    constructor(text) {
        this.text = text;
        makeAutoObservable(this);
    }

    toggle() {
        this.completed = !this.completed;
    }
}

class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todoText) {
        const newTodo = new Todo(todoText);
        this.todos.push(newTodo);
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    get todoCount() {
        return this.todos.length;
    }
}

export const todoStore = new TodoStore();