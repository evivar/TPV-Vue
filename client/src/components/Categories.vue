<template>
  <v-item-group>
    <v-container>
      <v-row
        style="
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          overflow: auto;
          height: 40vh;
        "
      >
        <v-col v-if="categories[0].parentCategory" >
          <v-item>
            <v-card
              class="d-flex align-center text-center categoryCard"
              light
              height="1fr"
              width="auto"
              v-on:click="categoryUp()"
            >
              <v-card-text style="word-break: break-all; color: black">
               ...
              </v-card-text>
            </v-card>
          </v-item>
        </v-col>
        <v-col
          v-for="category in categories"
          :key="category.uuid"
          class="categoryCol"
        >
          <v-item>
            <v-card
              class="d-flex align-center text-center categoryCard"
              light
              height="1fr"
              width="auto"
              v-on:click="readChildrenCategories(category)"
            >
              <v-card-text style="word-break: break-all; color: black">{{
                category.name
              }}</v-card-text>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Categories",
  created() {
    this.$store.dispatch("readRootCategories");
  },
  computed: {
    ...mapGetters(["categories", "currentCategory"]),
  },
  data: () => ({}),
  methods: {
    categoryUp() {
      console.log("this.categories[0].uuid :>> ", this.categories[0].uuid);
      const payload = {
        uuid: this.categories[0].uuid,
      };
      console.log('payload :>> ', payload);
      this.$store.dispatch("readParentCategories", payload);
    },

    readChildrenCategories(category) {
      const payload = {
        category: category,
      };
      console.log("payload :>> ", payload);
      this.$store.dispatch("readChildrenCategories", payload).then(() => {
        if(this.categories.includes(payload.category)){
          console.log('Leo productos de la categoria ' + payload.category.id)
          // Leer los productos de esa categoria, ya que es una categoria sin hijos
          this.$store.dispatch("readProductsByCategoryId", payload)
        }
      });
    },
  },
};
</script>

<style>
.categoryCard {
  height: 100px!important;
}

.v-card--link:before{
  transition: none!important;
}

.v-card--link:focus:before{
  opacity: 0!important
}
</style>

