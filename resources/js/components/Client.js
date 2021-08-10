import React from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'

const Client = ({ client }) => {
    return (
        <div className="space-y-4 py-2">
            <ul className="list-disc list-inside text-sm text-red-600 mt-2">
                <li>Please copy/save below credentials</li>
            </ul>
            <div className="lg:w-2/4 w-full">
                <Label htmlFor="clientId">{'Client ID'}</Label>
                <Input value={client.id} id="clientId" type="text" disabled={true} className="mt-1 block w-full" />
            </div>
            <div className="lg:w-2/4 w-full">
                <Label htmlFor="clientSecret">{'Client Secret'}</Label>
                <Input value={client.secret} id="clientSecret" type="text" disabled={true} className="mt-1 block w-full" />
            </div>
            <div>
                <a href="/credentials" className="text-blue-500">
                    <Button>Go to Credentials</Button>
                </a>
            </div>
        </div>
    )
}

export default Client
