import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'components/link'
import { Wrapper } from 'navigation/wrapper'
import { Brand } from 'navigation/brand'

export const Navigation = () => <Wrapper>
  <Brand />
  <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
  <Navbar.Collapse id={'basic-navbar-nav'}>
    <Nav className={'me-auto'}>
      <Link to={'/'}>Home</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
    </Nav>
  </Navbar.Collapse>
</Wrapper>
