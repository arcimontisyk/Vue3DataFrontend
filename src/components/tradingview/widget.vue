<template>
  <div class="tradingview-widget-container__widget"></div>

</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: "tradingview",
  props: ["data"],
  setup(props) {
    // create ref to pass to D3 for DOM manipulation
    const svgRef = ref(null);

    // this creates another ref to observe resizing, 
    // which we will attach to a DIV,
    // since observing SVGs with the ResizeObserver API doesn't work properly

    //const { resizeRef, resizeState } = useResizeObserver();

    onMounted(() => {

      const widgetPlaceholder = document.getElementsByClassName('tradingview-widget-container__widget')[0];
      widgetPlaceholder.replaceChildren(); // empty placeholder
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "interval": "1m",
        "width": 425,
        "isTransparent": false,
        "height": 450,
        "symbol": "NASDAQ:AAPL",
        "showIntervalTabs": true,
        "displayMode": "single",
        "locale": "de_DE",
        "colorTheme": "dark"
      });
      widgetPlaceholder.appendChild(script);

    });

    // return refs to make them available in template
    return {};
  },
};

</script>


