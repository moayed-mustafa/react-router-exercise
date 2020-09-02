import React from 'react'
import { useParams, Route, Redirect } from 'react-router-dom'
import './styles/Dog.css'

const Dog = ({dogs}) => {
    const { name } = useParams()
    let found = dogs.find(dog => (dog.name === name))

    return (
        <>
            {
                found === undefined ? (
                    <Route>
                        <Redirect to = "/dogs"/>
                    </Route>


                ) : (
                        dogs.filter(dog => dog.name === name).map(data => (
                            <div className="Dog" key={data.name} >
                                <h2 >{`Dog Profile: ${data.name}`}</h2>
                                <img className="Dog-img" src={data.src} alt={data.name} />
                                <ul className="Dog-list">
                                    {data.facts.map(fact => (
                                        <li> <b>{fact}</b></li>
                                    ))}
                                </ul>

                            </div>

                ))
                )
              }

        {/* <h1>{name}</h1>
        <h1>{name}</h1> */}
        </>
    )
}

export default Dog
