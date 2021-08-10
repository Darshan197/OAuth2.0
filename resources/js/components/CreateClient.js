import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import Client from './Client'
import Input from './Input'
import Label from './Label'
import Loading from './Loading'

const CreateClient = () => {
    const [client, setClient] = useState({ name: '', redirect: '' })
    const [clientCreated, setClientCreated] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const createClient = (e) => {
        e.preventDefault()
        setIsLoading(true)
        axios.post('/oauth/clients', client)
            .then((data) => {
                setClient(data.data)
                setClientCreated(true)
                setIsLoading(false)
            })
    }
    return (
        <Card header={<h3 className="text-lg font-medium text-gray-700">
            {'OAuth Clients'}
        </h3>}>
            <form className="py-2" onSubmit={createClient}>
                <div className="space-y-4">
                    <div className="lg:w-2/4 w-full">
                        <Label htmlFor="name">{'Name'}</Label>
                        <Input disabled={clientCreated} value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} id="name" type="text" className="mt-1 block w-full" />
                    </div>
                    <div className="lg:w-2/4 w-full">
                        <Label htmlFor="url">{'Redirect URI'}</Label>
                        <Input disabled={clientCreated} value={client.redirect} onChange={(e) => setClient({ ...client, redirect: e.target.value })} id="url" type="text" className="mt-1 block w-full" />
                    </div>
                    <div className={`flex items-center space-x-2 ${clientCreated ? 'hidden' : ''}`}>
                        <Button disabled={isLoading}>Create</Button>
                        <Button disabled={isLoading}>Cancel</Button>
                        <Loading loading={isLoading} />
                    </div>
                </div>
            </form>
            <hr />
            {clientCreated ? <Client client={client} /> : ''}
        </Card>
    )
}

export default CreateClient
