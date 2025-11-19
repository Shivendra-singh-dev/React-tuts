export default function countReducer(state, action) {
    switch (action.type) {
        case "INC":
            return { num: state.num + 1 }
        case "DEC":
            if (state.num > 1)
                return { num: state.num - 1 }
            else
                return state
        default:
            return state
    }
}