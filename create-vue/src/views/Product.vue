<template>
  <div>
    <h1>This is my product page</h1>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
  data: () => ({
    products: [],
    product: {},
  }),
  props: ["id"],
  created() {
    const product = localStorage.getItem("products");
    if (product) {
      this.products = JSON.parse(product);
      this.product = this.products.find((product) => product.id === this.id);
    }
  },

  methods: {},
};
</script>
