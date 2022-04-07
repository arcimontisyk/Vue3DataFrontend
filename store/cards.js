export const state = () => ({
    cards: [{
        x: 0, y: 0,
        position: { x: 10, y: 20 },
        width: 0,
        type: "TestCard"
    }],
})

export const mutations = {
    SET_POSITION(state, cardIndex, newPos) {
        console.log("index: " + cardIndex)
        state.cards[cardIndex].position = newPos
    },
    SET_WIDTH(state, cardIndex, newWidth) {
        state.cards[cardIndex].position = newWidth
    }
}

export const actions = {
    setX(context, data) {
        console.log("setCounter1received")
        context.commit('setCounter1received', data)
    },

}
