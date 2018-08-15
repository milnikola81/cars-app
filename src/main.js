import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars.vue'
import NavBar from './components/NavBar.vue'
import AddCar from './components/AddCar.vue'
import SingleCar from './components/SingleCar.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/cars'},
    {path: '/cars', component: AppCars},
    {path: '/add', component: AddCar},
    {path: '/cars/:id', component: SingleCar, name: 'single-car'},
    {path: '/edit/:id', component: AddCar, name: 'edit-car'}
];

const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
