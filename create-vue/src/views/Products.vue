<template>
  <Carousel />
  <div class="list">
    <div v-for="product in products">
      <div :key="product.id" class="card">
        <img
          :src="product.thumbnail"
          class="card-img-top"
          :alt="product.title"
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <div class="card-content">
            <p class="card-stock fw-bold">Stock: {{ product.stock }}</p>
            <router-link :to="`/product/` + product.id">
              <button class="btn btn-primary">more</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Carousel from "../components/Carousel.vue";
export default {
  name: "Products",
  components: { Carousel },
  data: () => ({
    products: [],
  }),
  created() {
    this.products = JSON.parse(localStorage.getItem("products"));
  },
  props: {},
  methods: {
    getProducts() {
      axios.get("https://dummyjson.com/products").then((res) => {
        localStorage.setItem("products", JSON.stringify(res.data.products));
      });
    },
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    products: {
      handler() {
        localStorage.setItem("products", JSON.stringify(this.products));
      },
      deep: true,
    },
  },
};
</script>
<style>
.list {
  display: grid;
  aspect-ratio: 1/1;
  gap: 2rem;
  margin: 2rem;
  grid-template-columns: repeat(1, 1fr);
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  text-align: center;
  font-size: 1rem;
}

@media (min-width: 468px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 768px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 968px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
    margin-inline: 6rem;
  }
}

.card-stock {
  font-size: 0.8rem;
  white-space: nowrap;
  text-transform: uppercase;
  border-radius: 2rem;
  background-color: coral;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  display: inline-block;
  margin: 0;
}
.card img {
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}
.card-text {
  height: 10rem;
  font-size: 1rem;
}
button {
  margin: 0;
}
</style>
