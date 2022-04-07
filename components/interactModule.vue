<template>
  <div @contextmenu="show">
    <component :is="childComponent"> </component>
    <v-menu
      v-model="showMenu"
      :position-y="y"
      :position-x="x"
      absolute
      offset-y
    >
      <v-list flat subheader three-line>
        <v-subheader>General</v-subheader>

        <v-list-item-group v-model="settings" multiple active-class="">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  v-model="resize"
                  :input-value="active"
                  :label="'Resize container'"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle
                  >Automatically add home screen widgets when downloads
                  complete</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
      {{ x }}
  {{ y }}
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
      y: 0,
      x: 0,
      items: [{ title: "resize" }, { title: "edit" }],
      resize: null,
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
    menuItemClicked(e) {},
  },
  mounted() {
    this.currentComponent = this.component;
  },
  watch: {
    resize: function(newVal, oldVal){
      console.log(newVal)
      this.$emit("update:resize", newVal)
    }
  },
};
</script>