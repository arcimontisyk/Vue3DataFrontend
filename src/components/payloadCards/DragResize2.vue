<template>
  <div class="container">
    <div class="target" ref="target">Vue Moveable</div>
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
// `VueMoveableInstance` is Vue Moveable's Instance type.
import Moveable from "vue3-moveable";
import VueMoveableInstance from "vue3-moveable";

export default {
  components: {
    Moveable,
  },
  methods: {
    onDrag({ transform }) {
      this.$refs.target.style.transform = transform;
    },
    onScale({ drag }) {
      this.$refs.target.style.transform = drag.transform;
    },
    onRotate({ drag }) {
      this.$refs.target.style.transform = drag.transform;
    },
  },
};
</script>
