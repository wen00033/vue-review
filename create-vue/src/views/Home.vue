<template>
  <section class="page-section clearfix">
    <div class="container">
      <div class="intro">
        <img class="img-fluid intro-img mb-3 mb-lg-0 rounded" src="intro.jpg" />
        <div class="text-center intro-text p-5 rounded bg-faded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">Fresh Coffee</span
            ><span class="section-heading-lower">Worth Drinking</span>
          </h2>
          <p class="mb-3">
            Every cup of our quality artisan coffee starts with locally sourced,
            hand picked ingredients. Once you try it, our coffee will be a
            blissful addition to your everyday morning routine - we guarantee
            it!
          </p>
          <div class="mx-auto intro-button">
            <a
              class="btn btn-primary d-inline-block mx-auto btn-xl"
              role="button"
              href="#"
              >Visit Us Today!</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="text-center cta-inner rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Our Promise</span
              ><span class="section-heading-lower">To You</span>
            </h2>
            <p class="mb-0">
              When you walk into our shop to start your day, we are dedicated to
              providing you with friendly service, a welcoming atmosphere, and
              above all else, excellent products made with the highest quality
              ingredients. If you are not satisfied, please let us know and we
              will do whatever we can to make things right!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 mt-5">
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <p class="fw-bold text-success mb-2">Testimonials</p>
          <h2 class="fw-bold"><strong>What People Say About us</strong></h2>
          <p class="text-muted">
            No matter the project, our team can handle it. 
          </p>
        </div>
      </div>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center"
      >
        <div class="col mb-4">
          <div
            class="d-flex flex-column align-items-center align-items-sm-start"
          >
            <p
              class="bg-body-tertiary border rounded border-0 border-light p-4"
            >
              Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit
              class dapibus, aliquet morbi.
            </p>
            <div class="d-flex">
              <img
                class="rounded-circle flex-shrink-0 me-3 fit-cover"
                width="50"
                height="50"
                src="team/avatar2.jpg"
              />
              <div>
                <p class="fw-bold text-primary mb-0">John Smith</p>
                <p class="text-muted mb-0">Erat netus</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div
            class="d-flex flex-column align-items-center align-items-sm-start"
          >
            <p
              class="bg-body-tertiary border rounded border-0 border-light p-4"
            >
              Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit
              class dapibus, aliquet morbi.
            </p>
            <div class="d-flex">
              <img
                class="rounded-circle flex-shrink-0 me-3 fit-cover"
                width="50"
                height="50"
                src="team/avatar4.jpg"
              />
              <div>
                <p class="fw-bold text-primary mb-0">John Smith</p>
                <p class="text-muted mb-0">Erat netus</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div
            class="d-flex flex-column align-items-center align-items-sm-start"
          >
            <p
              class="bg-body-tertiary border rounded border-0 border-light p-4"
            >
              Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit
              class dapibus, aliquet morbi.
            </p>
            <div class="d-flex">
              <img
                class="rounded-circle flex-shrink-0 me-3 fit-cover"
                width="50"
                height="50"
                src="team/avatar5.jpg"
              />
              <div>
                <p class="fw-bold text-primary mb-0">John Smith</p>
                <p class="text-muted mb-0">Erat netus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <h1>{{ message }}</h1>
  <h1 v-once="message">{{ message }}</h1>
  <textarea v-model="message" name=" message" cols="30" rows="2"></textarea>
  <input v-model="checkfruit" type="checkbox" value="Apple" />
  <label for="Apple">Apple</label>
  <input v-model="checkfruit" type="checkbox" value="Banana" />
  <label for="Banana">Banana</label>
  <input v-model="checkfruit" type="checkbox" value="Lemon" />
  <label for="Lemon">Lemon</label>
  <input v-model="checkfruit" type="checkbox" value="Orange" />
  <label for="Orange">Orange</label>
  <button
    :class="[checkfruit.includes('Orange') ? active : '']"
    v-show="message"
  >
    Click me!
  </button>
  <p v-if="checkfruit.includes('Orange')">you like orange</p>
  <p v-else="checkfruit.includes('Apple')">choose your fruit</p>
  <ul>
    <li v-for="fruit in checkfruit" :key="fruit">{{ fruit }}</li>
  </ul> -->
  <!-- for documentation purpose -->
  <!-- <span v-pre>
    <pre>{{ $data }}</pre>
  </span> -->
  <!-- -------------------------->
  <!-- <button @click="number >= 0 ? (number += 1) : 0">
    Add the number to here {{ number }}
  </button>
  <div class="active" @mousedown="number += 1" @mouseup="number -= 1">
    {{ number }}
  </div>
  <p v-html="link"></p> -->
</template>
<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    message: "",
    checkfruit: [],
    active: "active",
    number: 0,
    link: `This is a html <a href='"https://www.google.com"'>Google</a>`,
  }),
  props: {},
  setup() {
    return {};
  },
  methods: {
    addNumber() {
      this.number += 1;
    },
  },
};
</script>
