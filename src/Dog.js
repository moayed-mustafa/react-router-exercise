import React from 'react'
import { useParams, Route, Redirect } from 'react-router-dom'

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
                            <div key={data.name} >
                                <h1 >{data.name}</h1>
                                <img src={data.src} alt={data.name} />
                                <ul>
                                    {data.facts.map(fact => (
                                        <li>{fact}</li>
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
