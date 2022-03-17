import { Details } from 'src/details'
import { Users } from 'src/users'

export const routes = [
  {
    path: '/details',
    name: 'Details',
    exact: true,
    component: Details,
  },
  {
    path: '/',
    name: 'Users',
    exact: true,
    component: Users,
  },
]
