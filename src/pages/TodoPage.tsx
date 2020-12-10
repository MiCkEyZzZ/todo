import React, {useEffect, useState} from 'react'
import {ITodo} from '../interfaces'

import {TodoForm} from '../components/TodoForm/TodoForm'
import {TodoList} from '../components/TodoList/TodoList'

declare var confirm: (question: string) => boolean

export const TodoPage: React.FC = () => {
    const [lists, setLists] = useState<ITodo[]>([])

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('lists') || '[]') as ITodo[]
        setLists(savedItems)
    }, [])

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])

    const handleAddItem = (title: string) => {
        const newLists: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }

        setLists(prev => [newLists, ...prev])
    }

    const handleToggle = (id: number) => {
        setLists(prev => prev.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }

            return item
        }))
    }

    const handleRemoveItem = (id: number) => {
        const shouldRemove = confirm('You want to delete this?')

        if (shouldRemove) {
            setLists(prev => prev.filter(item => item.id !== id))
        }
    }

    return (
        <React.Fragment>
            <TodoForm
                onAddItem={handleAddItem}
            />
            <TodoList
                lists={lists}
                onToggle={handleToggle}
                onRemoveItem={handleRemoveItem}
            />
        </React.Fragment>
    )
}
