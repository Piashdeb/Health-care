import React from 'react';

const Doctorcard = (props) => {
    const { name, img, description } = props.doctor;
    return (
        <div>
            <div className="col w-75 mx-auto mt-5 ">
                <div className="card text-center body-card bg-secondary text-white">
                    <img src={img} className="card-img-top img-card" alt="..."></img>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{description}</p>
                        <button className='btn-danger px-3 py-2'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctorcard;