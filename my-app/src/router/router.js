import { createRouter, createWebHistory } from 'vue-router'
import FooPage from '@/pages/FooPage'
import BarPage from '@/pages/BarPage'
import HomePage from '@/pages/HomePage'
import ApartmentPage from '@/pages/ApartmentPage'
import ErrorPage from '@/pages/ErrorPage'



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
        path: '/apartments/:id',
        component: ApartmentPage,
        name: 'apartment'
    },
    {
        path: "/:pathMatch(.*)*",
        component: ErrorPage,
        name: 'error-page'
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory()
})

export default router; 
