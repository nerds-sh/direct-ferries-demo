import React from 'react'
import logo from 'assets/logo.svg'
import 'home/app.css'
import { Text } from 'home/text'
import { Link } from 'home/link'

export const App = () => <div className={'app'}>
  <header className={'app-header'}>
    <img src={logo} className={'app-logo'} alt={'logo'} />
    <Text />
    <Link />
  </header>
</div>

