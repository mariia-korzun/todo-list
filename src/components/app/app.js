import React, { Component } from 'react';

import AppHeader from '../app-header/'
import SearchPanel from '../search-panel/'
import TodoList from '../todo-list/'
import ItemStatusFilter from '../item-status-filter/'
import ItemAddForm from '../item-add-form/'

import './app.css'

export default class App extends Component {

    constructor() {
        super()

        this.maxIndex = 0

        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make awesome App'),
                this.createTodoItem('Have a lunch'),
                this.createTodoItem('Have a dinner'),
                this.createTodoItem('Hurry up')
            ],

            searchValue: "",
            filter: 'all'

        }

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const index = todoData.findIndex(item => item.id === id)
                //нельзя изменять существующий state
                const before = todoData.slice(0, index)
                const after = todoData.slice(index + 1)
                return { todoData: [...before, ...after] }
            })
        }

        this.addItem = (text) => {
            this.setState(({ todoData }) => {
                const newItem = this.createTodoItem(text)
                const newArray = [...todoData, newItem]
                return { todoData: newArray }
            })
        }

        this.searchTodo = (searchValue, arr) => {
            const newArray = arr.filter(
                item => item.label.toLowerCase().startsWith(searchValue.toLowerCase()))
            return newArray

        }

        this.onSearch = (event) => {
            this.setState({ searchValue: event.target.value })
        }

        this.onToggleDone = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                }
            })
        }

        this.onToggleImportant = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            })
        }

        this.onFilter = (filter) => {
            this.setState({ filter: filter })
        }

        this.filterTodo = (arr, filter) => {

            switch (filter) {
                case 'all': return arr
                case 'active': return arr.filter(item => !item.done)
                case 'done': return arr.filter(item => item.done)
                    default: return arr
            }

        }
    }

    toggleProperty(arr, id, property) {
        const index = arr.findIndex(item => item.id === id)
        const oldItem = arr[index]
        const newItem = { ...oldItem, [property]: !oldItem[property] }
        const newArray = [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)]
        return newArray
    }

    createTodoItem(label) {
        return {
            label: label,
            id: this.maxIndex++,
            important: false,
            done: false
        }
    }


    render() {
        const { todoData, searchValue, filter } = this.state

        const visibleItems = this.filterTodo(this.searchTodo(searchValue, todoData), filter)

        const doneCount = visibleItems.filter(item => item.done).length

        const todoCount = visibleItems.length - doneCount


        return (
            <div className="app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch} />
                    <ItemStatusFilter onFilter={this.onFilter} filter={filter}/>
                </div>
                <TodoList todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        )
    }


}


