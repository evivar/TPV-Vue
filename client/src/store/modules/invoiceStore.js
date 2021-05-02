import Vue from 'vue';

import { _ } from 'vue-underscore';

const state = {

    invoice: {},

};

const getters = {
    invoice: (state) => { return state.invoice; },
    invoiceTotal: (state) => {
        console.log('state.invoice :>> ', state.invoice);
        if (state.invoice.id) {
            var total = 0;
            state.invoice.lines.map(line => total += line.cost);
            return total;
        }
        else {
            return 0;
        }
    },
}


const actions = {

    async readInvoiceByTableId({ commit }, payload) {
        console.log('payload :>> ', payload);
        await Vue.axios.post("/invoice/readInvoiceByTableId", { tableId: payload.id }).then((resp) => {
            let data = resp.data;
            if (data) {
                commit('readInvoice', data);
            }
            else {
                commit('readRootCategoriesError');
            }
        })
    },

    async updateLineQuantity({ commit }, payload) {
        console.log('payload :>> ', payload);
        await Vue.axios.put('/line/updateLineQuantity', { line: payload.line }).then((resp) => {
            let data = resp.data;
            if (data) {
                commit("updateLineQuantity", payload);
            }
            else {
                commit("updateLineQuantityError");
            }
        })
    },

    async addLine({ commit }, payload) {
        console.log('payload :>> ', payload);
        await Vue.axios.post('/line/createLine', { quantity: 1, product: payload.product.name, cost: payload.product.price, invoiceId: payload.invoiceId }).then(async (resp) => {
            let data = resp.data;
            if (data) {
                await Vue.axios.post('/line/readAllInvoiceLines', { invoiceId: payload.invoiceId }).then((resp) => {
                    let data = resp.data;
                    if (data) {
                        commit("updateLines", data);
                    }
                    else {
                        commit("updateLinesError");
                    }
                })
            }
            else {
                commit("addLineError");
            }
        })
    },

};

const mutations = {

    readInvoice(state, data) {
        state.invoice = data.result;
    },

    updateLineQuantity(state, data) {
        let line = state.invoice.lines[_.findIndex(state.invoice.lines, { id: data.line.id })];
        line.quantity = line.quantity + 1;
        line.price = line.cost * line.quantity;
        console.log('line :>> ', line);
    },

    updateLines(state, data) {
        state.invoice.lines = data.result;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
