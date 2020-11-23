import React from "react";
const Todo=({todo,deleteTodo})=>{
    const todoList=
    todo.length?(
        todo.map(todo=>{
            return (
                <div className="collection-item" key={todo.id}>
                <span >{todo.content}</span>
                <button style={{float:"right"}}onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
                </div>
            )
        })
    ):(<p className="center">You have no Todo's Left,Yayy</p>)
  return(
      <div className="todo collection">
      {todoList}
      </div>
  )  
}
export default Todo;