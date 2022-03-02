import { Home } from 'home'
import { Dashboard } from 'dashboard'

export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
]
