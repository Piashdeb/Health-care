import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand"> <h3> <span className='text-black fs-1'>Health</span><span className='text-warning'>Care</span></h3> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/doctor'>Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/about'>About</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    user.displayName &&
                                    <span>{user.displayName}</span>
                                }
                                {user.photoURL &&
                                    <img style={{ width: '30px', height: '30px' }} src={user.photoURL} alt="" />
                                }
                                <li className="nav-item">
                                    {user.email ?
                                        <button onClick={logOut}>Log Out</button>
                                        :
                                        <Link className="nav-link" to='/login'>Register</Link>
                                    }
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;