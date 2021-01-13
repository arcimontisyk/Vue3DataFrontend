<template>
  <div id="axios-test">
    <button @click="getPost">get post</button>
    <button @click="getMessage">get message</button>
    <p>{{ post }}</p>
    <p>{{ message }}</p>
    <p>{{ values }} </p>
  </div>
</template>

<script>

export default {
  name: 'axiostest',
  data: function () {
    return {
      joint_nr: this.props.joint_nr
    };
  },
  props: {
    jointNr: Number,
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    message() {
      return this.$store.state.streamconfig;
    },
    values() {
      return this.$store.state.values[this.props.joint_nr-1];
    },
  },
  methods: {
    getPost() {
      this.$store.dispatch('getPost', { id: 1 });
    },
    getMessage() {
      this.$store.dispatch('receiveMessageStream');
    },
    getValues() {
      this.$store.dispatch('getValues', { jointNr: 1 });
    },
  },
  created() {
    this.getValues();
  },
};
</script>