<template>
  <DragResize
    ref="objProduct"
    :y_initial="card.position.x"
    :x_initial="card.position.y"
    v-bind:position.sync="cardPosition"
    :card="Xcard"
  >
    <component :is="childComponent"> </component>
  </DragResize>
</template>

<script>
import { mapMutations } from "vuex";

import TestCard from "~/components/testCard.vue";
import TestCard2 from "~/components/testCard2.vue";
import DragResize from "~/components/DragResize.vue";
export default {
  components: {
    DragResize,
    TestCard,
    TestCard2,
  },
  props: {
    card: Object,
    index: Number
    // childComponent: {
    //   type: [String, Object],
    //   default: "div",
    // },
  },
  data() {
    return {
      childComponent: {
        type: [String, Object],
        default: "div",
      },
      cardPosition: { x: 0, y: 0 },
      Xcard: null
    };
  },
  //  computed: mapState("cards", ["cards"]),
  mounted() {
    this.Xcard = this.card
    console.log(this.card)
    console.log("Childcomponent type: " + this.card.type);
    console.log(this.card.position);
    this.childComponent = TestCard; //this.card.type,
    this.cardPosition = {
      x: this.card.position.x,
      y: this.card.position.y,
    };
    console.log(this.card)
  },
  methods: {
    ...mapMutations("cards", ["SET_POSITION"]),
    ...mapMutations("cards", ["SET_WIDTH"]),
  },
  watch: {
    cardPosition: function (newVal, oldVal) {
      console.log("new card position:")
      console.log(newVal.x);
      console.log(newVal.y);
      console.log("index: " + this.index);
      this.SET_POSITION(this.index, newVal);
    },
  },
};
</script>
<style scoped style="scss">
</style>
