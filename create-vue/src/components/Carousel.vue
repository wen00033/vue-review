<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: 100 }"
    :enter="{ opacity: 1, x: 0, scale: 1 }"
    :delay="200"
    id="carouselExample"
    class="carousel slide"
  >
    <div class="carousel-inner">
      <div class="carousel-item active relative position-relative">
        <div class="promotion-content position-absolute">
          <h4>New Promotion!</h4>
          <p>
            Wishes you and your family a Happy Thanksgiving! To show our
            gratitude, we’re offering 10% off all purchases using code THANKS10.
            Shop now!
          </p>
        </div>

        <img :src="background[0]" class="d-block w-100 active" alt="carousel" />
      </div>
      <div class="carousel-item">
        <div class="promotion-content position-absolute">
          <h4>New arrivals!</h4>
          <p>
            New arrivals just in at here! Stay ahead of the trend and explore
            our latest products. Shop now and be fashion-forward!
          </p>
        </div>
        <img :src="background[1]" class="d-block w-100" alt="carousel" />
      </div>
      <div class="carousel-item">
        <div class="promotion-content position-absolute">
          <h4>New Season!</h4>
          <p>
            We’re excited to introduce a NEW spring collection! Be among the
            first to shop our latest styles and make a statement.
          </p>
        </div>
        <img :src="background[2]" class="d-block w-100" alt="carousel" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  components: {},
  data: () => ({
    background: [
      "https://images.unsplash.com/photo-1680266985445-84ee90d29ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://plus.unsplash.com/premium_photo-1671305004232-ec8318dafd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1623221255991-6b2407638cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    ],
  }),

  setup() {
    return {};
  },
  methods: {},
};
</script>
<style>
@media screen and (min-width: 468px) {
  .carousel-item {
    height: 300px;
  }
}

@media screen and (min-width: 768px) {
  .carousel-item {
    height: 400px;
  }
}
@media screen and (min-width: 968px) {
  .carousel-item {
    height: 700px;
  }
}
.promotion-content {
  transition: all 300ms ease-in-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  font-size: clamp(0.6rem, 1.5vw, 3rem);
  color: white;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.233);
}
.promotion-content:hover {
  transform: translate(-50%, -50%) scale(1.2);
}
.promotion-content h4 {
  display: inline-block;
  padding: 0.5rem;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 2vw;
  background-color: #ff9100;
}

.carousel-item {
  width: 100%;
  object-fit: contain;
}
</style>
