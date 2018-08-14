import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/cars'},
    {path: '/cars', component: AppCars}
    // {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
