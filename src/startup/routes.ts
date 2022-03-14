import { Routes } from 'src/routes'
import { Details } from 'src/details'

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
