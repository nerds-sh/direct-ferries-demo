import React from 'react'
import logo from 'assets/logo.svg'
import 'home/home.css'
import { Text } from 'home/text'
import { Link } from 'home/link'

export const Home = () => <div className={'home'}>
  <header className={'home-header'}>
    <img src={logo} className={'home-logo'} alt={'logo'} />
    <Text />
    <Link />
  </header>
</div>

