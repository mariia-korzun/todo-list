import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {


    render() {
        const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            done, important } = this.props

        let className = 'todo-list-item d-flex justify-content-between'


        if (done) {
            className += ' done'
        }

        if (important) {
            className += ' important'
        }


        return (
            <div className={className}>
                <span className="align-self-center" onClick={onToggleDone}>
                    {label}
                </span>
                <div>
                    <button className="control-button btn btn-outline-danger m-1"
                        type="button"
                        onClick={onDeleted}
                    >
                        <i className="fa fa-trash" />
                    </button>

                    <button className="control-button btn btn-outline-success m-1"
                        type="button"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>
        )
    }
}
























//     render() {
//         console.log(this.props)

//         const { label, important = false } = this.props

//         const style = {
//             color: important ? 'tomato' : 'black',
//             fontWeight: important ? 'bold' : 'normal'
//         }

//         return (
//             <div className="todo-list-item d-flex justify-content-between">
//                 <span style={style} className="align-self-center" onClick={this.onLabelClick}>
//                     {label}
//                 </span>
//                 <div>
//                     <button className="control-button btn btn-outline-danger m-1"
//                         type="button">
//                         <i className="fa fa-trash" />
//                     </button>

//                     <button className="control-button btn btn-outline-success m-1"
//                         type="button">
//                         <i className="fa fa-exclamation"></i>
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }


