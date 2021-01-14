import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: null,
    streamconfig: [],
    values: [],
    statusbits: [],
  },
  mutations: {
    setValues(state, data, jointNr) {
      state.values[jointNr] = data;
    },
    setPost(state, data) {
      state.post = data;
    },
    setMessage(state, jsonMessage) {
      state.streamconfig = jsonMessage;
    },
  },
  actions: {
    async getPost(context, { id }) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      context.commit('setPost', data);
    },
    async receiveMessageStream(context) {
      const { data } = await axios.get(
        'http://localhost:5000/values/1',
      ).catch();
      context.commit('setMessage', data);
    },
    async getTest(context, { id }) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      context.commit('setPost', data);
    },
    async getValues(context, { jointNr }) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/values/${jointNr}`,
      );
      context.commit('setPost', data);
    },
  },
  modules: {
  },
});
