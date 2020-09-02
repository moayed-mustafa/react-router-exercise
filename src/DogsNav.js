import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/DogsNav.css'


const DogsNav = ({ dogs}) => {
    let names = []
    dogs.forEach(dog => names.push(dog.name))

    return (
    <div class="dogs-navbar">
        <h3>Dogs routes</h3>
        <nav>
            {names.map(name => (
                <NavLink to={`/dogs/${name}`}>{name}</NavLink>
            ))}
        </nav>
    </div>

    )

}

export default DogsNav