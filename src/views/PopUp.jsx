import React, { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import "./PopUp.css";
import { Link } from 'react-router-dom';

const PopUp = (props) => {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopUp(false);
    };


    return (
        showPopUp && (
            <div className="popup">
                <button onClick={handleClose} className="close-button">
                    X
                </button>
                <p><strong>Already have an account?</strong></p>
                <LoginForm setUser={props.setUser} onLoginSuccess={handleClose} />
                <Link to="/SignUp" className="create" onClick={handleClose}>No? Create Account! <strong>Go to SignUp</strong></Link>
            </div>
        )
    );
};

export default PopUp;
