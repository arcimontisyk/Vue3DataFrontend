<template>
  <v-container>
    <div class="target">
      <CommandCard />
    </div>
    <Moveable
      className="moveable"
      v-bind:target="['.target']"
      v-bind="moveable"
      @drag="handleDrag"
      @resize="handleResize"
      @scale="handleScale"
      @rotate="handleRotate"
      @warp="handleWarp"
    />
  </v-container>
</template>
<script>
import Moveable from "vue3-moveable";
import DataCard from "@/components/payloadCards/DataCard.vue";
import CommandCard from "@/components/payloadCards/CommandCard.vue";

export default {
  name: "app",
  components: {
    Moveable,
    DataCard,
    CommandCard,
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 1,
      resizable: true,
      throttleResize: 1,
      keepRatio: false,
      scalable: false,
      throttleScale: 0.01,
      rotatable: true,
      throttleRotate: 0.2,
      pinchable: true,
      origin: false,
    },
    states: {
      scalable: "Scalable",
      resizable: "Resizable",
      warpable: "Warpable",
    },
    currentState: "scalable",
  }),
  methods: {
    handleDrag({ target, transform }) {
      console.log("onDrag", transform);
      target.style.transform = transform;
    },
    handleResize({ target, width, height }) {
      console.log("onResize", width, height);
      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
    },
    handleScale({ target, transform }) {
      console.log("onScale", transform);
      target.style.transform = transform;
    },
    handleRotate({ target, transform }) {
      console.log("onRotate", transform);
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      console.log("onWarp", transform);
      target.style.transform = transform;
    },
    clearAllStates() {
      Object.keys(this.states).forEach((key) => {
        this.moveable[key] = false;
      });
    },
  },
};
</script>

<style lang="scss">
.moveable {
  font-family: "Roboto", sans-serif;
  position: relative;
  text-align: center;
  font-size: 40px;
  margin: 0 auto;
  font-weight: 100;
  letter-spacing: 1px;
}

.moveable span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;

  white-space: nowrap;
}
</style>
