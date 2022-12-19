<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5"> Sytem Voltage </v-list-item-title>
        <v-list-item-subtitle>5V, 12V, 3V3</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-container>
      <responsive-line-chart :data="data" />
    </v-container>
    <div class="buttons">
      <v-btn @click="addData" color="blue-grey">Add data</v-btn>
      <v-btn @click="filterData" color="blue-grey">Filter data</v-btn>
    </div>
  </v-card>
</template>

<script>
import ResponsiveLineChart from "../ResponsiveLineChart.vue";

export default {
  name: "D3Card",
  components: {
    ResponsiveLineChart,
  },
  data() {
    return {
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      //   data: [1, 1, 1, 1, 1],
    };
  },
  methods: {
    addData() {
      // add random value from 0 to 50 to array
      this.data = [...this.data, Math.round(Math.random() * 50)];
      this.data.shift();
    },
    filterData() {
      this.data = this.data.filter((v) => v <= 35);
    },
  },
};
</script>

<style>
svg {
  /* important for responsiveness */
  display: block;
  fill: none;
  stroke: none;
  width: 100%;
  height: 100%;
  overflow: visible;
  /* background: #eee; */
}

.buttons {
  margin-top: 2rem;
}
</style>
