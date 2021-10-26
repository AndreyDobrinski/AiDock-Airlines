import { AppAbout } from './pages/AppAbout/AppAbout'
import { Home } from './pages/AppHome/AppHome'


export const routes = [
    {
        path: '/about',
        component: AppAbout
    },  
    {
        path: '/',
        component: Home
    }
]