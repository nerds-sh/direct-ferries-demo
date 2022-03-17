import React from 'react'

export const User = ({user}: {user: any}) => <div>
    <p>{user.id}</p>
    <p>{user.name}</p>
</div>