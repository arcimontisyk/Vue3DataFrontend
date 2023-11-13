<script setup lang="ts">
import TradingCard from "@/components/trading/tradingview-widget-example.vue"
import ChartJSLineChart from "@/components/vue-chartjs/lineChart.vue"
import tradingview from "@/components/tradingview/tradingview.vue";
import tradingviewChart from "@/components/tradingview/tradingview_chart.vue";
import tradingWidget from "@/components/tradingview/widget.vue";
</script>

<template>
  <main>
    <v-row>
      <v-col cols="12">
        <tradingWidget />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <tradingviewChart />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <tradingview />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TradingCard />
      </v-col>
    </v-row>
  </main>
</template>





<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>