import React from 'react'
import { routes } from 'src/startup/routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => <BrowserRouter>
  <Routes>
    {routes.map(route => <Route path={route.path} key={route.path} element={<route.component />} />)}
  </Routes>
</BrowserRouter>
