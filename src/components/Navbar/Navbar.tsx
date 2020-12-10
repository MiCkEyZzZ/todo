import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const links = [
    {title: 'Task', to: '/', id: '1'},
    {title: 'About', to: '/about', id: '2'}
]

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper  light-blue darken-4 px1">
                <Link to="/" className="brand-logo">Todo</Link>
                <ul className="right hide-on-med-and-down">
                    {links.map(item => {
                        return (
                            <li
                                key={item.id}
                            >
                                <NavLink
                                    to={item.to}
                                    activeClassName='active-link'
                                    exact
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
