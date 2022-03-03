import React from 'react'
import ReactDOM from 'react-dom'
import { ReduxWrapper, Router } from 'startup'
import { Settings } from 'settings'
import 'theme.scss'

ReactDOM.render(<React.StrictMode>
  <Settings>
    <ReduxWrapper>
      <Router />
    </ReduxWrapper>
  </Settings>
</React.StrictMode>, document.getElementById('root'))

