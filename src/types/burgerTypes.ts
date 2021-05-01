export interface burgerState {
    burgers: any[],
    loading: boolean,
    error: string | null | undefined

}
interface fetchBurgerAction {
    type: burgerConst.FETCH_BURGERS,
}

interface fetchBurgerActionSucces {
    type: burgerConst.FETCH_BURGERS_SUCCESS,
    payload: any[],
}

interface fetchBurgerActionError {
    type: burgerConst.FETCH_BURGERS_ERROR,
    payload: string,
}


export enum burgerConst {
    FETCH_BURGERS = "FETCH_BURGERS",
    FETCH_BURGERS_SUCCESS = "FETCH_BURGERS_SUCCESS",
    FETCH_BURGERS_ERROR = "FETCH_BURGERS_ERROR"
}

export type burgerActionsTypes = fetchBurgerAction | fetchBurgerActionSucces | fetchBurgerActionError