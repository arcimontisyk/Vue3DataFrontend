<template>
  <div>
    <component :is="childComponent"> </component>

  </div>
</template>

<script>
// import TestCard from "~/components/testCard.vue";
export default {
  components: {
    // TestCard,
  },
  props: {
    childComponent: {
      type: [String, Object],
      default: "div",
    },
  },
  data() {
    return {
      settings: [true, false],
      // currentComponent: null,
      // menu
      showMenu: false,
      resize: null,
    };
  },
  methods: {

  },
  mounted() {
    this.currentComponent = this.component;
  },
  watch: {
   // resize: function(newVal, oldVal){
   //   console.log(newVal)
   //   this.$emit("update:resize", newVal)
   // }
  },
};
</script>