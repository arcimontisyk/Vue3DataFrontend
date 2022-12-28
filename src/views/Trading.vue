<template>
  <v-layout>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
        <!--    <TradingCard />--> 
          </v-col>
          <v-col>
           <ChartJSLineChart /> 
          </v-col>
          <v-col>
            <v-row>

            </v-row>
            <v-row>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
//import { tmtcStore } from "../stores/tmtc";
//import { apiStore } from "../stores/api";
import TradingCard from "@/components/trading/tradingview-widget-example.vue"
import ChartJSLineChart from "@/components/vue-chartjs/lineChart.vue"

const channelName = "default";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
