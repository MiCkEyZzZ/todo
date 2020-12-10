import React from 'react'
import {ITodo} from '../../interfaces'

interface ITodoListProps {
    lists: ITodo[]
    onToggle: (id: number) => void
    onRemoveItem: (id: number) => void
}

export const TodoList: React.FC<ITodoListProps> = ({lists, onToggle, onRemoveItem}) => {
    if (lists.length === 0) {
        return <p className='center'>You don't have a tasks.</p>
    }

    const handleRemove = (evt: React.MouseEvent,  id: number) => {
        evt.preventDefault()
        onRemoveItem(id)
    }

    return (
        <ul>
            {lists.map(item => {
                const classes = ['item']

                if (item.completed) {
                    classes.push('completed')
                }
                return (
                    <li
                        key={item.id}
                        className={classes.join(' ')}
                    >
                        <label>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => onToggle(item.id)}
                            />
                            <span>{item.title}</span>
                            <i
                                className='material-icons red-text'
                                onClick={evt => handleRemove(evt, item.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}
