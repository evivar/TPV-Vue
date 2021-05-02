<template>
  <v-dialog
    v-model="tableDialog"
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-card-title class="pa-0">
        <v-toolbar flat>
          <v-btn icon v-on:click="closeTableDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title>Tables</v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            color="purple"
            class="ma-2 pa-2"
            dark
            v-on:click="openAddEditTableDialog()"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <tables></tables>
      </v-card-text>
    </v-card>
    <v-dialog v-model="addEditTableDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add/Edit Table</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Table name*"
                  required
                  v-model="table.name"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            v-on:click="closeAddEditTableDialog()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            v-on:click="createTable(table)"
            v-show="!table.uuid"
          >
            Save
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            v-on:click="editTable()"
            v-show="table.uuid"
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Tables from "./Tables.vue";

export default {
  name: "AddEditTable",
  components: {
    Tables,
  },
  beforeCreate () {
    this.$store.dispatch("readAllTables");
  },
  computed: {
    ...mapGetters(["tableDialog", "table", "tables", "addEditTableDialog"]),
  },
  data: () => ({
  }),
  methods: {
    editTable() {
      this.$store.dispatch("editTable").then(() => {
        this.$store.dispatch("readAllTables").then(() => {
          this.closeAddEditTableDialog();
        });
      });
    },

    ...mapActions(["createTable"]),
    ...mapMutations([
      "openTableDialog",
      "closeTableDialog",
      "openAddEditTableDialog",
      "closeAddEditTableDialog",
      "setTableToEdit",
    ]),
  },
};
</script>
     

