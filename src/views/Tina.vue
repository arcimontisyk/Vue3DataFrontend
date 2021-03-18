<template>
  <div>
    <Moveable
      class="moveable"
      v-bind="moveable"
      @drag="handleDrag"
    >
      <cc />
    </Moveable>
  </div>
</template>

<script>
import Moveable from "vue-moveable";
import cc from "@/components/command_card.vue";
export default {
  components: { cc, Moveable },
  data() {
    return {
      moveable: {
        draggable: true,
        throttleDrag: 0,
        resizable: false,
        throttleResize: 1,
        keepRatio: false,
        scalable: false,
        throttleScale: 0,
        rotatable: false,
        throttleRotate: 0,
        pinchable: false, // ["draggable", "resizable", "scalable", "rotatable"]
        origin: false,
      },
    };
  },
  methods: {
    handleDrag({ target, transform }) {
      console.log("onDrag left, top", transform);
      target.style.transform = transform;
    },
  },
};
</script>
<style  scoped>

</style>