<template>
  <div class="tradingview-widget-container__chart" style="height:100%;width:100%">
    <div id="tradingview_71e34" style="height:calc(100% - 32px);width:100%"></div>
    <div class="tradingview-widget-copyright"><a href="https://de.tradingview.com/" rel="noopener nofollow"
        target="_blank"><span class="blue-text">Alle Märkte bei TradingView verfolgen</span></a></div>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: "TradingviewChart",
  props: ["data"],
  setup(props) {
    // create ref to pass to D3 for DOM manipulation
    const svgRef = ref(null);

    // this creates another ref to observe resizing, 
    // which we will attach to a DIV,
    // since observing SVGs with the ResizeObserver API doesn't work properly

    //const { resizeRef, resizeState } = useResizeObserver();

    onMounted(() => {

      const widgetPlaceholder = document.getElementsByClassName('tradingview-widget-container__chart')[0];
      widgetPlaceholder.replaceChildren(); // empty placeholder
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "de_DE",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_71e34"
      });
      widgetPlaceholder.appendChild(script);

    });

    // return refs to make them available in template
    return {};
  },
};

</script>

