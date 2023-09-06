import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faAddressBook, faCreditCard, } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
library.add([ faAddressBook, faCreditCard, faMagnifyingGlass]);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
