import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { routes } from 'startup/routes'

export const Router = () => <BrowserRouter>
  <nav>
    <Link to={'/'}>Home</Link>
    <Link to={'/dashboard'}>Dashboard</Link>
  </nav>
  <Routes>
    {routes.map(route => <Route path={route.path} key={route.path} element={<route.component />} />)}
  </Routes>
</BrowserRouter>
