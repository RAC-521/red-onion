import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './Food.css';

const Food = (props) => {
    const {name, description, price, image} = props.food;

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt=""/>
            </div>
            <div className="card-body">
                <p>{name}</p>
                <p style={{color: 'grey'}}><small>{description}</small></p>
                <h3>${price}</h3>
            </div>
        </div>
    );
};

export default Food;