import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import Input from './Input'
import Label from './Label'

const CreateClient = () => {
    const [client, setClient] = useState({ name: '', redirect: '' })
    const history = useHistory()
    const createClient = (e) => {
        e.preventDefault()
        axios.post('/oauth/clients', client)
        .then((data) => {
            history.push('/credentials')
        })
    }
    return (
        <Card header={<h3 className="text-lg font-medium text-gray-700">
            {'OAuth Clients'}
        </h3>}>
            <form onSubmit={createClient}>
                <div className="space-y-4">
                    <div className="w-2/4">
                        <Label htmlFor="name">{'Name'}</Label>
                        <Input value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} id="name" type="text" className="mt-1 block w-full" />
                    </div>
                    <div className="w-2/4">
                        <Label htmlFor="url">{'Redirect URI'}</Label>
                        <Input value={client.redirect} onChange={(e) => setClient({ ...client, redirect: e.target.value })} id="url" type="text" className="mt-1 block w-full" />
                    </div>
                    <div className="space-x-2">
                        <Button>Create</Button>
                        <Button>Cancel</Button>
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default CreateClient
