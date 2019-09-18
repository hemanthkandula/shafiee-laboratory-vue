import Vue from 'vue'
import Router from 'vue-router'








Vue.use(Router);

export default new Router({

    mode: 'history',

    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {

            from;
            savedPosition;
            return {selector: to.hash}
        }
        else if (savedPosition) {
            return savedPosition
        }
        else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        //
        //
        // },
        { path: '/', component: () => import('./views/Home.vue') },

            // {
        //     path: '/research',
        //     name: 'research',
        //     component: Research
        // },
        // {
        //     path: '/project-description',
        //     name: 'project',
        //     component: ProjectDescription
        // },
        // {
        //     path: '/contact',
        //     name: 'contact',
        //     component: Contact
        // },
        // {
        //     path: '/about',
        //     name: 'About',
        //     component: About
        // },
        // {
        //     path: '/news',
        //     name: 'News',
        //     component: News
        // },

        {
            path: '/people',
            name: 'People',
            component: () => import('./views/people.vue')
        },
        {
            path: '/positions',
            name: 'Positions',
            component: () => import('./views/positions.vue')
        },

        {
            path: '/publications',
            name: 'Publications',
            component: () => import('./views/publications.vue')
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: () => import('./views/Gallery.vue')
        },
        //
        { path: '/projects/:name',
            component: () => import('./components/ProjectDescription.vue')


        },

        { path: '/404'
     ,component: () => import('./views/NotFound.vue')   },

        { path: '*', redirect: '/404' },
        { path: '/contact', redirect: '/#contact' },
        { path: '/contact-us', redirect: '/#contact' },



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
