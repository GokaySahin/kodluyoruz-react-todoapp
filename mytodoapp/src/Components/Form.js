import React from 'react'
import {} from '../App.css'

function Form({  inputText ,setinputText , todos , setTodos  }) {
    function textHandler(e) {
        setinputText(e.target.value)
    }
    function submitHandler (e) {
        e.preventDefault();
        setTodos([...todos ,
        { text: inputText, done : false , id: Math.random()*1000}])
        setinputText("");
    }

    return (
        <div>
            <form>
                <input type="text" value={inputText} onChange={textHandler} ></input>
                <button type="submit" onClick = {submitHandler}>Add Task</button>
            </form>
        </div>
    )
}

export default Form
