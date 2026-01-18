function TodoItem({ todo, updateStatus, removeTodo }) {

 return (

 <li className="todo-item">

 <div>

 <span className="todo-text">{todo.text}</span>

 <span className={`status ${todo.status}`}>

 {todo.status}

</span>

 </div>



 <div className="actions">

 {todo.status === "incomplete" && (

 <button onClick={() => updateStatus(todo.id, "ongoing")}>

 Start

 </button>

 )}



 {todo.status === "ongoing" && (

 <button onClick={() => updateStatus(todo.id, "completed")}>

 Complete

 </button>

 )}



<button className="delete" onClick={() => removeTodo(todo.id)}>

❌

 </button>

 </div>

 </li>

);

}



export default TodoItem;
// export default function TodoItem({todo,removeTodo,updateStatus}){
//     return (
//         <li style={{marginBottom: "10px"}}>
//             <strong>{todo.text}</strong>

//             <span style={{marginLeft: "10px"}}>
//                 Status:
//                 {todo.status  === "incomplete" && "Incomplete"}
//                 {todo.status === "ongoing" && "Ongoing"}
//                 {todo.status === "completed" && "Completed"}
//             </span>

//         <div style={{marginTop: "5px"}}>
//             {todo.status === "incomplete" && (
//                 <button onClick={() => updateStatus(todo.id, "ongoing")}>
//                     Start
//                 </button>
//             )}

//             {todo.status === "ongoing" && (
//                 <button onClick={() => updateStatus(todo.id,"completed")}>
//                     Completed
//                 </button>
//             )}

//              <button style={{marginLeft: "8px"}}
//              onClick={() => removeTodo(todo.id)}>
//                 Remove
//              </button>

//         </div>
//         </li>
//     );
// }