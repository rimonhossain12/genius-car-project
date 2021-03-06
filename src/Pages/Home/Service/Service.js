import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const service = ({ service }) => {
    // const { service } = props;
    const { id, name, price, img, descritpion, } = service;

    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>price: {price}</h5>
            <p className="px-3">{descritpion}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book{name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default service;