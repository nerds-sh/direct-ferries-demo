import 'src/theme.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Settings } from 'src/settings'
import { ReduxWrapper, Router } from 'src/startup'

ReactDOM.render(<React.StrictMode>
  <Settings>
    <ReduxWrapper>
      <Router />
    </ReduxWrapper>
  </Settings>
</React.StrictMode>, document.getElementById('root'))

