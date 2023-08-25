<template>
  <nav class="bg-success navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link
            class="me-5 mb-2 mb-lg-0"
            v-for="nav in navigation"
            :to="nav.path"
            :key="nav.id"
          >
            <li :class="'nav-item ' + nav.status">
              <p class="link fw-bold">{{ nav.name }}</p>
            </li>
          </router-link>
        </ul>
      </div>
      <img
        class="rounded-circle flex-shrink-0 me-3 fit-cover"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
        @click="() => getUserOrder()"
        width="50"
        height="50"
        src="https://i.pravatar.cc/150?img=1"
      />
    </div>
    <!-- ----------------------------------------- -->
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">🛒 My Cart</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li class="buy-item" v-for="(item, i) in userOrder">
                <img
                  width="30"
                  height="30"
                  class="rounded-circle flex-shrink-0 fit-cover"
                  :src="item.thumbnail"
                />
                <span>{{ item.stock }} units</span>
                <span
                  >${{ item.price * item.stock }}
                  <small> ({{ item.price }}*{{ item.stock }}) </small>
                </span>
                <span :data-index="i" @click="deleteItem" class="delete"
                  >❌</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------------------------- -->
  </nav>
  <router-view
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1.2 }"
    :delay="200"
  />
  <footer class="bg-success p-2">
    <div class="container-fluid">
      <div class="row justify-content-center"></div>
      <hr />
      <div
        class="text-muted d-flex justify-content-between align-items-center pt-3"
      >
        <p class="mb-0">Copyright © Chi-hung™</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    navigation: [
      // { id: 2, name: "Home", path: "/", status: "" },
      { id: 3, name: "Home", path: "/product", status: "" },
      { id: 1, name: "Contact", path: "/contact", status: "active" },
    ],
    localStorageWatcher: localStorage.getItem("userOrder"),
    userOrder: [],
  }),
  created() {
    this.$watch(
      () => this.userOrder,
      () => this.getUserOrder()
    );
    this.getUserOrder();
  },
  computed: {
    totalPrice() {
      this.userOrder.forEach((item) => {
        this.totalPrice1 += item.price * item.stock;
      });
    },
  },

  methods: {
    getUserOrder() {
      const userOrder = localStorage.getItem("userOrder");
      if (userOrder) {
        this.userOrder = JSON.parse(userOrder);
      }
    },
    deleteItem(e) {
      const index = e.target.dataset.index;
      this.userOrder.splice(index, 1);
      localStorage.setItem("userOrder", JSON.stringify(this.userOrder));
    },
  },
};
</script>
<style>
.delete {
  cursor: pointer;
}

.buy-item {
  list-style: none;
  border-bottom: 1px solid #ccc;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  justify-content: flex-end;
}

.navbar-toggler {
  aspect-ratio: 1/1;
  transform: scale(0.7);
}

a {
  margin-top: 10px;
  text-decoration: none;
  color: white;
}
</style>
