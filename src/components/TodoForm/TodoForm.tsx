import React, {useState} from 'react'

interface ITodoProps {
    onAddItem(title: string): void
}

export const TodoForm: React.FC<ITodoProps> = (props) => {
    const [title, setTitle] = useState<string>('')

    const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(evt.target.value)
    }

    const handlePress = (evt: React.KeyboardEvent) => {
        if (evt.key === 'Enter') {
            props.onAddItem(title)
            setTitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                type="text"
                value={title}
                id='title'
                placeholder='Enter your Task'
                onKeyPress={handlePress}
                onChange={handleChangeInput}
            />
            <label htmlFor="title" className='active'>Enter your Task</label>
        </div>
    )
}
