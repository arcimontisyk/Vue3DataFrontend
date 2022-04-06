<template>
  <div @contextmenu="show">
    <component :is="childComponent">
    </component>
    <v-menu
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
      // currentComponent: null,
      // menu
      showMenu: false,
      x: 0,
      y: 0,
      items: [{ title: "resize" }, { title: "edit" }],
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
    menuItemClicked(e){
      
    }
  },
  mounted() {
    this.currentComponent = this.component;
  },
};
</script>