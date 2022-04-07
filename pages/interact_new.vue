<template>
  <section>
    <no-ssr>
      <DragResize ref="objProduct" :y="0" :x="0"  :childComponent="currentComponent" />
    </no-ssr>
  </section>
</template>

<script>
import TestCard from "~/components/testCard.vue";
import TestCard2 from "~/components/testCard2.vue";
import DragResize from "~/components/DragResize.vue";
export default {
  components: {
    DragResize,
    TestCard,
    TestCard2,
  },
  data() {
    return {
      currentComponent: "TestCard2",
    };
  },
  mounted() {},
};
</script>

<style scoped style="scss">
</style>
