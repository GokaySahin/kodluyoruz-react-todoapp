import React from 'react'
import {} from '../App.css'

function Todoitem({ key ,todos , setTodos , todoText ,todo  }) {
    function deleteHandler(e) {
         setTodos(todos.filter((el) => {
         return el.id !== todo.id } ))
         
    };
    function doneHandler() {
        setTodos(
            todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item , done : !item.done
                };
            };
            return item;
        }))
        
    }

    return (
        <div>
            <div>
                <li className={todo.done ? "done" : ""}> {todo.text} 
                </li>
                <button onClick={deleteHandler}>X</button>
                <button onClick={doneHandler}>Done</button>
            </div>
        </div>
    )
}

export default Todoitem
