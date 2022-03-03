import { Dashboard } from 'dashboard'
import { Landing } from 'details'

export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/',
    name: 'Landing',
    exact: true,
    component: Landing,
  },
]
