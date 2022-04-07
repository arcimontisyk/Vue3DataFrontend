<template>
  <div class="dragresize__item" :style="transformString" @contextmenu="show">
    <div v-if="isResizable">
      <div class="resizer tl"></div>
      <div class="resizer bl"></div>
      <div class="resizer tr"></div>
      <div class="resizer br"></div>
    </div>
    <v-menu
      v-model="menu.showMenu"
      :position-y="position.y"
      :position-x="position.x"
      absolute
      offset-y
    >
      <v-list flat subheader three-line>
        <v-subheader>General</v-subheader>

        <v-list-item-group v-model="menu.settings" multiple active-class="">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  v-model="isResizable"
                  :input-value="active"
                  :label="'Resize container'"
                  :title="'resize'"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  v-model="isDraggable"
                  :input-value="active"
                  :label="'Drag container'"
                  :title="'drag'"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <slot></slot>
  </div>
</template>

<script>
import _ from "lodash";
import interact from "interactjs";
export default {
  props: {
    src: null,
    x_initial: 0,
    y_initial: 0,
    w: 10,
  },
  // props: ["src", "x", "y", "w"],
  data() {
    return {
      // menu
      menu: {
        showMenu: false,
        settings: [true, false],
        y: 0,
        x: 0,
      },
      //interact
      position: {
        x: this.x_initial,
        y: this.y_initial,
      },
      interactSize: {
        w: this.w,
      },
      isDraggable: false,
      isResizable: false,
    };
  },
  computed: {
    transformString() {
      const { x, y } = this.position;
      const { w } = this.interactSize;
      return ` width: ${w}px; transform: translate3D(${x}px, ${y}px, 0)`;
    },
  },
  mounted() {
    this.initModule();
    this.currentComponent = this.component;
  },
  beforeDestroy() {
    interact(this.$el).unset();
  },
  methods: {
    initModule() {
      const el = this.$el;
      interact(el)
        // .draggable({})
        .on("dragmove", (event) => {
          const x = this.position.x + event.dx;
          const y = this.position.y + event.dy;
          this.interactSetPosition({ x, y });
        })
        .on("resizemove", (event) => {
          let x = this.position.x;
          let y = this.position.y;
          const w = event.rect.width;
          x += event.deltaRect.left;
          y += event.deltaRect.top;
          this.interactSetSize({ w });
          this.interactSetPosition({ x, y });
        })
        .on("dragend", (event) => {
          this.savePosition();
        })
        .resizable({
          enabled: false,
          edges: { left: true, right: true, bottom: true, top: true },
          restrictSize: {
            min: { width: 100, height: 100 },
          },
          preserveAspectRatio: true,
          invert: "reposition",
        });
      interact(el).draggable({ enabled: false });
    },
    interactSetPosition(coordinates) {
      const { x = 0, y = 0 } = coordinates;
      this.position = { x, y };
    },
    interactSetSize(sizes) {
      const { w = 0 } = sizes;
      this.interactSize = { w };
    },
    resetzIndex() {
      _.each(this.$parent.$parent.$refs.objContainer.children, (obj, i) => {
        obj.elm.classList.remove("released");
        obj.elm.style.removeProperty("z-index");
      });
    },
    setDraggable(isDraggable) {
      const el = this.$el;
      interact(el).draggable({ enabled: isDraggable });
    },
    setResizable(isResizable) {
      const el = this.$el;
      interact(el).resizable({ enabled: isResizable });
    },
    // Menu
    show(e) {
      e.preventDefault();
      this.menu.showMenu = false;
      this.menu.x = e.clientX;
      this.menu.y = e.clientY;
      this.$nextTick(() => {
        this.menu.showMenu = true;
      });
    },
    savePosition() {
      this.$emit("update:position", this.position);
    },
    menuItemClicked(e) {
      console.log(e.title);
    },
  },
  watch: {
    isDraggable: function (newVal, oldVal) {
      this.setDraggable(newVal);
    },
    isResizable: function (newVal, oldVal) {
      this.setResizable(newVal);
    },
  },
};
</script>

<style style="scss">
.dragresize__item {
  position: absolute;
  touch-action: none;
  user-select: none;
  z-index: 99;
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
</style>