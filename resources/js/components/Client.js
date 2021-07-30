import moment from 'moment'
import React from 'react'

const Client = ({ client }) => {
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Creation date</th>
                    <th>Client ID</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div>{client.name}</div></td>
                    <td><div>{moment(client.created_at).format('ll')}</div></td>
                    <td><div>{client.id}</div></td>
                    <td><a href="#" className="text-blue-600">view</a></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Client
