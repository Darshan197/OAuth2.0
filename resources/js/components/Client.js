import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Client = () => {
    const { id } = useParams()
    const [client, setClient] = useState({});
    const getClient = () => {
        axios.get(`/oauth/clients/${id}`)
        .then((data) => {
            setClient(data.data)
        })
    }
    useEffect(() => {
        getClient()
    }, [])
    return (
        <div>
            {client.name}
        </div>
    )
}

export default Client
