import React, { useEffect, useState } from 'react';
import Doctorcard from '../Doctorcard/Doctorcard';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-6">
                {
                    doctors.map(doctor => <Doctorcard key={doctor.id} doctor={doctor}></Doctorcard>)
                }
            </div>
        </div >
    );
};

export default Doctor;