import React from 'react';
import './Service.css';
const service = ({ service }) => {
    // const { service } = props;
    const { name, price, img, descritpion, id } = service;

    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>price: {price}</h5>
            <p className="px-3">{descritpion}</p>
            <button className="btn btn-warning">Book{name.toLowerCase()}</button>
        </div>
    );
};

export default service;