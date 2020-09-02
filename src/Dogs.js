import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Dog from './Dog'
import AllDogs from './AllDogs'


const Dogs = ({dogs}) => {
    return (
        <Switch>
            <Route path="/dogs/:name">
                <Dog dogs={dogs}/>
            </Route>


            <Route path ="/">
                <Redirect to = "/dogs"/>
                <AllDogs dogs={dogs}/>
            </Route>

            <Route render={() => <h2>404</h2>} />
        </Switch>
    )
}

export default Dogs