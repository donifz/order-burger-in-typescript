import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useTypedSelector } from './hooks/useTypesSelector';
import { getBurgers } from './redux/actions';
import burgerTop from "./assets/burgerTop.png";
import burgerBottom from "./assets/burgerBottom.png";
import burgerCotSalad from "./assets/burgerCotSalad.png";
import baconasd from "./assets/baconasd.png";
import cheese from "./assets/cheese.png";
import { Alert, Button, ButtonGroup } from 'react-bootstrap';
import Loading from './loading';


interface burgerEditTypes {
    match: object
}

const BugerEdit: React.FC<burgerEditTypes> = (props) => {
    const { burgers, error, loading } = useTypedSelector(state => state.burgerReducer)
    const [ingrid, setIngrid] = useState<any | undefined>({})
    const [startValue, setStartValue] = useState<any | undefined>({})
    const [message, setMessage] = useState(false)

    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBurgers())
        setIngrid(burgers && burgers.find(item => item.id === id))
        setStartValue(burgers && burgers.find(item => item.id === id))
        alertTimer()
    }, [])
    useEffect(() => {

        alertTimer()
    }, [message])



    const moreBacon = () => {
        setIngrid({ ...ingrid, bacon: ingrid.bacon + 1 })
    }
    const lessBacon = () => {
        setIngrid({ ...ingrid, bacon: ingrid.bacon - 1 })
    }
    const moreSalad = () => {
        setIngrid({ ...ingrid, salad: ingrid.salad + 1 })
    }
    const lessSalad = () => {
        setIngrid({ ...ingrid, salad: ingrid.salad - 1 })
    }
    const moreCheese = () => {
        setIngrid({ ...ingrid, cheese: ingrid.cheese + 1 })
    }
    const lessCheese = () => {
        setIngrid({ ...ingrid, cheese: ingrid.cheese - 1 })
    }
    const submitBurger = () => {
        localStorage.setItem('order', JSON.stringify(ingrid));
        setMessage(true)
        console.log(ingrid)

    }
    const alertTimer = () => {
        setTimeout(() => message === true ? setMessage(false) : false, 1000)

    }



    if (loading) {
        return <Loading />
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>{message && <Alert transition={false} variant="success">
            Your {ingrid && ingrid.name} added to cart
</Alert>}
            <h1 className="mt-2">{ingrid && ingrid.name}</h1>

            <div className="d-flex flex-column w-100 align-items-center ">
                <ButtonGroup className="mb-2 " aria-label="Basic example">
                    <Button disabled={ingrid && ingrid.salad < 1 ? true : false} variant="secondary" onClick={lessSalad}>less</Button>
                    <Button variant="secondary" disabled>{ingrid && ingrid.salad < 1 ? "No salad" : `Salad ${ingrid && ingrid.salad}`}</Button>
                    <Button variant="secondary" onClick={moreSalad}>more</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 " aria-label="Basic example">
                    <Button disabled={ingrid && ingrid.cheese < 1 ? true : false} variant="secondary" onClick={lessCheese}>less</Button>
                    <Button variant="secondary" disabled>{ingrid && ingrid.cheese < 1 ? "No cheese" : `Cheese ${ingrid && ingrid.cheese}`}</Button>
                    <Button variant="secondary" onClick={moreCheese}>more</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 " aria-label="Basic example ">
                    <Button disabled={ingrid && ingrid.bacon < 1 ? true : false} variant="secondary" onClick={lessBacon}>less</Button>
                    <Button variant="secondary" disabled>{ingrid && ingrid.bacon < 1 ? "No bacon" : `Bacon ${ingrid && ingrid.bacon}`}</Button>
                    <Button variant="secondary" onClick={moreBacon}>more</Button>
                </ButtonGroup>
                <div className="d-flex ">
                    <Button className="mr-5" variant="success" onClick={submitBurger}>Submit</Button>
                    <Button variant="danger" onClick={() => setIngrid(startValue)}>Reset</Button>
                </div>

            </div>

            <div className="d-flex flex-column w-100 align-items-center" >
                <img src={burgerTop} alt="burger-img" />
                {Array.from({ length: ingrid && ingrid.salad }, (v, k) => k)
                    .map((item, i) => <img className="mb-1" key={i} style={{ width: "400px", height: "40px", borderRadius: "20px" }} src={burgerCotSalad} alt="burger-img" />)}
                {Array.from({ length: ingrid && ingrid.cheese }, (v, k) => k)
                    .map((item, i) => <img key={i} style={{ width: "400px", height: "30px" }} src={cheese} alt="burger-bacon" />)}
                {Array.from({ length: ingrid && ingrid.bacon }, (v, k) => k)
                    .map((item, i) => <img key={i} style={{ width: "400px" }} src={baconasd} alt="burger-bacon" />)}

                <img src={burgerBottom} alt="burger-img" />
            </div>

        </div>
    )
}

export default BugerEdit
