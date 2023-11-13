<script lang="ts" setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
import { GridLayout, GridItem } from "vue3-grid-layout-next"

import tradingview from "@/components/tradingview/tradingview.vue";
import tradingviewChart from "@/components/tradingview/tradingview_chart.vue";
import tradingWidget from "@/components/tradingview/widget.vue";

const responsive = ref(true)
const layout = ref([
//  { "x": 0, "y": 0, "w": 0, "h": 0, "i": "0", comp: "tradingview" },
//  { "x": 20, "y": 0, "w": 0, "h": 0, "i": "1", comp: "tradingview" },
 //{ "x": 10, "y": 10, "w": 0, "h": 0, "i": "2" },
    { "x": 2, "y": 0, "w": 10, "h": 20, "i": "1", comp: "tradingWidget"  },
   // { "x": 4, "y": 0, "w": 10, "h": 20, "i": "2" , comp: "tradingview" },
   // { "x": 6, "y": 0, "w": 10, "h": 20, "i": "3", comp: "tradingview"  },
  //  { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4" },
  //  { "x": 10, "y": 0, "w": 2, "h": 3, "i": "5" },
  //  { "x": 0, "y": 5, "w": 2, "h": 5, "i": "6" },
  //  { "x": 2, "y": 5, "w": 2, "h": 5, "i": "7" },
  //  { "x": 4, "y": 5, "w": 2, "h": 5, "i": "8" },
  //  { "x": 6, "y": 3, "w": 2, "h": 4, "i": "9" },
  //  { "x": 8, "y": 4, "w": 2, "h": 4, "i": "10" },
  //  { "x": 10, "y": 4, "w": 2, "h": 4, "i": "11" },
  //  { "x": 0, "y": 10, "w": 2, "h": 5, "i": "12" },
  //  { "x": 2, "y": 10, "w": 2, "h": 5, "i": "13" },
  //  { "x": 4, "y": 8, "w": 2, "h": 4, "i": "14" },
  //  { "x": 6, "y": 8, "w": 2, "h": 4, "i": "15" },
  //  { "x": 8, "y": 10, "w": 2, "h": 5, "i": "16" },
  //  { "x": 10, "y": 4, "w": 2, "h": 2, "i": "17" },
  //  { "x": 0, "y": 9, "w": 2, "h": 3, "i": "18" },
  //  { "x": 2, "y": 6, "w": 2, "h": 2, "i": "19" }
])
// const layout = reactive([]) // will cause some bug

// it will work, when responsive is false
// const layout = reactive([])

interface obj {
  [key: string]: object
}

const layoutComponent: obj = {
  "tradingviewChart": tradingviewChart,
  "tradingview": tradingview,
  "tradingWidget": tradingWidget
}

function getComponent(comp: string) {
  return layoutComponent[comp]
}


</script>

<template>
  <div class="layout">
    <grid-layout :layout.sync="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true"
      :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">

      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">

        <component :is="getComponent(item.comp)"></component>

      </grid-item>
    </grid-layout>

  </div>
</template>


<style scoped>
.vue-grid-layout {}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>