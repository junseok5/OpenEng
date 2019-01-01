import asyncComponent from 'lib/asyncComponent'

export const Home = asyncComponent(() => import('./Home'))
export const Search = asyncComponent(() => import('./Search'))
export const Videos = asyncComponent(() => import('./Videos'))
export const NotFound = asyncComponent(() => import('./NotFound'))
