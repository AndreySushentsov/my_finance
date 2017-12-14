
require('./bootstrap');

window.Vue = require('vue');


Vue.component('navigation-component', require('./components/NavigationComponent.vue'));

const app = new Vue({
    el: '#app'
});
