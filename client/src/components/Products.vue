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
        <v-col
          v-for="product in products"
          :key="product.uuid"
          class="productCol"
        >
          <v-item>
            <v-card
              class="d-flex align-center text-center productCard"
              light
              height="1fr"
              width="auto"
              v-on:click="addProduct(product)"
            >
              <v-card-text style="word-break: break-all; color: black">{{
                product.name
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
  name: "Products",
  created() {},
  computed: {
    ...mapGetters(["products", "invoice"]),
  },
  data: () => ({}),
  methods: {
    addProduct(product) {
      const payload = {
        invoiceId: this.invoice.id,
        product: product,
      };
      console.log("payload :>> ", payload);
      console.log("invoice.lines :>> ", this.invoice.lines);
      let line = this.$_.findWhere(this.invoice.lines, {
        product: product.name,
      });
      if (line) {
        console.log("Actaulizar cantidad");
        payload.line = line;
        this.$store.dispatch("updateLineQuantity", payload);
      } else {
        console.log("Añadir linea");
        this.$store.dispatch("addLine", payload);
      }
    },
  },
};
</script>

<style>
.productCard {
  height: 100px !important;
}

.v-card--link:before {
  transition: none !important;
}

.v-card--link:focus:before {
  opacity: 0 !important;
}
</style>