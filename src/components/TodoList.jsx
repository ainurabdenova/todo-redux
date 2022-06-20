import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, ToggleTodoCompleted }) => {
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
