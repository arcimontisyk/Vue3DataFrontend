<template>
  <div>
    <v-card class="mx-auto" max-width="600">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-btn @click="countUp()" depressed color="primary">
              Count Up 1
            </v-btn>
          </v-col>
          <v-col cols="4"> Counter 1: </v-col>
          <v-col cols="2"> {{ this.$store.state.counter1 }}</v-col>
          <v-col cols="2"> {{ this.$store.state.counter1received }}</v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-btn @click="countUp2()" depressed color="primary">
              Count Up 2
            </v-btn>
          </v-col>
          <v-col cols="4"> Counter 2:</v-col>
          <v-col cols="2"> {{ this.$store.state.counter2 }}</v-col>
          <v-col cols="2"> {{ this.$store.state.counter2received }}</v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "InspirePage",
  mounted() {
    this.socket = this.$nuxtSocket({
      // nuxt-socket-io opts:
      name: "home", // Use socket "home"
      channel: "/index", // connect to '/index'
      // socket.io-client opts:
      reconnection: false,
    });
  },
  methods: {
    ...mapMutations(["increment1", "increment2"]),
    countUp() {
      this.increment1();
      var c1 = this.$store.state.counter1;
      this.socket.emit("counter1", c1);
    },
    countUp2() {
      this.increment2();
    },
  },
};
</script>
