import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux'

const TodoList = ({ removeTodo, ToggleTodoCompleted }) => {

    const todos = useSelector(state => state.todos.todos)

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    ToggleTodoCompleted={ToggleTodoCompleted}
                    {...todo} />))}

        </ul>
    );
}

export default TodoList;
