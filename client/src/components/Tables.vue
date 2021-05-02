<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="table in tables" :key="table.uuid" cols="12" md="2">
          <v-item>
            <v-card
              :color="tableColor(table)"
              class="d-flex align-center"
              dark
              height="auto"
              width="auto"
              style="flex-direction: column"
              v-on:click="setCurrentTable(table)"
            >
              <v-card-title>{{ table.name }}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      icon
                      v-on:click="bookUnbookTable(table)"
                      :disabled="table.status == 'occupied'"
                    >
                      <v-icon>mdi-book</v-icon>
                    </v-btn>
                  </template>
                  <span>Book/Clear table</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      icon
                      v-on:click="setTableToEdit(table)"
                      :disabled="table.status == 'occupied'"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Edit table</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      icon
                      v-on:click="openDeleteTableDialog(table)"
                      :disabled="table.status !== 'free'"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                  <span>Delete table</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
      <v-dialog v-model="deleteTableDialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">
            Delete table " {{ table.name }} "?
          </v-card-title>
          <v-card-text
            >You are going to delete permanently this table. Do you want to
            proceed?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              v-on:click="deleteTableDialog = false"
            >
              Cancel
            </v-btn>
            <v-btn color="green darken-1" text v-on:click="deleteTable()">
              Accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Tables",
  created() {
    this.$store.dispatch("readAllTables");
  },
  computed: {
    ...mapGetters(["tableDialog", "table", "tables", "addEditTableDialog"]),
  },
  data: () => ({
    deleteTableDialog: false,
  }),
  methods: {
    setCurrentTable(table) {
      this.$store.commit("setCurrentTable", table);
    },

    bookUnbookTable(table) {
      const payload = {
        uuid: table.uuid,
        name: table.name,
        status: table.status,
      };
      this.$store.dispatch("bookUnbookTable", payload);
    },

    editTable() {
      this.$store.dispatch("editTable").then(() => {
        this.$store.dispatch("readAllTables").then(() => {
          this.closeAddEditTableDialog();
        });
      });
    },

    openDeleteTableDialog(table) {
      const payload = {
        uuid: table.uuid,
        name: table.name,
        status: table.status,
      };
      this.$store.commit("setTableToDelete", payload);
      this.deleteTableDialog = true;
    },

    deleteTable() {
      this.$store.dispatch("deleteTable").then(() => {
        this.$store.dispatch("readAllTables").then(() => {
          this.deleteTableDialog = false;
        });
      });
    },

    tableColor(table) {
      switch (table.status) {
        case "free":
          return "green";
          break;
        case "reserved":
          return "lime darken-2";
          break;
        case "occupied":
          return "red";
          break;
      }
    },
    ...mapActions(["createTable"]),
    ...mapMutations([
      "openTableDialog",
      "table/closeTableDialog",
      "openAddEditTableDialog",
      "closeAddEditTableDialog",
      "setTableToEdit",
    ]),
  },
};
</script>

<style>
</style>