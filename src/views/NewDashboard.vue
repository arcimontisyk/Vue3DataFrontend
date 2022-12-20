<template>
  <div class="container">
    <div class="target">
      <CommandCard />
    </div>
    <Moveable
      className="moveable"
      v-bind:target="['.target']"
      v-bind:draggable="true"
      v-bind:scalable="true"
      v-bind:rotatable="true"
      @drag="onDrag"
      @scale="onScale"
      @rotate="onRotate"
    />
  </div>
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

  methods: {
    onDrag({ target, transform }) {
      target.style.transform = transform;
    },
    onScale({ target, drag }) {
      target.style.transform = drag.transform;
    },
    onRotate({ target, drag }) {
      target.style.transform = drag.transform;
    },
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

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
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
</style>
