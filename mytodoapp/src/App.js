import './App.css';
import Form from './Components/Form';
import Todo from './Components/Todo';
import { useState } from 'react'

function App() {
  const [inputText, setinputText] = useState("");
  const [todos , setTodos] = useState([]);
  return (
    <div className="App">
      <Form inputText={inputText} setinputText= {setinputText} todos={todos} setTodos={setTodos} />
      <Todo todos= {todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
