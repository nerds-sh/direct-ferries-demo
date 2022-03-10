import React from 'react'
import ReactDOM from 'react-dom'
import { Wrapper } from './wrapper'
import { App } from './app'

ReactDOM.render(
    <React.StrictMode>
        <Wrapper>
            <App/>
        </Wrapper>
    </React.StrictMode>,
    document.getElementById('root')
)
