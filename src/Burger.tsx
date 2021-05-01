import React from 'react'
import { Link } from 'react-router-dom';


interface burger {
    burger: object,

}
const Burger: React.FC<burger> = (props: any) => {



    return <Link className="col-sm d-flex" to={`/burger-detail/${props.burger.id}`}>
        <div className="card  m-2 p-2 " >
            <img className="card-img-top flex-grow-1" src={props.burger.img} alt="burger" />
            <div className="card-body">
                <p className="card-text">{props.burger.name}</p>
            </div>
        </div>
    </Link>


}




export default Burger
