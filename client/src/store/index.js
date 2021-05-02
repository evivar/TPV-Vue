import Vue from 'vue';
import Vuex from 'vuex';

import table from './modules/tableStore';
import category from './modules/categoryStore';
import invoice from './modules/invoiceStore';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {  table, category, invoice  }
});