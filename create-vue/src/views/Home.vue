<template>
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
