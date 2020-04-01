import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
        // path: url 주소
        // component: url 주소로 갔을 때 표시될 컴포넌트
        path: '/news',
        name: 'news',
        // component: createListView('NewsView'),
        component: NewsView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
            .then(()=> {
              console.log('fetched');
              next();
            })
            .catch((error) => {
              console.log(error);
            })
        },
    },
    {
        path: '/ask',
        name: 'ask',
        //component: createListView('AskView'),
        component: AskView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
            .then(()=> {
              console.log('fetched');
              next();
            })
            .catch((error) => {
              console.log(error);
            })
        },
    },
    {
        path: '/jobs',
        name: 'jobs',
        //component: createListView('JobsView'),
        component: JobsView,
        beforeEnter: (to, from, next) => {
          bus.$emit('start:spinner');
          store.dispatch('FETCH_LIST', to.name)
            .then(()=> {
              console.log('fetched');
              next();
            })
            .catch((error) => {
              console.log(error);
            })
        },
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
});

