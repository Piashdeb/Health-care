import React from 'react';
import { Link } from 'react-router-dom';
import './Homecard.css';

const Homecard = (props) => {
    const { id, name, img, description } = props.service;

    return (
        <div>
            <div className="col w-75 mx-auto mt-5 ">
                <div className="card text-center body-card bg-secondary text-white">
                    <img src={img} className="card-img-top img-card" alt="..."></img>
                    <div className="card-body">

                        <h2 className="card-title">{name}</h2>
                        <hr />
                        <p className="card-text">{description}</p>
                        <Link to={`/service/${id}`}><button className='btn-danger px-3 py-2'>Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homecard;