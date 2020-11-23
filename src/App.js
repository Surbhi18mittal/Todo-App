import React from 'react';
import Todo from "./Todo.js";
import Addform from "./Addform.js"
 class App extends React.Component{
   state={
     todo:[
       {id:1,content:"start excersing"},
       {id:2,content:"practice react"}
     ]
   }
   deleteTodo=(id)=>{
     console.log(id);
     let todo=this.state.todo.filter(todo=>{
      return todo.id!==id
     })
     this.setState({
       todo
     })
   }
   addTodo=(todos)=>{
     todos.id=Math.random()
     let todo=[...this.state.todo,todos]
     this.setState({
       todo
     })
   }
   render(){
     return(
       <div className="todo-app container">
       <h1 className="center blue-text">Todo's</h1>
       <Todo todo={this.state.todo} deleteTodo={this.deleteTodo}/>
       <Addform addTodo={this.addTodo}/>
       </div>
     )
   }
 }

export default App;
