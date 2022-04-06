<template>
  <section>
    <no-ssr>
      <drag-resize ref="objProduct" :x="0" :y="0" :w="200">
        <ExampleCard />
        <div class="resizer tl"></div>
        <div class="resizer bl"></div>
        <div class="resizer tr"></div>
        <div class="resizer br"></div>
      </drag-resize>
    </no-ssr>
  </section>
</template>

<script>
import DragResize from "~/components/DragResize.vue";
import ExampleCard from "~/components/exampleCard.vue"
export default {
  components: {
    DragResize, ExampleCard
  },
};
</script>

<style style="scss">
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
