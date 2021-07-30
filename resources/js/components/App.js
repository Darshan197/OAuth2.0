import React, { useEffect, useState } from 'react'
import Clients from './Clients'

const App = () => {
    const [oAuthClients, setOAuthClients] = useState([])

    const getClients = () => {
        axios.get('/oauth/clients')
        .then((data) => {
            console.log(data);
            setOAuthClients(data.data)
        })
    }

    useEffect(() => {
        getClients()
    }, [])
    return (
        <div>
            <Clients clients={oAuthClients} />
        </div>
    )
}

export default App
