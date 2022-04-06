<template>
  <div id="app">
    <Grid />
    <Draggable />
    <Draggable />
  </div>
</template>

<script>
import Draggable from "~/components/interact_draggable";
import Grid from "~/components/interact_grid";

export default {
  name: "App",
  components: {
    Draggable,
    Grid,
  },
};
</script>

<style style="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1px solid #333;


  overflow: auto;
  position: relative;
}
</style>
