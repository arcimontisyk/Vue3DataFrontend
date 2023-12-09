<template>
  <v-app-bar :order="localOrder"  flat title="Application bar">
    <template v-slot:append>
      <v-switch
        v-model="localOrder"
        hide-details
        inset
        label="Toggle order"
        true-value="-1"
        false-value="0"
        @change="emitToggleOrder"
      ></v-switch>
    </template>
  </v-app-bar>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    order: Number,
  },
  setup(props, { emit }) {
    const localOrder = ref(props.order);

    watch(
      () => props.order,
      (newVal) => {
        localOrder.value = newVal;
      }
    );

    const emitToggleOrder = () => {
      emit('update:order', localOrder.value);
    };

    return {
      localOrder,
      emitToggleOrder,
    };
  },
};
</script>
