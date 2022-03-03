import { Dashboard } from 'dashboard'
import {Details} from 'details'
import {Routes} from "routes";

export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: true,
    component: Dashboard,
  },
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
