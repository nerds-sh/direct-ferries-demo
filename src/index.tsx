import React from 'react'
import ReactDOM from 'react-dom'
import { Redux, Router } from 'src/startup'

ReactDOM.render(<React.StrictMode>
  <Redux>
    <Router />
  </Redux>
</React.StrictMode>, document.getElementById('root'))

