<template>
  <v-card color="">
    <v-row>
      <v-container>

        <Chart v-model:options="chartOptions" />
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        {{ chartOptions }}
      </v-container>
    </v-row>

  </v-card>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart, CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
    CryptoMarket,
    Screener,
    Snaps,
  },
  data() {
    return {
      chartOptions: {
        theme: 'dark',
       // "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "timezone": "Etc/UTC",

        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": true,
        "withdateranges": true,
        "range": "YTD",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "studies": [
          "BB@tv-basicstudies",
          "MASimple@tv-basicstudies"
        ],
      }
    }
  },
  watch: {
    chartOptions(oldV, newV) {
      console.log(newV)
    }
  }
});
</script>