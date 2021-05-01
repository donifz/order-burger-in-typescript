import React, { useState } from 'react'
import { Button, ButtonGroup, Figure } from 'react-bootstrap'

type localCart = {
    bacon: number | null
    cheese: number | null
    id: string | null
    img: string | null
    name: string | null
    salad: number | null
}

const BurgerCart: React.FC = () => {
    const [count, setCount] = useState(1)
    if (!localStorage.getItem('order')) {

        return <h1>no burgers in cart</h1>
    }

    let orderString = localStorage.getItem('order')
    let order: localCart = JSON.parse(orderString || '')
    const clearLocal = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="mt-3">
            <Figure>
                <Figure.Image
                    width={400}
                    height={400}
                    alt="400x400"
                    src={order.img || ""}
                />
                <Figure.Caption>
                    <h1>{order.name}</h1>
                    <h3>Cheese {order.cheese}</h3>
                    <h3>Bacon {order.bacon}</h3>
                    <h3>Salad {order.salad}</h3>
                </Figure.Caption>
                <div><ButtonGroup className="mt-2 " aria-label="Basic example">
                    <Button disabled={count <= 1 ? true : false} variant="secondary" onClick={() => setCount(count - 1)}>less</Button>
                    <Button variant="secondary" disabled>{count && count <= 1 ? "Count 1" : `Count ${count}`}</Button>
                    <Button variant="secondary" onClick={() => setCount(count + 1)}>more</Button>
                </ButtonGroup></div>

                <Button className="mt-2 " onClick={clearLocal} size="lg" variant="success" >Buy</Button>
            </Figure>
        </div>
    )
}

export default BurgerCart
