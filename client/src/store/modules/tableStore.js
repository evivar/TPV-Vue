import Vue from 'vue';

const state = {

    tableDialog: true,

    table: {
        name: ''
    },

    currentTable: {},

    tableEditing: {},

    tables: [],

    addEditTableDialog: false,

    tableAlert: ''
};

const getters = {
    tableDialog: (state) => { return state.tableDialog; },
    table: (state) => { return state.table; },
    currentTable: (state) => { return state.currentTable; },
    tables: (state) => { return state.tables; },
    addEditTableDialog: (state) => { return state.addEditTableDialog; }
}

const actions = {

    async createTable({ commit }, payload) {
        await Vue.axios.post('/table/createTable', { name: payload.name }).then((resp) => {
            let data = resp.data;
            if (data) {
                commit('createTable', data);
            }
            else {
                commit('createTableError');
            }
        })
    },

    async readAllTables({ commit }) {
        await Vue.axios.get('/table/readAllTables').then((resp) => {
            let data = resp.data;
            if (data) {
                commit('readAllTables', data);
            }
            else {
                commit('readAllTablesError');
            }
        });
    },

    async bookUnbookTable({ commit }, payload) {
        await Vue.axios.put('/table/updateTable', { uuid: payload.uuid, name: payload.name, status: (payload.status == 'free') ? 'reserved' : 'free' }).then((resp) => {
            let data = resp.data;
            if (data.result) {
                commit('bookUnbookTable', payload);
            }
            else {
                commit('bookUnbookTableError')
            }
        })
    },

    async editTable({ commit, state }) {
        await Vue.axios.put('/table/updateTable', { uuid: state.table.uuid, name: state.table.name, status: state.table.status }).then((resp) => {
            let data = resp.data;
            if (data.result) {
                commit('editTable');
            }
            else {
                commit('bookUnbookTableError')
            }
        })
    },

    async deleteTable({ commit, state }) {
        await Vue.axios.put('/table/deleteTable', { uuid: state.table.uuid }).then((resp) => {
            let data = resp.data;
            if (data.result) {
                commit('deleteTable');
            }
            else {
                commit('bookUnbookTableError')
            }
        })
    },

};

const mutations = {

    openTableDialog(state){
        state.tableDialog = true;
    },

    closeTableDialog(state){
        state.tableDialog = false;
    },

    openAddEditTableDialog(state){
        state.addEditTableDialog = true;
    },

    closeAddEditTableDialog(state){
        state.addEditTableDialog = false;
    },

    createTable(state, payload) {
        state.tables.push(payload.result);
        state.addEditTableDialog = false;
    },

    setCurrentTable(state, payload){
        state.currentTable = payload;
        state.tableDialog = false;
    },

    setTableToEdit(state, payload) {
        state.table = payload;
        state.addEditTableDialog = true;
    },

    setTableToDelete(state, payload) {
        state.table = payload;
        //state.addEditTableDialog = true;
    },

    readAllTables(state, payload) {
        state.tables = payload.result;
    },

    bookUnbookTable(state, payload) {
        var tableIdx = state.tables.indexOf(state.tables.find((table) => { return table.uuid == payload.uuid }));
        console.log('tableIdx :>> ', tableIdx);
        state.tables[tableIdx].status = (payload.status == 'reserved') ? 'free' : 'reserved';
        state.tableAlert = "Table updated!";
    },

    editTable(state) {
        state.table = {};
    },

    deleteTable(state) {
        state.table = {};
    }

};

export default {
    state,
    getters,
    actions,
    mutations
};
