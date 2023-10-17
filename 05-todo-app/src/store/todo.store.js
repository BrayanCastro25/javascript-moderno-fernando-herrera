
import { Todo } from '../todos/models/todo.model'

const Filters = {
    All: "All",
    Completed: "Completed",
    Pending: "Pending",
};

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
};


const initStore = () => {

    console.log(state)
    console.log('InitStore')

}


const loadStore = () => {

    throw new Error("Not implemented");

}


const addTodo = ( description ) => {

    throw new Error("Not implemented");

}


const toggleTodo = ( todoId ) => {

    throw new Error("Not implemented");

}


const deleteTodo = ( todoId ) => {

    throw new Error("Not implemented");

}


const deleteCompleted = () => {

    throw new Error("Not implemented");

}


const selectFilter = ( newFilter = Filters.All ) => {
    
    throw new Error("Not implemented");

}


const getCurrentFilter = () => {

    throw new Error("Not implemented");

}


export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    selectFilter,
    getCurrentFilter
}