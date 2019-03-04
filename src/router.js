import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/contact.vue'
import News from './views/news.vue'
import People from './views/people.vue'
import Positions from './views/positions.vue'
import Publications from './views/publications.vue'


Vue.use(Router);

export default new Router({

    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/news',
            name: 'News',
            component: News
        }, {
            path: '/people',
            name: 'People',
            component: People
        },
        {
            path: '/positions',
            name: 'Positions',
            component: Positions
        }, {
            path: '/publications',
            name: 'Publications',
            component: Publications
        },
        //
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
