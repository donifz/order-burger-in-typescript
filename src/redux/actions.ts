import axios from "axios";
import { Dispatch } from "redux";
import { burgerActionsTypes, burgerConst } from "../types/burgerTypes";






export const getBurgers = () => {

    return async (dispatch: Dispatch<burgerActionsTypes>) => {
        try {
            dispatch({ type: burgerConst.FETCH_BURGERS })
            const response = await axios.get("http://localhost:4000/menu")
            dispatch({ type: burgerConst.FETCH_BURGERS_SUCCESS, payload: response.data })

        } catch (e) {
            dispatch({ type: burgerConst.FETCH_BURGERS_ERROR, payload: "Произошла ошибка" })
        }



    }

}