import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type WrapperProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const Wrapper = ({ children }: WrapperProps) => <Navbar bg={'light'} expand={'lg'}>
  <Container>
    {children}
  </Container>
</Navbar>
