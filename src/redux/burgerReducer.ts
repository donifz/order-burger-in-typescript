import { burgerState, burgerActionsTypes, burgerConst } from "../types/burgerTypes"

let initialState: burgerState = {
    burgers: [],
    loading: false,
    error: ""
}

export const burgerReducer = (state = initialState, action: burgerActionsTypes): burgerState => {
    switch (action.type) {
        case burgerConst.FETCH_BURGERS:
            return { ...state, loading: true }
        case burgerConst.FETCH_BURGERS_SUCCESS:
            return { ...state, burgers: action.payload, loading: false }
        case burgerConst.FETCH_BURGERS_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }



}