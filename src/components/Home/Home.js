import React, { useEffect, useState } from 'react';
import Homecard from '../Homecard/Homecard';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./banner-img2.png" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="./image 1.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="./banner-img-3.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <hr />
            <h1 className='text-center'>Services</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-6">
                {
                    services.map(service => <Homecard key={service.id} service={service}></Homecard>)
                }

            </div>
            <br /><br /><br />
            <hr />
            <div>
                <div className='text-center container'>
                    <h3>Have Any Questions?</h3>
                    <h2>“ Our mission is to enhence health and well-being by providing the best total healthcare. ”</h2>
                    <h3 className='text-danger'>What is your question in mind?</h3>
                    <div className='row row-cols-1 row-cols-md-2 g-6'>
                        <div className='text-start'>
                            <h3 className='text-warning'>Who should or should not be using this drug?</h3>
                            <p>When taken (usually by swallowing, inhaling, or injecting), abused drugs find their way into the bloodstream. From there, they move to the brain and other parts of the body. In the brain, drugs may intensify or dull the senses, change how alert or sleepy people feel, and sometimes decrease physical pain.</p>
                            <br />
                            <br />
                            <h3 className='text-warning'>How will my use of this medication be monitored?</h3>
                            <p>Medication monitoring may involve blood tests but can also include other monitoring such as blood pressure, weight or electrocardiograms. Monitoring can be required before initiating medication, soon after starting, or regularly over the course of treatment.</p>
                        </div>
                        <div className='text-start'>
                            <h3 className='text-warning'>How will it function in my body?</h3>
                            <p>Body functions are the physiological or psychological functions of body systems. The body's functions are ultimately its cells' functions. Survival is the body's most important business. Survival depends on the body's maintaining or restoring homeostasis, a state of relative constancy, of its internal environment.</p>
                            <br /><br />
                            <h3 className='text-warning'>How long dose take my check-up test? I’m 56 years?</h3>
                            <p>Usually we try to do as much as possible so that our patients does not have any difficult and provides prompt treatment.</p>
                        </div>

                    </div>
                </div>
                <hr />
            </div>
            <div id="contact" className="form p-5">
                <h1>Contact Us</h1>


                <input className="form1 mt-3 w-75" type="text" name="fname" id="fname" placeholder="First Name..." /><br />

                <input className="form1 mt-3 w-75" type="text" name="lname" id="lname" placeholder="Last Name..." /><br />

                <input className="form1 mt-3 w-75" type="text" name="email" id="email" placeholder="Email..." /><br />

                <textarea className='mt-3 w-75' name="text" id="" cols="30" rows="10" placeholder="Your Message...."></textarea><br />
                <input className="button2" type="button" value="Submit" />
                <input className="button2" type="reset" value="Reset" />
            </div>



        </div>
    );
};

export default Home;