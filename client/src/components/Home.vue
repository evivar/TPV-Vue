<template>
  <v-app id="inspire">
    <v-navigation-drawer app style="width: 25vw">
      <v-card light elevation="2" height="56vh">
        <v-card-title>Invoice</v-card-title>
        <v-data-table
          :headers="invoiceHeaders"
          :items="invoice.lines"
          :items-per-page="5"
          hide-default-footer
          height="40vh"
          class="elevation-1"
        >
          <template v-slot:[`item.price`]="{ item }">
            {{ item.price }} €
          </template>
        </v-data-table>
        <div style="height: 13vh">
          <h3
            style="display: flex; justify-content: space-between; padding: 10px"
          >
            <span style="text-align: left">Total:</span
            ><span style="text-align: right">{{ invoiceTotal }} €</span>
          </h3>
          <v-divider></v-divider>
          <div class="invoiceBtns">
            <v-btn dark medium> <v-icon left>mdi-printer</v-icon> Print</v-btn>
            <v-btn dark medium>
              <v-icon left>mdi-cash-register</v-icon> Charge</v-btn
            >
            <v-btn dark medium> <v-icon left>mdi-delete</v-icon> Delete</v-btn>
          </div>
        </div>
      </v-card>
      <v-spacer style="height: 1.7vh"></v-spacer>
      <div style="display: flex; width: 100%; align-items: center">
        <!-- TODO: Pad numerico con los numeros del 1 al 9 en 3 filas de 3 columnas, el 0 y el . en una fila de 2 y 1 columna respectivamente y luego los signos de -, +, = y el signo de borrar de 1 columna de 4 filas -->
      </div>
    </v-navigation-drawer>
    <v-main style="padding: 0px 0px 0px 25vw">
      <v-card elevation="2" style="height: 100vh">
        <v-card-title class="pa-0">
          <v-toolbar flat>
            <v-toolbar-title>Vue POS</v-toolbar-title>
            <v-spacer></v-spacer>
            Table: {{ currentTable.name }}
            <v-spacer></v-spacer>
            <v-btn v-on:click="openTableDialog()"> Tables </v-btn>
            <add-edit-table></add-edit-table>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-row style="height: 45vh; margin-top: 1vh; margin-bottom: 1.5vh">
            <v-col>
              <h1>Products</h1>
              <products></products>
            </v-col>
          </v-row>
          <v-row style="height: 45vh">
            <v-col>
              <h1>Categories</h1>
              <categories></categories>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import AddEditTable from "./AddEditTable.vue";

import Categories from "./Categories";
import Products from "./Products.vue";

export default {
  name: "Home",
  components: {
    AddEditTable,
    Categories,
    Products,
  },
  created() {},
  computed: {
    ...mapGetters(["currentTable", "invoice", "invoiceTotal"]),
  },
  watch: {
    currentTable(newTable, oldTable) {
      this.$store.dispatch("readInvoiceByTableId", newTable);
    },
  },
  data: () => ({
    invoiceHeaders: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "product",
      },
      { text: "Price", sortable: false, align: "end", value: "price" },
    ],
  }),
  methods: {
    openTableDialog() {
      this.$store.commit("openTableDialog");
    },
  },
};
</script>

<style>
.invoiceBtns {
  display: flex;
  justify-content: space-around;
}

.numPad {
  height: 42vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;
  align-items: center;
}
</style>