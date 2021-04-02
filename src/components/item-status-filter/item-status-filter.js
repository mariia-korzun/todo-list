import React, { Component } from 'react'

class ItemStatusFilter extends Component {

    constructor() {
        super()
        this.buttonsData = [
            {
                label: 'All',
                name: 'all',
                clazz: 'btn-info'
            },
            {
                label: 'Active',
                name: 'active',
                clazz: 'btn-outline-secondary'
            },
            {
                label: 'Done',
                name: 'done',
                clazz: 'btn-outline-secondary'

            }
        ]
        this.setButtonClass = (filter, button) => {
            button.clazz = filter === button.name ? 'btn-info' : 'btn-outline-secondary'
        }
    }



    render() {
        const { onFilter, filter } = this.props

        const buttons = this.buttonsData.map(button => {

            this.setButtonClass(filter, button)

            const { name, label, clazz } = button

            return (
                <button className={`btn ${clazz}`}
                    type="button"
                    onClick={() => { onFilter(name) }}
                    key={name}
                >
                    {label}
                </button>
            )
        })

        return (
            < div className="item-status-filter btn-group" >
                {buttons}
            </div >
        )
    }

}


export default ItemStatusFilter