import React, { Component } from 'react'

import './item-add-form.css'

export default class ItemAddForm extends Component {
    constructor({ onItemAdded }) {
        super()

        this.state = {
            label: ''
        }
        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            })
        }

        this.onSubmit = (event) => {
            event.preventDefault()
            onItemAdded(this.state.label)
            this.setState({ label: '' })
        }

    }

    render() {

        return (
            <form className="item-add-form"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Enter new Todo"
                    value={this.state.label}
                />
                <button type="submit"
                    className=" btn btn-primary btn-lg w-100"
                >
                    Add Todo
            </button>
            </form>
        )
    }

}

