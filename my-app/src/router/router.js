import { createRouter, createWebHistory } from 'vue-router'
import FooPage from '@/pages/FooPage'
import BarPage from '@/pages/BarPage'
import HomePage from '@/pages/HomePage'
import ApartmentPage from '@/pages/ApartmentPage'


const routes = [
    {
        path: '/foo',
        component: FooPage
    },
    {
        path: '/bar',
        component: BarPage
    },
    {
        path: '/',
        component: HomePage,
        name: 'homepage'
    },
    {
        path: '/apartment',
        component: ApartmentPage,
        name: 'apartment'
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory()
})

export default router; 
