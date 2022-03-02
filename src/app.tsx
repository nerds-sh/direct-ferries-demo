import React from 'react'
import logo from 'assets/logo.svg'
import 'app.css'
import { Text } from 'text'
import { Link } from 'link'

export const App = () => <div className={'app'}>
  <header className={'app-header'}>
    <img src={logo} className={'app-logo'} alt={'logo'} />
    <Text />
    <Link />
  </header>
</div>

