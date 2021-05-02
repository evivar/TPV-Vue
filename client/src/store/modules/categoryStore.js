import Vue from 'vue';

const state = {

    categories: [],

    products: [],

    currentCategory: {},

};

const getters = {
    categories: (state) => { return state.categories; },
    currentCategory: (state) => { return state.currentCategory; },
    products: (state) => { return state.products; },
}

const actions = {

    async readRootCategories({ commit }) {
        await Vue.axios.post("/category/readRootCategories").then((resp) => {
            let data = resp.data;
            if (data) {
                commit('readCategories', data);
            }
            else {
                commit('readRootCategoriesError');
            }
        });
    },

    async readChildrenCategories({ commit, dispatch }, payload) {
        await Vue.axios.post("/category/readChildrenCategories", { CategoryId: payload.category.id }).then((resp) => {
            let data = resp.data;
            if (data) {
                commit('readCategories', data);
            }
            else {
                commit('readRootCategoriesError');
            }
        })
    },

    async readParentCategories({ commit }, payload) {
        await Vue.axios.post("/category/readParentCategory", { uuid: payload.uuid }).then((resp) => {
            let data = resp.data;
            if (data) {
                commit('readCategories', data);
            }
            else {
                commit('readRootCategoriesError');
            }
        })
    },

    async readProductsByCategoryId({ commit }, payload) {
        await Vue.axios.post("/product/readProductsByCategoryId", { categoryId: payload.category.id }).then((resp) => {
            let data = resp.data;
            if (data) {
                console.log('data :>> ', data);
                commit('readProducts', data);
            }
            else {
                commit('readRootCategoriesError');
            }
        });
    },

};

const mutations = {

    readCategories(state, payload) {
        if (payload.result.length > 0) {
            state.categories = payload.result;
        }
    },

    readProducts(state, payload) {
        state.products = payload.result;
    },

};

export default {
    state,
    getters,
    actions,
    mutations
};
