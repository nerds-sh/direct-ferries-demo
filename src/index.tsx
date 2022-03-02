import React from 'react'
import ReactDOM from 'react-dom'
import { ReduxWrapper, Router } from 'startup'
import 'theme.scss'

ReactDOM.render(<React.StrictMode>
  <ReduxWrapper>
    <Router />
  </ReduxWrapper>
</React.StrictMode>, document.getElementById('root'))

