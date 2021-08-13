import React from 'react'
import Todoitem from './Todoitem'
import {} from '../App.css'

function Todo({ todos , setTodos  }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => {
                        return <Todoitem key={todo.id} todos={todos} setTodos = {setTodos} todoText = {todo.todoText} todo={todo}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todo
