<template>
  <!-- <div class="dragresize__item" :style="transformString" @contextmenu="show">
    <component :is="childComponent"> </component>
  </div> -->
  <div>
    <DragResize />
    <!--  <component :is="DataCard" :content="cards.cards[0]"> </component> -->

    <!--
    <DragResize ref="objProduct" :pos_and_size.sync="pos_and_size">
      <component :is="childComponent" :content="card"> </component>
    </DragResize>
    -->
  </div>
</template>

<script lang="ts">
export interface InCard {
  pos_x: number;
  pos_y: number;
  size_x: number;
}

export interface PosSize {
  x: number;
  y: number;
  z: number;
  w: number;
}
</script>

<script lang="ts" setup>
import { ref, onMounted, watchEffect } from "vue";
import DragResize from "@/components/payloadCards/DragResize.vue";
import DataCard from "@/components/payloadCards/DataCard.vue";
import CommandCard from "@/components/payloadCards/CommandCard.vue";
import { cardsStore } from "../../stores/cards";
import { Card } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";

const cards = cardsStore();
const tmtc = tmtcStore();

const pos_and_size = ref({
  x: 100,
  y: 100,
  z: 100,
  w: 100,
});

const props = defineProps({
  inCard: Object,
  cardIndex: Number,
});

//const props = withDefaults(defineProps<CardProps>(), {
//  inCard: {
//    pos_x: 0,
//  pos_y: 0,
//  size_x: 0,
//  }
//})

watchEffect(() => {
  //    pos_and_size(newVal, oldVal) {
  //      console.log(JSON.stringify(newVal));
  //      console.log("write to socket");
  //      var dataobject = newVal;
  //      dataobject.index = this.cardIndex;
  //      //this.$store.commit("UPDATE_CARD_POS_AND_SIZE", dataobject);
  //      this.$store.updateCardsPosAndSize(dataobject);
  //      console.log(res);
  //    },
});

onMounted(() => {
  //    this.childComponent = this.inCard.type;
  //    this.get_pos_and_size();
});

//function get_pos_and_size() {
//  return {
//    x: inCard.pos_x,
//    y: inCard.pos_y,
//    w: inCard.size_x,
//    h: -1,
//  };
//},

//const props = withDefaults(defineProps<Card>(), {});

//import { json } from "body-parser";
//export default {
//  setup() {
//    cards: cardsStore();
//  },
//  props: {
//    inCard: Object,
//    cardIndex: 0,
//  },
//  components: {
//    DragResize,
//    DataCard,
//    CommandCard,
//  },
//  data() {
//    return {
//      childComponent: this.inCard.type,
//      card: this.inCard, //getCard(),
//      pos_and_size: this.get_pos_and_size(), // { x:0, y: 0, w: -1, h: -1 },
//    };
//  },
//  computed: {
//    // computedMethod() {
//    // },
//  },
//  watch: {
//    //  inCard(newVal, oldVal) {},
//    pos_and_size(newVal, oldVal) {
//      console.log(JSON.stringify(newVal));
//      console.log("write to socket");
//      var dataobject = newVal;
//      dataobject.index = this.cardIndex;
//      //this.$store.commit("UPDATE_CARD_POS_AND_SIZE", dataobject);
//      this.$store.updateCardsPosAndSize(dataobject);
//      console.log(res);
//    },
//  },
//  mounted() {
//    //  this.card = this.getCard();
//    this.childComponent = this.inCard.type;
//    this.get_pos_and_size();
//  },
//  beforeDestroy() {},
//  methods: {
//    get_pos_and_size() {
//      return {
//        x: this.inCard.pos_x,
//        y: this.inCard.pos_y,
//        w: this.inCard.size_x,
//        h: -1,
//      };
//    },
//  },
//};
</script>
