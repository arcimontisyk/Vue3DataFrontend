<script setup lang="ts">
import tradingview from "@/components/tradingview/tradingview.vue";
import tradingviewChart from "@/components/tradingview/tradingview_chart.vue";
import tradingWidget from "@/components/tradingview/widget.vue";
</script>

<template>
  <main>
    <v-row>
      <v-col cols="6">
        <tradingWidget />
      </v-col>
      <v-col cols="6">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <tradingviewChart />
      </v-col>
      <v-col cols="6">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <tradingview />
      </v-col>
      <v-col cols="6">
      </v-col>
    </v-row>


  </main>
</template>
