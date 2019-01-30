import React, { Component } from 'react'

let counter = 2

class Task extends Component {

  render(){
    return (
      <li style={{ textDecoration: this.props.completed ? 'line-through' : 'none'}}>
        <div><input onChange={() => this.props.toggleTask(this.props.id)} type='checkbox' /> {this.props.content}</div>
        <small>{this.props.description}</small>
      </li>
    )
  }

}


export class List extends Component {

  state =  {
    tasks: [ {  id: 1, content: 'Meet with Vidhi', completed: false } ]
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task ] 
    })
  }

  toggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map( task => {
        if(task.id == id){
          return { ...task, completed: !task.completed}
        } else {
          return task
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Tasks:</h1>
        <ul>
          {this.state.tasks.map( task => (
            <Task {...task} toggleTask={this.toggleTask} /> 
            // Same thing: <Task name={task.name} id={task.id} completed={task.completed} />
          ))}
        </ul>
        <TaskForm onSubmit={this.addTask} />
      </div>
    );

  }
}

// Controlled: 
class TaskForm extends React.Component {
   
  state= {
    id: 2,
    completed: false,
    content: '',
    description: ''
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <form>
        <label>New Task:</label>
        <input name="content" type="text" value={this.state.content} onChange={this.handleInputChange}/>
        <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange}/>
        <button onClick={ e => {
          e.preventDefault()
          this.props.onSubmit(this.state)
          this.setState({ id: ++this.state.id })
        }} >Add+</button>
      </form>
    )
  }

}

// Uncontrolled:
// export class List extends Component {

//   state =  {
//     tasks: [ {  id: 1, content: 'Meet with Vidhi', completed: false } ]
//   }

//   toggleTask = (id) => {
//     this.setState({
//       tasks: this.state.tasks.map( task => {
//         if(task.id == id){
//           return { ...task, completed: !task.completed}
//         } else {
//           return task
//         }
//       })
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Tasks:</h1>
//         <ul>
//           {this.state.tasks.map( task => (
//             <Task {...task} toggleTask={this.toggleTask} /> 
//             // Same thing: <Task name={task.name} id={task.id} completed={task.completed} />
//           ))}
//         </ul>
//         <form onSubmit={e => {
//           e.preventDefault()
//           this.setState({
//             tasks: [ ...this.state.tasks, { id: counter++, content: e.target.taskcontent.value, completed: false} ] 
//           })
//         }}>
//           <label>New Task:</label>
//           <input name="taskcontent" type="text"/>
//           <button onClick={ (e) => {
//             // e.preventDefault()
//             //this.state.tasks.push({ content: e.target.value, completed: false})
//           }} >Add+</button>
//         </form>
//       </div>
//     );

//   }
// }