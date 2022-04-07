<template>
  <section>
    <no-ssr>
      <DragCard
        v-for="(card, index) in cards"
        :key="index"
        :index="index"
        :card="card"
      />
    </no-ssr>
  </section>
</template>

<script>
//import DragResize from "~/components/DragResize.vue";
import { mapState } from "vuex";
import DragCard from "~/components/DragCard.vue"
export default {
  components: {
    DragCard
  },
  data() {
    return {
    };
  },
  computed: mapState("cards", ["cards"]),
  mounted() {
    // console.log("interact_new.vue")
    // console.log(this.position)
    // console.log(this.cards)
  },
  methods:{
//        ...mapMutations("cards", ["SET_POSITION"]),
//        ...mapMutations("cards", ["SET_WIDTH"]),
  },
  watch: {
  //  cardPosition: function (newVal, oldVal) {
  //    console.log(newVal.x);
  //    console.log(newVal.y);
  //  },
  },
};
</script>
<style scoped style="scss">
</style>