import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { routes } from 'startup/routes'
import { Navigation } from 'navigation'

export const Router = () => <BrowserRouter>
  <Navigation />
  <Routes>
    {routes.map(route => <Route path={route.path} key={route.path} element={<route.component />} />)}
  </Routes>
</BrowserRouter>
