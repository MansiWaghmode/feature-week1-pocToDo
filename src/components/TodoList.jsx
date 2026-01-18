import TodoItem from "./TodoItem";

export default function TodoList({todos,removeTodo,updateStatus}){
    return(
        <>
            {todos.length === 0 ? <p className="empty">No items available</p> : 
                <ul className="todo-list">
                  {todos.map(todo => (
                    <TodoItem 
                     key={todo.id}
                     todo={todo}
                     removeTodo={removeTodo}
                     updateStatus={updateStatus}
                    />

            ))}
                 </ul>
            }
        </>
    );
}