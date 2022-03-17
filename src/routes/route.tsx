import React from 'react'
import {Route as RouteType} from './types'

export const Route = ({route}: {route: RouteType}) => <div>
    <p>{route.id}</p>
    <p>{route.name}</p>
</div>