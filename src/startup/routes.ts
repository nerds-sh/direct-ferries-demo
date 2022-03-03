import { Details } from 'details'
import { Routes } from 'routes'

export const routes = [
  {
    path: '/details',
    name: 'Details',
    exact: true,
    component: Details,
  },
  {
    path: '/',
    name: 'Routes',
    exact: true,
    component: Routes,
  },
]
