import { useState } from "react";

export default function TodoInput({addTodo}){
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if(input.trim() === "") return;
        addTodo(input);
        setInput("");
    };

    return(
        <div className="input-row">
            <input 
               className="todo-input"
               type= "text"
               placeholder="Enter todo"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
            <button className="add-btn" onClick={handleAdd}>Add</button>
        </div>
    );   
}