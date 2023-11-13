<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/technicals/"
        rel="noopener" target="_blank"><span class="blue-text">AAPL stock analysis</span></a> by TradingView</div>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue'
import VueGridLayout from 'vue-grid-layout';

export default {
       components: {
           GridLayout: VueGridLayout.GridLayout,
           GridItem: VueGridLayout.GridItem
       },
   // ... data, methods, mounted (), etc.
   }

</script>