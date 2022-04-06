export const state = () => ({
  counter1: 0,
  counter1received: 0,
  counter2: 0, // with emitBacks option
  counter2received: 0,
})

export const mutations = {
  setCounter1(state, data) {
    state.counter1 = data
  },
  setCounter2(state, data) {
    state.counter2 = data
  },
  increment1(state) {
    state.counter1++
  },
  increment2(state) {
    state.counter2 = state.counter2 + 1
  },
  setCounter1received(state, data) {
    console.log("setCounter1received")
    console.log(data)
    state.counter1received = data
  },
  setCounter2received(state, data) {
    console.log("setCounter2received")
    state.counter2received = data
  },

}

export const actions = {
  setCounter1received(context, data) {
    console.log("setCounter1received")
    context.commit('setCounter1received', data)
  },
  setCounter2received(context, data) {
    console.log("setCounter2received")
    context.commit('setCounter2received', data)
  },
}
