import moment from 'moment'
import React from 'react'

const Clients = ({ clients }) => {
    return (
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
                clients.map((client) => (    
                    <tr key={client.id}>
                        <td className="text-sm px-3 py-1"><div>{client.name}</div></td>
                        <td className="text-sm px-3 py-1"><div>{moment(client.created_at).format('ll')}</div></td>
                        <td className="text-sm px-3 py-1"><div>{client.id}</div></td>
                        <td className="text-sm px-3 py-1"><a href="#" className="text-blue-600">view</a></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Clients
