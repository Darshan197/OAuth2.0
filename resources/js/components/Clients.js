import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Card from './Card'

const Header = () => {
    return (
        <>
            <h3 className="text-lg font-medium text-gray-700">
                {'OAuth Clients'}
            </h3>
            <Link to="/credentials/create">
                <Button>Create New Client</Button>
            </Link>
        </>
    )
}

const Clients = () => {
    const [oAuthClients, setOAuthClients] = useState([])

    const getClients = () => {
        axios.get('/oauth/clients')
        .then((data) => {
            setOAuthClients(data.data)
        })
    }

    const deleteClient = (e, clientId) => {
        e.preventDefault()
        axios.delete(`/oauth/clients/${clientId}`)
        .then(() => {
            getClients()
        })
    }

    useEffect(() => {
        getClients()
    }, [])
    return (
        <Card header={<Header />}>
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left text-xs px-3 py-1">Name</th>
                        <th className="text-left text-xs px-3 py-1">Creation date</th>
                        <th className="text-left text-xs px-3 py-1">Client ID</th>
                        <th className="text-left text-xs px-3 py-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        oAuthClients.map((client) => (
                            <tr key={client.id}>
                                <td className="text-sm px-3 py-1">{client.name}</td>
                                <td className="text-sm px-3 py-1"><div>{moment(client.created_at).format('ll')}</div></td>
                                <td className="text-sm px-3 py-1"><div>{client.id}</div></td>
                                <td className="text-sm px-3 py-1"><a href="#" className="text-blue-600" onClick={(e) => deleteClient(e, client.id)}>Delete</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Card>
    )
}

export default Clients
