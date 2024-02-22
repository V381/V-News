import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useLoadingStore } from '@/stores/loading';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
const loadingStore = useLoadingStore();
app.provide('loadingStore', loadingStore);
app.use(router);

app.mount('#app');
