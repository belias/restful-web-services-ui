import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos: 
            [
                // {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                // {id: 2, description: 'Start Dev', done: false, targetDate: new Date()},
                // {id: 3, description: 'Become a Lead', done: false, targetDate: new Date()}
            ]
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                // console.log(response)
                this.setState({todos: response.data})
            }
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('soundComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentWillUnmount() {
        console.log('componentDidUnmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            <td >{todo.description}</td>
                                            <td >{todo.targetDate.toString()}</td>
                                            <td >{todo.done.toString()}</td>
                                        </tr>
                                )
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent