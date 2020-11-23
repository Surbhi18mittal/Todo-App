import React from "react";
class Addform extends React.Component{
    state={
        content:'',
      
    }
    handleChange=(e)=>{
     this.setState({
         content:e.target.value
     })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.content)
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Add new Todo</label>
                   <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                   <button>Submit</button>
               </form>
           </div>
        )
    }
}
export default Addform;