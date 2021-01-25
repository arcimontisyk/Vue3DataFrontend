import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    streamConfig: [],
    streamData: {}
  },
  mutations: {
    setStreamData(state, data) {
      state.streamData = data;
    },
    setStreamConfig(state, jsonMessage) {
      state.streamConfig = jsonMessage;
    },
  },
  actions: {
    async getStreamConfig(context) {
      const { data } = await axios.get(
        'http://localhost:5000/config',
      ).catch();
      context.commit('setStreamConfig', data);
    },
    //    async getValues(context, { jointNr }) {
    async getDataStream(context) {
      let es = new EventSource('http://127.0.0.1:5000/datastream');
      es.addEventListener('message', event => {
        let data = JSON.parse(event.data);
        console.log(event.data)
        context.commit('setStreamData', data)
      }, false);

      console.log("getDataStream")
      //  const { data } = await axios.get(
      //    // `http://localhost:5000/datastream${jointNr}`,
      //    'http://localhost:5000/datastream',
      //  );
      //  context.commit('setStreamData', data);

   //   axios.get('http://127.0.0.1:5000/datastream', {
   //     crossdomain: true,
   //   }).then(function (response) {
   //     console.log("response:")
   //     console.log(response)
   //     console.log(response.data)
   //     context.commit('setStreamData', response.data);
   //   }).catch(function (error) {
   //     if (error.response) {
   //       console.log(error.response.headers);
   //     }
   //     else if (error.request) {
   //       console.log(error.request);
   //     }
   //     else {
   //       console.log(error.message);
   //     }
   //     console.log(error.config);
   //   });
    },
  },
});