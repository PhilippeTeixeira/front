import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

import HomePage from './views/HomePage.vue'
import GamesPage from './views/GamesPage.vue'
import IncomingPage from './views/IncomingPage.vue'
import SigninPage from './views/SigninPage.vue'
import SignupPage from './views/SignupPage.vue'

library.add(faHome,faUser, faUserPlus, faSignInAlt, faSignOutAlt)

const router = VueRouter.createRouter({
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/games',
            name: 'GamesPage',
            component: GamesPage
        },
        {
            path: '/incoming',
            name: 'IncomingPage',
            component: IncomingPage
        },
        {
            path: '/signin',
            name: 'SigninPage',
            component: SigninPage
        },
        {
            path: '/signup',
            name: 'SignupPage',
            component: SignupPage
        },
        {
            path: '/account',
            name: 'AccountPage',
            component: () => import('./views/AccountPage.vue')
        }
    ]
})

const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/signin', '/signup', '/games', '/incoming'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/signin');
    } else {
      next();
    }
  });