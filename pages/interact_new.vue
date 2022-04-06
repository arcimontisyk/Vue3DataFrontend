<template>
  <section>
    <no-ssr>
      <drag-resize ref="objProduct" :x="0" :y="0">
        <InteractModule :childComponent="currentComponent" />
        <div v-if="resize">
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
      resize: false,
      currentComponent: TestCard
    };
  },
  methods: {
    show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    },
  },
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
