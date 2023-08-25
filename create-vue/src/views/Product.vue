<template>
  <section class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="image === '' ? product.images[0] : image"
          class="main-image rounded-start"
          alt="product-image"
        />
      </div>
      <div class="col-md-8">
        <star-rating
          read-only
          :show-rating="false"
          :rating="Math.trunc(product.rating)"
        />
        <div class="card-body">
          <h4 class="badge bg-info">{{ product.brand }}</h4>
          <h5 class="title">{{ product.title }}</h5>
          <p class="text">
            {{ product.description }}
          </p>
          <div class="card-body_form">
            <p class="badge bg-primary">Stock : {{ product.stock }}</p>
            <p class="badge bg-secondary">Price : ${{ product.price }}</p>
            <label for="cars">Units</label>
            <select name="unit" v-model="buyUnit" id="unit">
              <option v-for="el in option" :value="el">
                {{ el }}
              </option>
            </select>
            <button @click="buyIt" class="badge btn btn-danger">
              Add to cart !
            </button>
            <div class="thumbnail-gallery">
              <img
                class="thumbnail"
                v-for="image in product.images"
                :src="image"
                @click="imageToggle"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <h2 class="title">See more...</h2>
  <!-- scroll x -->
  <section class="relative-product">
    <div v-for="product in relatedProducts" class="relative-product_item">
      <img class="product-image" :src="product.images[0]" alt="product" />
      <div class="relative-product-content">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="text">
          <small class="text-body-secondary"
            >price : ${{ product.price }}
          </small>
        </p>
        <router-link :to="`/product/${product.id}`">
          <button class="btn btn-primary">more</button>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Carousel wrapper -->
</template>
<script>
import StarRating from "vue-star-rating";
import { update, clone } from "lodash";
export default {
  name: "Product",
  components: { StarRating },
  data: () => ({
    products: [],
    product: {},
    rating: "",
    relatedProducts: [],
    option: [],
    userOrder: [],
    image: "",
    buyUnit: 1,
  }),
  props: ["id"],
  created() {
    this.$watch(
      () => this.$route.params.id,
      () => this.getNewProduct()
    );
    this.getNewProduct();
    this.option = Array.from({ length: 10 }, (v, i, k) => i + 1);
    const userOrder = localStorage.getItem("userOrder");
    if (userOrder) {
      this.userOrder = JSON.parse(userOrder);
    }
  },

  methods: {
    getNewProduct() {
      const product = localStorage.getItem("products");
      if (product) {
        this.products = JSON.parse(product);
        this.product = this.products.find((product) => product.id == this.id);
        this.relatedProducts = this.products.filter((product) =>
          product.category === this.product.category ? product : null
        );
      }
    },
    imageToggle(e) {
      this.image = e.target.currentSrc;
    },
    buyIt() {
      update(this.product, "stock", (n) => n - this.buyUnit);
      this.userOrder.push(
        update(clone(this.product), "stock", (n) => (n = this.buyUnit))
      );
    },
  },
  watch: {
    products: {
      handler() {
        localStorage.setItem("products", JSON.stringify(this.products));
      },
      deep: true,
    },
    userOrder: {
      handler() {
        localStorage.setItem("userOrder", JSON.stringify(this.userOrder));
      },
      deep: true,
    },
  },
};
</script>
<style>
.main-image {
  height: 100%; /* aspect-ratio: 1/1; */
  object-fit: contain !important;
  width: 100%;
}
/* -------------card-body-content--------------- */
.card-body_form {
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.badge,
select {
  width: fit-content;
}

/* ----------image-thumbnail---------------- */
.thumbnail-gallery {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem;
}
.thumbnail {
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 1rem rgb(88, 88, 88);
  aspect-ratio: 1/1;
  object-fit: contain;
  width: 3rem;
  border-radius: 0.5rem;
}
/* ----------utlity---------------------------- */
.badge {
  font-size: 1.4rem;
}

.title {
  font-weight: bolder;
  text-transform: uppercase;
  margin-left: 1rem;
}

.product-image {
  aspect-ratio: 1/1;
  object-fit: contain;
  width: 10rem;
}

/* ---------------------------- */
.relative-product::-webkit-scrollbar {
  display: none;
}
.relative-product {
  overflow-x: scroll;
  display: flex;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  margin: 1rem;
}
.relative-product_item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-inline: 2rem;
}
.product-title {
  white-space: nowrap;
  font-size: 1.5rem;
}

.text {
  font-size: 0.8rem;
  word-break: break-all;
}
</style>
