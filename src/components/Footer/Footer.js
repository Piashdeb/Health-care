import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className=' bg-dark'>
                <div id="contact" class="container mt-5 pb-5">
                    <div class="row" >
                        <div class="col-lg-3 footer-anchor">
                            <h1> <span className='text-light fs-1'>Health</span><span className='text-warning'>Care</span></h1>
                            <p className='text-light'>A Great Place to Work. A Great Place to Receive Care.</p>
                        </div>
                        <div class="col-lg-2 footer-anchor text-light">
                            <h3>Compnany</h3><br />
                            <p><a href="#">About</a></p>
                            <p><a href="#">Carrers</a></p>
                            <p><a href="#">Mobile</a></p>
                        </div>
                        <div class="col-lg-2 footer-anchor text-light">
                            <h3>Contact</h3><br />
                            <p><a href="#">Help/FAQ</a></p>
                            <p><a href="#">Press</a></p>
                            <p><a href="#">Affilates</a></p>
                        </div>
                        <div class="col-lg-2 footer-anchor text-light">
                            <h3>More</h3><br />
                            <p><a href="#">Airelinefees</a></p>
                            <p><a href="#">Airline</a></p>
                            <p><a href="#">Low fare tips</a></p>
                        </div>
                        <div class="col-lg-3 footer-anchor">
                            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;