<template>
  <v-dialog
    v-model="editInvoiceDialog"
    hide-overlay
    transition="dialog-bottom-transition"
    width="50vw"
  >
    <v-card tile>
      <v-card-title class="pa-0">
        <v-toolbar flat>
          <v-btn icon v-on:click="closeEditInvoiceDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title>Edit Line</v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            color="purple"
            class="ma-2 pa-2"
            dark
            v-on:click="deleteLine"
          >
            <v-icon dark> mdi-delete </v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Product"
              v-model="selectedLine.product"
              disabled
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Quantity"
              v-model="selectedLine.quantity"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Price"
              v-model="selectedLine.cost"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Discount"
              v-model="selectedLine.discount"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="blue darken-1" v-on:click="closeEditInvoiceDialog"
          >Close</v-btn
        >
        <v-btn text color="blue darken-1" v-on:click="updateLine">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "EditInvoiceLine",
  components: {},
  beforeCreate() {},
  computed: {
    ...mapGetters(["invoice", "editInvoiceDialog", "selectedLine"]),
  },
  data: () => ({}),
  methods: {
    updateLine() {
      this.$store.dispatch("editLine").then(() => {
        this.$store.commit("closeEditInvoiceDialog");
      });
    },
    deleteLine() {
      this.$store.dispatch("deleteLine").then(() => {
        this.$store.commit("closeEditInvoiceDialog");
      });
    },
    ...mapActions(["editLine"]),
    ...mapMutations(["openEditInvoiceDialog", "closeEditInvoiceDialog"]),
  },
};
</script>
     

