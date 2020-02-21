import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader.js';
import TodoListTasks from "./TodoListTasks.js";
import TodoListFooter from "./TodoListFooter.js";

class App extends React.Component {

    constructor(props) {
        super(props); //воздай то что есть у констурктора
        this.newTaskTitleRef = React.createRef();
    }

    state = { //это объект, у него свойство tasks и filterValue
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "medium"},
            {title: "ReactJS", isDone: false, priority: "high"},
            {title: "Patterns", isDone: true, priority: "low"},
        ],
        filterValue: "All",
    };

    onAddTaskClick = () => {
        if (this.newTaskTitleRef.current.value === '') {
        } else {
        let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: false,
            priority: "high",
        };
        //let newTasks = this.state.tasks.push(newTask);
        let newTasks = [...this.state.tasks, newTask]; // spread оператор
        this.newTaskTitleRef.current.value = "";
        this.setState({
            tasks: newTasks
        });
        }
    };

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                     <TodoListHeader onAddTaskClick={this.onAddTaskClick} newTaskTitleRef={this.newTaskTitleRef}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    };
}

export default App;

