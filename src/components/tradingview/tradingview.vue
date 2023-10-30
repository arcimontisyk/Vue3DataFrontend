<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/technicals/"
        rel="noopener" target="_blank"><span class="blue-text">AAPL stock analysis</span></a> by TradingView</div>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: "ResponsiveLineChart",
  props: ["data"],
  setup(props) {
    // create ref to pass to D3 for DOM manipulation
    const svgRef = ref(null);

    // this creates another ref to observe resizing, 
    // which we will attach to a DIV,
    // since observing SVGs with the ResizeObserver API doesn't work properly
    
    //const { resizeRef, resizeState } = useResizeObserver();

    onMounted(() => {

      const widgetPlaceholder = document.getElementsByClassName('tradingview-widget-container')[0];
      widgetPlaceholder.replaceChildren(); // empty placeholder
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "interval": "1h",
        "width": 425,
        "isTransparent": false,
        "height": 450,
        "symbol": "NASDAQ:AAPL",
        "showIntervalTabs": true,
        "locale": "en",
        "colorTheme": "dark"
      });
      widgetPlaceholder.appendChild(script);

    });

    // return refs to make them available in template
    return {};
  },
};

</script>