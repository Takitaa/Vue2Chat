import Vue from 'vue';
import App from './App.vue';
import VueToggles from 'vue-toggles';

Vue.component('VueToggles', VueToggles);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: (h) => h(App),
});
