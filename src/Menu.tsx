import React, { useEffect } from 'react'
import { useTypedSelector } from './hooks/useTypesSelector';
import { getBurgers } from './redux/actions';
import { useDispatch } from "react-redux"
import Burger from './Burger';
import Loading from './loading';


const Menu: React.FC = () => {
    const { burgers, error, loading } = useTypedSelector(state => state.burgerReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBurgers())
    }, [dispatch])

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="container">
            <div className="row mt-5">
                {burgers.map(burger => {
                    return <Burger key={burger.id} burger={burger} />
                })}
            </div>
        </div>
    )
}


export default Menu
