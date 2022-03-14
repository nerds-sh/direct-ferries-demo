import 'src/theme.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Settings } from 'src/settings'
import { Redux, Router } from 'src/startup'

ReactDOM.render(<React.StrictMode>
  <Settings>
    <Redux>
      <Router />
    </Redux>
  </Settings>
</React.StrictMode>, document.getElementById('root'))

