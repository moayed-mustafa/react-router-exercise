import React from 'react'

const AllDogs = ({dogs}) => {
    // loop through all of the props and then render them in boxes I guess
    return (
        dogs.map(data => (
            <div key={data.name} >
                <h1 >{data.name}</h1>
                <img src={data.src} alt={data.name} />
                <ul>
                    {data.facts.map(fact => (
                        <li>{fact}</li>
                    ))}
                </ul>

            </div>
        )
        ))
}

export default AllDogs