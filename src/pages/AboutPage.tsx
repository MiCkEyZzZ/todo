import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const  history = useHistory()

    return (
        <React.Fragment>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at beatae dignissimos exercitationem itaque obcaecati quia rem reprehenderit unde voluptate!</p>
            <button
                className='btn'
                onClick={() => history.push('/')}
            >
                Main page
            </button>
        </React.Fragment>
    )
}
