import React from 'react'
import './styles/AllDogs.css'

const AllDogs = ({ dogs }) => {
    const dogsData = dogs.map(data => (
        <div className="Dog"
            key={data.name} >
            <h1 >{data.name}</h1>
            <img  className="Dog-img"  src={data.src} alt={data.name} />
            <ul className="Dog-list">
                {data.facts.map(fact => (
                    <li>{fact}</li>
                ))}
            </ul>

        </div>

    ))
    return (
        <div className = "dogs">
            {dogsData}

        </div>)
}

export default AllDogs