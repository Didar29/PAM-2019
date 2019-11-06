import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SingleTask from "./SingleTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTasks: ""
    };
  }

  onInputChange = e => {
    this.setState({ currentTasks: e.target.value });
  }; //onChange triggers this onInputChange function and passes in an event
  //the event tells what the input was change to

  onClick = () => {
    // this function appends the old list with the new currentTask appended to it
    let tasksCopy = this.state.tasks.slice(); // This will make an exact copy of the original tasks list
    tasksCopy.push(this.state.currentTasks); //This will add a new task to the end of the task list

    this.setState({ tasks: tasksCopy, currentTasks: "" }); //Stating the state properly, where tasks becomes the new tasksCopy and clears out the currentTasks by making an empty string
  };

  deleteTask = i => {
    //this function will take an index of a task to delete
    let tasksCopy = this.state.tasks.slice(); //this again makes a copy of the
    tasksCopy.splice(i, 1); //deletes the index

    this.setState({ tasks: tasksCopy }); //the state changes to the new list of tasks
  };

  render() {
    //javascript mapping
    let bulletedTasks = this.state.tasks.map((e, i) => {
      //Takes an element 'e' and an index 'i' and returns
      return (
        <SingleTask tasks={e} delete={() => this.deleteTask(i)} /> // this triggers the function calling the function deleteTask deleting the current index {i}
      );
    });

    return (
      <header className="App-header">
        <div className="Formatting-textdiv">
          <input placeholder="Enter a Task" value={this.state.currentTasks} onChange={this.onInputChange}/>
          <button onClick={this.onClick}>Add Task</button>
          <br />
          {this.state.tasks.length === 0 ? ("No tasks for you to do!") : (<ul>{bulletedTasks}</ul>)}
        </div>
      </header>
    ); //onChange method changes the value of the currentTask to whatever the input is by the user
  }
}

export default App;
