<template>
  <!-- <div class="dragresize__item" :style="transformString" @contextmenu="show">
    <component :is="childComponent"> </component>
  </div> -->
  <div>
    <DragResize ref="objProduct" :pos_and_size.sync="pos_and_size">
      <component :is="childComponent" :content="card"> </component>
    </DragResize>
  </div>
</template>

<script>
import DragResize from "@/components/payloadCards/DragResize.vue";
import DataCard from "@/components/payloadCards/DataCard.vue";
import CommandCard from "@/components/payloadCards/CommandCard.vue";
import { cardsStore } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";

const cards = cardsStore();
//import { json } from "body-parser";
export default {
  props: {
    inCard: Object,
    cardIndex: 0,
  },
  components: {
    DragResize,
    DataCard,
    CommandCard,
  },
  data() {
    return {
      childComponent: this.inCard.type,
      card: this.inCard, //getCard(),
      pos_and_size: this.get_pos_and_size(), // { x:0, y: 0, w: -1, h: -1 },
    };
  },
  computed: {
    // computedMethod() {
    // },
  },
  watch: {
    //  inCard(newVal, oldVal) {},
    pos_and_size(newVal, oldVal) {
      console.log(JSON.stringify(newVal));
      console.log("write to socket");
      var dataobject = newVal;
      dataobject.index = this.cardIndex;
      this.$store.commit("UPDATE_CARD_POS_AND_SIZE", dataobject);
      console.log(res);
    },
  },
  mounted() {
    //  this.card = this.getCard();
    this.childComponent = this.inCard.type;
    this.get_pos_and_size();
  },
  beforeDestroy() {},
  methods: {
    get_pos_and_size() {
      return {
        x: this.inCard.pos_x,
        y: this.inCard.pos_y,
        w: this.inCard.size_x,
        h: -1,
      };
    },
  },
};
</script>

<style style="scss"></style>
