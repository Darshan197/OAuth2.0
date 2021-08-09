import React from 'react'
import Clients from './Clients'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Client from './Client'
import CreateClient from './CreateClient'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/credentials" component={Clients} />
                <Route exact path="/credentials/create" component={CreateClient} />
                <Route exact path="/credentials/:id" component={Client} />
            </Switch>
        </Router>
    )
}

export default App
