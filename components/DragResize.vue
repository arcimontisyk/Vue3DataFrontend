<template>
  <div class="dragresize__item" :style="transformString">
    <slot></slot>
    <v-btn elevation="2" @click="setDraggable(true)">Drag</v-btn>
  </div>
</template>

<script>
import _ from "lodash";
import interact from "interactjs";
export default {
  props: ["src", "x", "y", "w"],
  data() {
    return {
      interactPosition: {
        x: this.x,
        y: this.y,
      },
      interactSize: {
        w: this.w,
      },
      isDraggable: false,
      isResizable: false,
    };
  },
  computed: {
    transformString() {
      const { x, y } = this.interactPosition;
      const { w } = this.interactSize;
      return ` width: ${w}px; transform: translate3D(${x}px, ${y}px, 0)`;
    },
  },
  mounted() {
    this.initModule();
  },
  beforeDestroy() {
    interact(this.$el).unset();
  },
  methods: {
    initModule() {
      const el = this.$el;
      interact(el)
        // .draggable({})
        .on("dragmove", (event) => {
          const x = this.interactPosition.x + event.dx;
          const y = this.interactPosition.y + event.dy;
          this.interactSetPosition({ x, y });
        })
        .on("resizemove", (event) => {
          let x = this.interactPosition.x;
          let y = this.interactPosition.y;
          const w = event.rect.width;
          x += event.deltaRect.left;
          y += event.deltaRect.top;
          this.interactSetSize({ w });
          this.interactSetPosition({ x, y });
        });
    },
    interactSetPosition(coordinates) {
      const { x = 0, y = 0 } = coordinates;
      this.interactPosition = { x, y };
    },
    interactSetSize(sizes) {
      const { w = 0 } = sizes;
      this.interactSize = { w };
    },
    resetzIndex() {
      _.each(this.$parent.$parent.$refs.objContainer.children, (obj, i) => {
        obj.elm.classList.remove("released");
        obj.elm.style.removeProperty("z-index");
      });
    },
    setDraggable(isDraggable) {
      const el = this.$el;
      if (isDraggable) {
        interact(el).draggable({});
      } else {
        this.initModule();
      }
    },
    setResizable(isResizable) {
      const el = this.$el;
      if (isResizable) {
        el.resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          restrictSize: {
            min: { width: 100, height: 100 },
          },
          preserveAspectRatio: true,
          invert: "reposition",
        });
      } else {
        this.initModule();
      }
    },
  },
};
</script>

<style style="scss">
.dragresize__item {
  position: absolute;
  touch-action: none;
  user-select: none;
  z-index: 99;
}
</style>
