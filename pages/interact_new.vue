<template>
  <section>
    <no-ssr>
      <drag-resize ref="objProduct" :y="0" :x="0">
        <InteractModule :childComponent="currentComponent" v-bind:resize.sync="resizeModule" />
        <div v-if="resizeModule">
          <div class="resizer tl"></div>
          <div class="resizer bl"></div>
          <div class="resizer tr"></div>
          <div class="resizer br"></div>
        </div>
      </drag-resize>

    </no-ssr>
  </section>
</template>

<script>
import TestCard from "~/components/testCard.vue";
import DragResize from "~/components/DragResize.vue";
import InteractModule from "../components/interactModule.vue";
export default {
  components: {
    DragResize,
    TestCard,
    InteractModule
},
  data() {
    return {
      resizeModule: false,
      currentComponent: TestCard
    };
  },
  methods: {
    show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.y = e.clientY;
      this.x = e.clientX;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    },
  },
  mounted(){

  }
};
</script>

<style scoped style="scss">

body {
  background: black;
}
.resizer {
  width: 10px;
  height: 10px;
  background-color: white;
  position: absolute;
}
.resizer.tl {
  top: -1rem;
  left: -1rem;
}
.resizer.bl {
  bottom: -1rem;
  left: -1rem;
}
.resizer.tr {
  top: -1rem;
  right: -1rem;
}
.resizer.br {
  bottom: -1rem;
  right: -1rem;
}
.dragresize__item img {
  width: 100%;
}
</style>
